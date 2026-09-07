"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
] as const;

const SERVICE_LINKS = [
  { href: "/web", label: "Web Development" },
  { href: "/mobile", label: "Mobile Development" },
  { href: "/design", label: "Branding & Design" },
  { href: "/ourteam", label: "Team as a Service" },
] as const;

type NavbarProps = {
  variant?: "light" | "dark";
};

export default function Navbar({ variant = "light" }: NavbarProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const scrollLocked = useRef(false);

  const isServicesActive = SERVICE_LINKS.some((item) => pathname === item.href);

  const lockScroll = () => {
    if (scrollLocked.current) return;
    scrollLocked.current = true;
    scrollYRef.current = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  };

  const unlockScroll = () => {
    if (!scrollLocked.current) return;
    scrollLocked.current = false;
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    window.scrollTo(0, scrollYRef.current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    unlockScroll();
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }
    lockScroll();
    setMenuOpen(true);
  };

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        closeMenu();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  useEffect(() => () => unlockScroll(), []);

  const linkClass = (active: boolean) =>
    `relative inline-flex items-center py-1 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
      active
        ? "text-[#7BB668]"
        : isDark
          ? "text-white/80 hover:text-white"
          : "text-[#171D3F]/80 hover:text-[#171D3F]"
    }`;

  const lightSurface = {
    backgroundImage: "url(/Background.png)",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundColor: "#f3f5f0",
  } as const;

  const capsuleGlass = isDark
    ? {
        background: "rgba(4, 8, 28, 0.35)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }
    : {
        background: "rgba(243, 245, 240, 0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      };

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-[110] w-full ${
        isDark ? "bg-[#04081C] text-white" : "text-[#171D3F]"
      }`}
      style={isDark ? undefined : lightSurface}
    >
      <div className="mx-auto w-full max-w-screen-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <div
          className={`flex h-11 w-full min-w-0 items-center justify-between gap-2 overflow-visible rounded-full py-0 pl-2.5 pr-12 sm:h-14 sm:gap-4 sm:px-3 md:h-[58px] md:px-5 lg:pr-5 ${
            isDark
              ? "border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              : "border border-black/10 shadow-[0_8px_30px_rgba(4,8,28,0.06)]"
          } ${scrolled ? "shadow-[0_12px_40px_rgba(4,8,28,0.10)]" : ""}`}
          style={capsuleGlass}
        >
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-10">
          <Link href="/" aria-label="CircleX home" className="shrink-0">
            <Logo dark={isDark} />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={linkClass(active)}>
                {item.label}
                {active && <ActiveMark />}
              </Link>
            );
          })}

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={`${linkClass(isServicesActive)} inline-flex items-center gap-1`}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <IoMdArrowDropdown
                className={`text-lg transition-transform duration-200 ${
                  servicesOpen || isServicesActive ? "rotate-180" : ""
                }`}
              />
              {isServicesActive && <ActiveMark />}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={`absolute left-0 top-full z-40 mt-3 w-60 overflow-hidden rounded-2xl py-2 shadow-xl ${
                    isDark
                      ? "border border-white/15 bg-[#04081C]/55 text-white shadow-black/40"
                      : "border border-white/50 bg-white/55 text-[#171D3F] shadow-black/10"
                  }`}
                  style={{
                    backdropFilter: "blur(28px) saturate(180%)",
                    WebkitBackdropFilter: "blur(28px) saturate(180%)",
                  }}
                  role="menu"
                >
                  {SERVICE_LINKS.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          active
                            ? "bg-[#7BB668] text-white"
                            : isDark
                              ? "text-white/80 hover:bg-white/10 hover:text-white"
                              : "text-[#171D3F]/80 hover:bg-[#7BB668]/10 hover:text-[#171D3F]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        </div>

        <div className="hidden shrink-0 lg:block">
          <ContactButton dark={isDark} />
        </div>
        </div>
      </div>
    </header>

        <button
          type="button"
          className={`fixed z-[120] flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border lg:hidden ${
            isDark
              ? "border-white/40 bg-[#04081C] text-white shadow-lg"
              : "border-transparent bg-[#04081C] text-white shadow-lg"
          }`}
          style={{
            top: "max(0.65rem, calc(env(safe-area-inset-top) + 0.5rem))",
            left: "calc(100vw - 3.35rem)",
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-[18px]" aria-hidden="true">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              className={`absolute inset-0 m-auto transition-opacity duration-150 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M1 1h16M1 7h16M1 13h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`absolute inset-0 m-auto transition-opacity duration-150 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>

      <div
        className={`fixed inset-0 z-[100] h-[100dvh] w-full lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-150 ease-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          } ${isDark ? "bg-[#04081C]/95" : "bg-[#f3f5f0]/96"}`}
          style={
            menuOpen
              ? {
                  backdropFilter: "blur(18px) saturate(140%)",
                  WebkitBackdropFilter: "blur(18px) saturate(140%)",
                }
              : undefined
          }
        />

        <nav
          className={`relative z-10 flex h-[100dvh] w-full flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] transition-opacity duration-150 ease-out sm:px-7 sm:pt-28 ${
            menuOpen ? "opacity-100" : "opacity-0"
          } ${isDark ? "text-white" : "text-[#04081C]"}`}
        >
              <div className="flex flex-1 flex-col gap-1">
                {NAV_LINKS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-1 py-2 text-[26px] font-semibold leading-tight tracking-tight sm:py-3 sm:text-[34px] ${
                        active
                          ? "text-[#7BB668]"
                          : isDark
                            ? "text-white"
                            : "text-[#04081C]"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  className={`flex items-center justify-between rounded-2xl px-1 py-2 text-left text-[26px] font-semibold leading-tight tracking-tight sm:py-3 sm:text-[34px] ${
                    isServicesActive
                      ? "text-[#7BB668]"
                      : isDark
                        ? "text-white"
                        : "text-[#04081C]"
                  }`}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <IoMdArrowDropdown
                    className={`text-3xl opacity-50 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`ml-1 flex flex-col border-l ${
                          isDark
                            ? "border-white/15 text-white/70"
                            : "border-black/10 text-[#171D3F]/65"
                        }`}
                      >
                        {SERVICE_LINKS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`px-5 py-2.5 text-[19px] font-medium ${
                              pathname === item.href
                                ? "text-[#7BB668]"
                                : isDark
                                  ? "text-white/80"
                                  : "text-[#04081C]/80"
                            }`}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={`mt-auto flex items-center justify-center gap-1 rounded-full px-5 py-3.5 text-[15px] font-semibold ${
                  isDark
                    ? "bg-white/12 text-white ring-1 ring-white/20"
                    : "bg-black/8 text-[#04081C] ring-1 ring-black/10"
                }`}
              >
                Contact Us
                <MdOutlineKeyboardArrowRight className="text-lg" />
              </Link>
            </nav>
      </div>
    <div
      className="h-[64px] sm:h-[76px] md:h-[82px]"
      aria-hidden="true"
      style={isDark ? { backgroundColor: "#04081C" } : lightSurface}
    />
    </>
  );
}

function ActiveMark() {
  return (
    <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#7BB668]" />
  );
}

function ContactButton({
  dark,
  fullWidth = false,
}: {
  dark: boolean;
  fullWidth?: boolean;
}) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex items-center justify-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
        fullWidth ? "w-full" : ""
      } ${
        dark
          ? "bg-[#7BB668] text-[#04081C] hover:bg-white"
          : "bg-[#04081C] text-white hover:bg-[#7BB668] hover:text-[#04081C]"
      }`}
    >
      Contact Us
      <MdOutlineKeyboardArrowRight className="text-lg transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

function Logo({ dark }: { dark: boolean }) {
  return (
    <svg
      width="121"
      height="49"
      viewBox="0 0 121 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto sm:h-9 lg:h-10"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6838 9.87762C30.7526 10.9252 33.4136 12.9934 35.2648 15.7698L33.2149 17.278C31.6754 14.9691 29.4625 13.2491 26.9104 12.3779C24.3582 11.5067 21.6055 11.5317 19.0681 12.4489C16.5306 13.3662 14.3463 15.1259 12.8449 17.4624C11.3436 19.7989 10.6068 22.5851 10.7459 25.4002C10.885 28.2154 11.8924 30.9065 13.6159 33.0671C15.3395 35.2278 17.6855 36.7405 20.2998 37.3769C22.914 38.0133 25.6543 37.7387 28.1069 36.5947C30.5594 35.4506 32.591 33.4993 33.8946 31.0353L36.0821 32.3125C34.5145 35.2753 32.0717 37.6218 29.1226 38.9974C26.1735 40.3731 22.8783 40.7033 19.7348 39.938C16.5913 39.1728 13.7702 37.3538 11.6977 34.7557C9.62518 32.1576 8.4138 28.9216 8.24655 25.5365C8.0793 22.1514 8.96525 18.801 10.7706 15.9915C12.5759 13.182 15.2025 11.066 18.2537 9.963C21.3049 8.86003 24.615 8.83006 27.6838 9.87762ZM63.8619 18.8574H66.0266V34.962C66.0266 35.3722 66.2048 35.72 66.5614 36.0054C66.9349 36.2907 67.3763 36.4334 67.8856 36.4334V38.7073C67.3254 38.7073 66.799 38.6092 66.3067 38.413C65.8313 38.2168 65.4069 37.9493 65.0334 37.6105C64.6768 37.2716 64.3882 36.8792 64.1675 36.4334C63.9638 35.9697 63.8619 35.4792 63.8619 34.962V18.8574ZM41.655 25.0639V38.4398H39.4649V25.0639H41.655ZM39.4649 21.4208C39.4649 20.816 39.9551 20.3258 40.5599 20.3258C41.1647 20.3258 41.655 20.816 41.655 21.4208V21.7899C41.655 22.3947 41.1647 22.885 40.5599 22.885C39.9551 22.885 39.4649 22.3947 39.4649 21.7899V21.4208ZM45.9586 38.4398H43.7685V31.7518C43.7685 30.7887 43.9552 29.8792 44.3287 29.0231C44.7023 28.1671 45.2116 27.4269 45.8567 26.8027C46.5019 26.1785 47.2489 25.6881 48.0978 25.3314C48.9636 24.9568 49.8889 24.7696 50.8736 24.7696V27.0702C50.1945 27.0702 49.5579 27.1951 48.9636 27.4448C48.3694 27.6766 47.8431 28.0066 47.3847 28.4346C46.9433 28.8626 46.5953 29.362 46.3406 29.9327C46.0859 30.5034 45.9586 31.1098 45.9586 31.7518V38.4398ZM55.5527 38.092C56.3506 38.4487 57.208 38.627 58.1248 38.627C58.8379 38.627 59.5339 38.4576 60.213 38.1187C60.8922 37.7799 61.5118 37.3162 62.0721 36.7277L60.5441 35.1225C60.1706 35.5149 59.7801 35.8181 59.3727 36.0321C58.9652 36.2461 58.5492 36.3531 58.1248 36.3531C57.5136 36.3531 56.9364 36.2283 56.3931 35.9786C55.8498 35.7289 55.3744 35.399 54.967 34.9888C54.5765 34.5608 54.2624 34.0614 54.0247 33.4907C53.787 32.92 53.6682 32.3136 53.6682 31.6716C53.6682 31.0295 53.787 30.4231 54.0247 29.8524C54.2624 29.2817 54.5765 28.7824 54.967 28.3543C55.3744 27.9263 55.8498 27.5964 56.3931 27.3645C56.9364 27.1148 57.5136 26.99 58.1248 26.99C58.5492 26.99 58.9652 27.1059 59.3727 27.3378C59.7801 27.5518 60.1706 27.846 60.5441 28.2206L62.0721 26.6155C61.5118 26.0269 60.8922 25.5632 60.213 25.2244C59.5339 24.8677 58.8379 24.6893 58.1248 24.6893C57.208 24.6893 56.3506 24.8766 55.5527 25.2511C54.7547 25.6078 54.0502 26.1072 53.439 26.7492C52.8448 27.3734 52.3694 28.1136 52.0128 28.9696C51.6733 29.8078 51.5035 30.7085 51.5035 31.6716C51.5035 32.6346 51.6733 33.5442 52.0128 34.4002C52.3694 35.2385 52.8448 35.9697 53.439 36.5939C54.0502 37.2181 54.7547 37.7175 55.5527 38.092ZM77.8611 28.1403C78.2346 28.4435 78.5487 28.818 78.8034 29.2639C79.075 29.6919 79.2787 30.1556 79.4146 30.655H70.8069C70.9257 30.1556 71.121 29.6919 71.3926 29.2639C71.6643 28.818 71.9868 28.4435 72.3603 28.1403C72.7338 27.8193 73.1498 27.5696 73.6082 27.3913C74.0836 27.2129 74.5844 27.1237 75.1107 27.1237C75.637 27.1237 76.1294 27.2129 76.5878 27.3913C77.0631 27.5696 77.4876 27.8193 77.8611 28.1403ZM72.5131 38.2258C73.3281 38.5824 74.1939 38.7608 75.1107 38.7608C75.8238 38.7608 76.5114 38.5914 77.1735 38.2525C77.8526 37.8958 78.4723 37.4321 79.0326 36.8614L77.5046 35.2563C77.1311 35.6308 76.7406 35.934 76.3331 36.1659C75.9256 36.3799 75.5182 36.4869 75.1107 36.4869C74.5844 36.4869 74.0836 36.3977 73.6082 36.2194C73.1498 36.041 72.7338 35.7913 72.3603 35.4703C71.9868 35.1493 71.6643 34.7748 71.3926 34.3467C71.121 33.9187 70.9257 33.4461 70.8069 32.9289H81.6811C81.715 32.59 81.732 32.3493 81.732 32.2066V31.8053C81.732 30.8422 81.5537 29.9327 81.1972 29.0766C80.8577 28.2206 80.3908 27.4804 79.7965 26.8562C79.2023 26.232 78.4978 25.7416 77.6828 25.3849C76.8849 25.0103 76.0275 24.8231 75.1107 24.8231C74.1939 24.8231 73.3281 25.0103 72.5131 25.3849C71.7152 25.7416 71.0106 26.232 70.3994 26.8562C69.8052 27.4804 69.3298 28.2206 68.9733 29.0766C68.6338 29.9327 68.464 30.8422 68.464 31.8053C68.464 32.7684 68.6338 33.669 68.9733 34.5072C69.3298 35.3455 69.8052 36.0856 70.3994 36.7277C71.0106 37.3519 71.7152 37.8512 72.5131 38.2258Z"
        fill={dark ? "white" : "black"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.757 25.1638L98.6215 19.059H93.0503L99.8951 32.385H94.4625L89.9332 38.7434H95.5045L99.9532 32.4981L103.161 38.7434H108.732L101.773 25.1943H107.307L111.836 18.8359H106.265L101.757 25.1638Z"
        fill="#7BB668"
      />
    </svg>
  );
}
