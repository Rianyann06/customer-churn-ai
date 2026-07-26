import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export default function NavItem({
  to,
  icon: Icon,
  label,
}: NavItemProps) {
  return (
    <NavLink
  to={to}
  className={({ isActive }) =>
    `
    group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:scale-[1.02]
    ${
      isActive
        ? "border-primary/20 bg-gradient-to-r from-primary/15 to-primary/5 text-primary shadow-md shadow-primary/10"
        : "text-muted-foreground hover:border-border/60 hover:bg-muted/50 hover:text-foreground"
    }
  `
  }
>
  {({ isActive }) => (
    <>
      <div
        className={`
          flex h-10 w-10 items-center justify-center rounded-xl
          border transition-all duration-300
          ${
            isActive
              ? "border-primary/20 bg-primary/10 text-primary shadow-sm"
              : "border-transparent bg-transparent group-hover:border-primary/10 group-hover:bg-primary/5"
          }
        `}
      >
        <Icon
          size={18}
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <span className="font-medium tracking-tight">
        {label}
      </span>
    </>
  )}
</NavLink>
  );
}