import { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Loader2, Lock } from "lucide-react";
import clsx from "clsx";
import { useStage } from "@/zustand/stageStore";
import Title from "./Title";

export interface CheckoutStep {
  path: string;
  label: string;
}

interface StepperProps {
  steps: CheckoutStep[];
}

const Stepper = ({ steps }: StepperProps) => {
  const { step } = useParams();
  const allowedStage = useStage((state) => state.allowedStage);
  const current = Math.max(
    0,
    steps.findIndex((s) => s.path === step)
  );

  return (
    <nav aria-label="Checkout progress">
      {/* Mobile: compact label + bar */}
      <div className="md:hidden">
        <p className="caption mb-2 text-primPurple/70">
          Step {current + 1} of {steps.length}
          <span className="mx-1.5">·</span>
          <span className="font-secondarySBold text-primPurple">
            {steps[current].label}
          </span>
        </p>
        <div className="flex gap-1.5">
          {steps.map((s, i) => (
            <div
              key={s.path}
              className={clsx(
                "h-1.5 flex-1 rounded-full transition-colors duration-300",
                i <= current ? "bg-primPurple" : "bg-primPurple/15"
              )}
            />
          ))}
        </div>
      </div>

      {/* Tablet & desktop: numbered steps */}
      <ol className="hidden items-center md:flex">
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          const reachable = !active && i + 1 <= allowedStage;
          const content = (
            <>
              <span
                className={clsx(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-secondaryBold text-sm transition-colors duration-300",
                  done && "bg-primPurple text-primWhite",
                  active &&
                    "bg-primPurple text-primWhite ring-4 ring-lilac/50",
                  !done && !active && "border-2 border-primPurple/20 text-primPurple/50"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={clsx(
                  "whitespace-nowrap font-secondarySBold text-[15px]",
                  active || done ? "text-primPurple" : "text-primPurple/50"
                )}
              >
                {s.label}
              </span>
            </>
          );
          return (
            <li
              key={s.path}
              className={clsx(
                "flex items-center",
                i < steps.length - 1 && "flex-1"
              )}
              aria-current={active ? "step" : undefined}
            >
              {reachable ? (
                <Link
                  to={s.path}
                  className="flex items-center gap-3 rounded-full pr-2 transition-opacity hover:opacity-80"
                >
                  {content}
                </Link>
              ) : (
                <span className="flex items-center gap-3 pr-2">{content}</span>
              )}
              {i < steps.length - 1 && (
                <span
                  className={clsx(
                    "mx-3 h-0.5 flex-1 rounded-full transition-colors duration-300 lg:mx-5",
                    i < current ? "bg-primPurple" : "bg-primPurple/15"
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

interface CheckoutShellProps {
  steps: CheckoutStep[];
  children: ReactNode;
}

/** Page frame shared by both checkout flows. */
export const CheckoutShell = ({ steps, children }: CheckoutShellProps) => (
  <div className="surface-light flex flex-col">
    <Title title="Donate now" />
    <div className="page-container pb-20 pt-8 md:pb-28 md:pt-12">
      <Stepper steps={steps} />
      <div className="mt-8 md:mt-12">{children}</div>
    </div>
  </div>
);

interface CheckoutGridProps {
  children: ReactNode;
  aside: ReactNode;
}

/** Main column + sticky summary column on desktop; stacked on mobile/tablet. */
export const CheckoutGrid = ({ children, aside }: CheckoutGridProps) => (
  <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
    <div className="min-w-0">{children}</div>
    <aside className="flex flex-col gap-4 lg:sticky lg:top-8">{aside}</aside>
  </div>
);

export const StepHeading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-6 md:mb-8">
    <h2 className="heading-2">{title}</h2>
    {description && (
      <p className="body mt-2 max-w-prose text-primPurple/70">{description}</p>
    )}
  </div>
);

export const BackLink = ({ to, label = "Back" }: { to: string; label?: string }) => (
  <Link to={to} className="btn-ghost self-center">
    <ArrowLeft className="h-4 w-4" />
    {label}
  </Link>
);

export const ReviewBlock = ({
  title,
  editTo,
  children,
}: {
  title: string;
  editTo: string;
  children: ReactNode;
}) => (
  <section className="card p-5 md:p-6">
    <div className="mb-3 flex items-center justify-between">
      <h3 className="font-secondaryBold">{title}</h3>
      <Link
        to={editTo}
        className="font-secondarySBold text-sm text-purpleHover underline-offset-4 hover:underline"
      >
        Edit<span className="sr-only"> {title.toLowerCase()}</span>
      </Link>
    </div>
    <div className="body text-primPurple/75">{children}</div>
  </section>
);

export const PayButton = ({
  isProcessing,
  onClick,
}: {
  isProcessing: boolean;
  onClick: () => void;
}) => (
  <>
    <button
      type="button"
      onClick={onClick}
      disabled={isProcessing}
      className="btn-primary btn-lg w-full"
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          Redirecting…
        </>
      ) : (
        <>
          <Lock className="h-4 w-4" aria-hidden="true" />
          Complete donation
        </>
      )}
    </button>
    <p className="caption text-center text-primPurple/60">
      You'll be redirected to Stripe to pay securely.
    </p>
  </>
);
