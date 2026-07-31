import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-6 bg-surface/50 border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-charcoal/60 overflow-x-auto no-scrollbar">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <React.Fragment key={item.href}>
              {index > 0 && <span className="text-charcoal/30 select-none">/</span>}
              {isLast ? (
                <span className="font-semibold text-charcoal truncate" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors shrink-0"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
