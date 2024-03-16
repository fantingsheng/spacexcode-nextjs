import Link from "next/link";
import { ReactNode } from "react";
import cn from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      className={cn(
        "px-4 py-2 rounded-full text-sm hover:text-primary transition-colors",
        active ? "bg-secondaryA text-primary" : "text-secondary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}