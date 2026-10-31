import { ShieldCheck } from "lucide-react";

const PrivacySec = () => {
  return (
    <section className="flex gap-3 rounded-2xl bg-primPurple/[0.04] p-5">
      <ShieldCheck
        className="mt-0.5 h-5 w-5 shrink-0 text-primPurple/70"
        aria-hidden="true"
      />
      <div>
        <h3 className="font-secondaryBold text-[15px]">Your privacy</h3>
        <p className="caption mt-1 text-primPurple/70">
          Your personal details will only be used to provide you with the goods
          or services you've requested or information you'd reasonably expect or
          have agreed to.
        </p>
      </div>
    </section>
  );
};

export default PrivacySec;
