"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useCallback } from "react";
import { X, Globe, Equal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type NavDataItem = {
  name: string;
  href: string;
  isActive?: boolean;
  items?: {
    label: string;
    href: string;
  }[];
};

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.791 2.188 8.46 5.996 5.58 2.188H1.408l4.984 6.518-4.723 5.399H3.69l3.646-4.166 3.187 4.166h4.068l-5.196-6.87 4.417-5.047zm-.71 10.707L3.77 3.335h1.2l7.23 9.56z" fill="currentColor" />
    </svg>
);


const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#linkedin-clip)">
            <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="linkedin-clip">
                <path d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);


const NavLink = ({ item }: { item: NavDataItem }) => {
  return (
    <li
      className={cn(
        "group flex items-center transition-all duration-500 ease-in-out w-fit",
        item.isActive ? "gap-3" : "gap-0 hover:gap-3",
      )}
    >
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out flex items-center",
          item.isActive
            ? "max-w-6 opacity-100"
            : "max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100",
        )}
      >
        <div className="h-0.5 bg-primary w-4" />
      </div>
      <a
        href={item.href}
        className={cn(
          "text-2xl sm:text-3xl sm:leading-10 leading-8 font-semibold transition-colors duration-300",
          item.isActive ? "text-primary" : "text-foreground hover:text-primary",
        )}
      >
        {item.name}
      </a>
    </li>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navData = [
    {
      name: "Home",
      href: "/",
      isActive: true,
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Projects",
      href: "#",
    },
    {
      name: "Service",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: TwitterIcon,
      url: "https://twitter.com",
    },
    {
      id: 2,
      icon: LinkedinIcon,
      url: "https://linkedin.com",
    },
    {
      id: 3,
      icon: Globe,
      url: "https://example.com",
    },
  ];

  const [sticky, setSticky] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-500">
      <nav className="max-w-7xl mx-auto sm:px-16 px-4 w-full py-2">
        <div
          className={cn(
            "w-full flex items-center gap-4 py-4 transition-all duration-500",
            sticky
              ? "px-3 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
              : "bg-transparent border-transparent",
          )}
        >
          {/* Menu */}
          <div className="relative">
              <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <DropdownMenuTrigger className="rounded-full h-auto p-3 gap-2 bg-background cursor-pointer border border-border">
                      <Equal size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={20}
                  className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-lg rounded-3xl border-none -mt-16 z-50"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-foreground">
                        Menu
                      </p>
                      <Button
                        variant={"outline"}
                        onClick={() => setMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground cursor-pointer rounded-full h-auto p-3"
                      >
                        <X size={20} />
                      </Button>
                    </div>
                    <hr className="border-border" />
                    {/* Navigation */}
                    <ul className="flex flex-col gap-4 pb-4">
                      {navData.map((item, index) => (
                        <NavLink key={index} item={item} />
                      ))}
                    </ul>
                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:bg-muted border border-border p-3 rounded-full"
                          >
                            <link.icon size={16} />
                          </a>
                        ))}
                      </div>
                      <p className="text-base font-normal text-muted-foreground w-fit">
                        © 2026 Shadcn Space
                      </p>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>

          {/* Logo */}
          <a href="#">
            <Logo />
          </a>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
