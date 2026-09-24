/**
 * Socials Component
 *
 * Displays social media icon links
 * Reusable component with customizable container styling
 *
 * @param containerStyle - Tailwind CSS classes for styling the container
 */
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

type PropsType = {
  containerStyle: string;
};

const socialLinks = [
  {
    href: "https://wa.me/972536100932",
    icon: <FaWhatsapp className="text-xl" />,
    label: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram className="text-xl" />,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook className="text-xl" />,
    label: "Facebook",
  },
];

const Socials = ({ containerStyle }: PropsType) => {
  return (
    <ul className={`${containerStyle}`}>
      {socialLinks.map((social, index) => (
        <li key={index}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:text-accent transition-colors block p-1"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
