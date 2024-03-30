"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { capitalizeFirstLetter } from "@/_lib/helpers";
import Breadcrumb from "./Breadcrumb";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { label: "home", href: "/" },
    { label: "journey", href: "/journey" },
    { label: "bookmarks", href: "/bookmarks" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <Image
          src="/menu.svg"
          width={32}
          height={32}
          alt="menu"
          priority={true}
        ></Image>
      </div>
      <Breadcrumb pathname={pathname} />
      <div
        className={cn(styles.list, { [styles.open]: isMenuOpen })}
        onClick={toggleMenu}
      >
        <div className={styles.menuContainer}>
          {routes.map((link, i) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                href={link.href}
                className={cn(styles.listItem, {
                  [styles.active]: isActive,
                })}
                key={i}
              >
                <div className={styles.icon}>
                  <Image
                    src={`/${link.label}.svg`}
                    width={24}
                    height={24}
                    alt={link.label}
                    priority={true}
                  ></Image>
                </div>
                <span>{capitalizeFirstLetter(link.label)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
