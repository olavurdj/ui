"use client"

import { Badge, clx } from "@medusajs/ui"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "@/types/nav"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function Sidebar({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return (
    <aside className="border-ui-border-base w-sidebar relative block h-full border-r">
      {items.length ? (
        <div className="sticky inset-x-0 bottom-0 top-[56px] h-screen max-h-[calc(100vh-58px)] w-full overflow-auto p-6">
          {items.map((item, index) => (
            <div key={index} className={clx("pb-6")}>
              <h4 className="text-ui-fg-muted mb-0.5 rounded-md px-3 py-1.5 text-xs font-medium uppercase leading-5">
                {item.title}
              </h4>
              <ul>
                {item?.items?.length && (
                  <SidebarNavItems items={item.items} pathname={pathname} />
                )}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </aside>
  )
}

interface SidebarItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function SidebarNavItems({ items, pathname }: SidebarItemsProps) {
  return items?.length ? (
    <li className="txt-compact-small-plus grid grid-flow-row auto-rows-max gap-0.5">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={clx(
              "bg-ui-bg-base text-ui-fg-muted group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-1.5 transition-all",
              "hover:bg-ui-bg-base-hover text-ui-fg-subtle",
              item.disabled &&
                "bg-ui-bg-base-disabled text-ui-fg-disabled cursor-not-allowed",
              {
                "bg-ui-bg-base-pressed text-ui-fg-base border-ui-border-base":
                  pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <Badge className="txt-compact-xsmall-plus ml-auto px-1">
                {item.label}
              </Badge>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={clx(
              "text-ui-fg-muted flex w-full items-center justify-between rounded-md px-3 py-1.5",
              item.disabled && "text-ui-fg-disabled"
            )}
          >
            {item.title}
            {item.label && (
              <Badge size="small" className="txt-compact-xsmall-plus px-1">
                {item.label}
              </Badge>
            )}
          </span>
        )
      )}
    </li>
  ) : null
}