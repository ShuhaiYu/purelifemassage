"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, Menu, PhoneCall, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/services",
      label: "Services",
      subItems: [
        { href: "/services/remedial-massage", label: "Remedial Massage" },
        { href: "/services/foot-massage", label: "Foot Massage (Reflexology)" },
        { href: "/services/hotstone-massage", label: "Hotstone Massage" },
        { href: "/services/gift-voucher", label: "Gift Voucher" },
      ],
    },
    { href: "/price-list", label: "Price List" },
    { href: "/photos", label: "Photos" },
    { href: "/visit-us", label: "Visit Us" },
  ];

  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* 桌面导航 */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) =>
              item.subItems ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent data-[state=open]:bg-accent/50">
                    <Link href={item.href} className="hover:text-primary font-[Oswald] text-[#111111] font-[400] text-lg uppercase">
                      {item.label}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-lg p-2 md:w-[300px]">
                    <ul className="grid gap-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "w-full justify-start hover:bg-accent font-[Oswald] text-[#111111] font-[400] "
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-accent font-[Oswald] text-[#111111] font-[400] text-lg uppercase"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 移动端菜单 */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="pt-16">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    {item.subItems ? (
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg w-full"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              setOpenSubmenu(
                                openSubmenu === index ? null : index
                              )
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <AnimatePresence initial={false}>
                          {openSubmenu === index && (
                            <motion.div
                              key="submenu"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-6 space-y-2 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <SheetClose key={subItem.href} asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 px-4 text-sm hover:text-primary transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-start mt-4 ml-4">
                  <PhoneCall className="h-4 w-4 text-muted-foreground" />
                  <a
                    href="tel:(02) 9905 7190"
                    className="text-[10px] text-muted-foreground ml-2"
                  >
                    (02) 9905 7190
                  </a>
                </div>
                <div className="flex items-center justify-start mt-4 ml-4">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href="mailto:2020purelifemassage@gmail.com"
                    className="text-[10px] text-muted-foreground ml-2"
                  >
                    2020purelifemassage@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <Image src="/logo.png" alt="Logo" width={120} height={40} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 桌面右侧占位 */}
        <div className="hidden md:block w-[120px]" />
      </div>
    </nav>
  );
}
