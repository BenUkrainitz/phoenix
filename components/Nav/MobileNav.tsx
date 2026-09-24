/**
 * MobileNav Component - Mobile Navigation Panel
 *
 * Slide-out navigation panel for mobile devices
 * Features:
 * - Close button (X icon) to dismiss panel
 * - Vertical list of navigation links
 * - Active link highlighting
 * - Social media links at bottom
 *
 * @param setMobileNav - Function to close the mobile navigation panel
 */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "@/utils/links";
import Socials from "../Socials";

type PropsType = {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ setMobileNav }: PropsType) => {
  const pathname = usePathname();

  return (
    <nav className="relative flex flex-col justify-between h-full p-8 text-start">
      {/* Close button */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-primary font-bold text-xl tracking-wider">PHOENIX</span>
        <button
          className="cursor-pointer text-accent p-1"
          onClick={() => setMobileNav(false)}
          aria-label="סגור תפריט"
        >
          <IoCloseOutline className="text-4xl" />
        </button>
      </div>

      {/* Navigation links */}
      <ul className="flex flex-col gap-8 text-white text-xl my-auto">
        {links.map((link, index) => (
          <li key={index} className="text-center">
            <Link
              href={link.href}
              onClick={() => setMobileNav(false)}
              className={`${
                pathname === link.href && "text-accent font-semibold border-b-2 border-accent pb-1"
              } transition-colors hover:text-accent`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action and Socials */}
      <div className="flex flex-col gap-6 items-center">
        <a
          href="https://wa.me/972536100932"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileNav(false)}
          className="btn w-full !min-w-0 text-center"
        >
          קבעי תור
        </a>
        <Socials containerStyle="text-white text-lg flex gap-6 justify-center" />
      </div>
    </nav>
  );
};

export default MobileNav;
