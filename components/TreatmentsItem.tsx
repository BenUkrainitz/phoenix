/**
 * TreatmentsItem Component
 *
 * Displays a treatment/service item with decorative icon
 * Used on Treatments page in a grid layout
 *
 * Features:
 * - Decorative accent shape (diamond-like) next to title
 * - Treatment title
 * - Description text
 * - Responsive alignment (centered on mobile, left on desktop)
 *
 * @param title - Treatment/service name
 * @param description - Treatment/service description
 */
type PropsType = {
  title: string;
  description: string;
};

const TreatmentsItem = ({ title, description }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-start text-start">
      {/* Title row with decorative icon */}
      <div className="flex items-center gap-[12px] mb-2">
        {/* Decorative accent shape */}
        <div className="w-[14px] h-[14px] bg-accent rounded-full shrink-0 shadow-sm"></div>
        <h3 className="text-xl font-bold font-primary text-primary">{title}</h3>
      </div>
      {/* Description text with start padding to align with title */}
      <p className="ps-6 text-[15px] leading-relaxed text-primary/80">{description}</p>
    </div>
  );
};

export default TreatmentsItem;
