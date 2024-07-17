"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

export function Navbar() {
  const pathname = usePathname();

  const routes = [
    { label: "home", href: "/" },
    { label: "journey", href: "/journey" },
    { label: "bookmarks", href: "/bookmarks" },
    { label: "blog", href: "/blog" },
  ];

  return (
    <div className="mb-16 flex flex-wrap">
      {routes.map((link, i) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            href={link.href}
            className={cn(
              isActive && "font-semibold",
              !isActive && "hover:text-neutral-800",
              "pr-2 py-1 tracking-tight transition-all",
            )}
            key={i}
          >
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
