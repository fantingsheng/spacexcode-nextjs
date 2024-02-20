import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-full text-sm hover:text-primary transition-colors",
        active ? "bg-secondaryA text-primary" : "text-secondary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}