"use client";
import React from "react";
import styles from "./Breadcrumb.module.scss";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/_lib/helpers";
import cn from "classnames";

export default function BreadCrumb({ pathname }: { pathname: string }) {
  const splittedPathname = pathname.split("/").filter((path) => path);
  const separator = <span>{" > "}</span>;

  return (
    <div>
      <ul className={styles.breadcrumbContainer}>
        {pathname !== "/" && (
          <li>
            {" "}
            <Link href={"/"}>Home</Link>
          </li>
        )}
        {splittedPathname.length > 0 && separator}
        {splittedPathname.map((link, index) => {
          let href = `/${splittedPathname.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={index}>
              <li
                className={cn({
                  [styles.activeBreadcrumb]: pathname === href,
                })}
              >
                <Link href={href}>{capitalizeFirstLetter(link)}</Link>
              </li>
              {splittedPathname.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
