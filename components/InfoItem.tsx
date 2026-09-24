/**
 * InfoItem Component
 *
 * Reusable component for displaying information with an icon
 * Used on contact page for address, phone, and email sections
 *
 * @param imgSrc - Path to icon image (must start with /)
 * @param title - Heading text for the information item
 * @param description - ReactNode allows flexible content (text, HTML, components)
 */
import Image from "next/image";

type PropsType = {
  imgSrc: `/${string}`; // Template literal type ensures path starts with /
  title: string;
  description: React.ReactNode; // Allows any React content (text, JSX, components)
};

const InfoItem = ({ imgSrc, title, description }: PropsType) => {
  return (
    <div className="flex items-start gap-4 text-start">
      <div className="relative w-[32px] h-[32px] shrink-0 mt-1">
        <Image src={imgSrc} fill alt="" className="object-contain" />
      </div>
      <div className="flex-1 text-start">
        <h4 className="h4 mb-1 text-primary text-lg font-bold">{title}</h4>
        {description}
      </div>
    </div>
  );
};

export default InfoItem;
