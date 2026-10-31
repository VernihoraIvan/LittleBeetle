import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = SheetPrimitive.Title;
const SheetDescription = SheetPrimitive.Description;

/**
 * Bottom sheet on mobile, centered dialog from tablet up.
 */
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 animate-fade-in bg-primPurple/60 backdrop-blur-sm" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 overflow-y-auto overscroll-contain bg-primBeige shadow-lift focus:outline-none",
        "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-3xl animate-sheet-up",
        "md:inset-auto md:left-1/2 md:top-1/2 md:max-h-[88dvh] md:w-[calc(100vw-4rem)] md:max-w-5xl md:rounded-3xl md:animate-pop-in",
        "md:-translate-x-1/2 md:-translate-y-1/2",
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="icon-btn absolute right-3 top-3 bg-primWhite/90 shadow-card md:right-4 md:top-4">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
};
