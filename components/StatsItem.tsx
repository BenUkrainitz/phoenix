/**
 * StatsItem Component
 *
 * Displays an animated counter statistic
 * Used on About page to show key metrics
 *
 * Features:
 * - CountUp animation numbers increment from 0 to target value
 * - Optional countText for units (%, k+, etc.)
 * - Descriptive text below the number
 *
 * @param countNum - The target number to count up to
 * @param countText - Optional text to display after the number (e.g., "k+", "%")
 * @param text - Description text displayed below the number
 */
import CountUp from "react-countup";

type PropsType = {
  countNum: number;
  countText?: string; // Optional suffix (%, k+, etc.)
  text: string;
};

const StatsItem = ({ countNum, countText, text }: PropsType) => {
  return (
    <div className="text-center font-primary">
      <div className="text-[36px] xl:text-[40px] font-bold text-accent mb-2 inline-flex items-center justify-center" dir="ltr">
        <CountUp end={countNum} delay={1.4} duration={3} />
        {countText && <span>{countText}</span>}
      </div>
      <p className="text-base text-primary/80 font-medium leading-snug">{text}</p>
    </div>
  );
};

export default StatsItem;
