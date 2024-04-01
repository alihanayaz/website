"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import cn from "classnames";
import Breadcrumb from "./Breadcrumb";
import Icon from "@/_components/Icon";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/journey" },
    { label: "Bookmarks", href: "/bookmarks" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <Icon name="Menu" />
      </div>
      <div className={cn(styles.list, { [styles.open]: isMenuOpen })}>
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
                onClick={isMenuOpen ? toggleMenu : undefined}
              >
                <div className={styles.icon}>
                  <Icon name={link.label} />
                </div>
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div
            onClick={toggleMenu}
            className={cn(styles.listItem, styles.closeButton)}
          >
            <div className={styles.icon}>
              <Icon name="Close" />
            </div>
            <span>Close</span>
          </div>
        </div>
      </div>
      <Breadcrumb pathname={pathname} />
    </div>
  );
}
