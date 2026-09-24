/**
 * About Page Component
 * 
 * Displays information about the skincare salon including:
 * - Company image
 * - Mission statement
 * - Statistics (Years on Market, Happy Clients, Natural Ingredients)
 * - Call-to-action button
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Image from "next/image";
import StatsItem from "@/components/StatsItem";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-16 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* Media / Image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] rounded-3xl overflow-hidden shadow-2xl bg-[#eedfd5] border-4 border-white/60 mb-8 xl:mb-0"
          >
            {/* <!-- INSERT_INSTAGRAM_IMAGE_ABOUT --> */}
            <Image
              src="/assets/about/img.jpg"
              fill
              alt="פניקס - קליניקה לאסתטיקה וקוסמטיקה"
              quality={100}
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.6, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-center xl:items-start xl:max-w-[650px] text-center xl:text-start mx-auto xl:mx-0"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0cfbc]/70 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <span>הסיפור של פניקס</span>
            </div>

            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none text-primary">
              פינוק מלכותי ומקצועיות ללא פשרות
            </h2>

            <p className="lead max-w-[600px] mx-auto xl:mx-0 text-primary/85 leading-relaxed">
              קליניקת Phoenix Cosmetology נולדה מתוך תשוקה לאסתטיקה מוקפדת, בריאות העור ומתן מענה אישי ומדויק לכל לקוחה. אנו מביאים לדימונה את הבשורות המתקדמות ביותר בעולם הטיפוח – מטקסי ספא ראש יפני מסורתיים ועד טיפולי לייזר ופנים מהשורה הראשונה.
            </p>

            {/* Statistics grid */}
            <div className="grid grid-cols-3 gap-6 mb-12 mx-auto xl:mx-0 w-full max-w-[500px]">
              <div>
                <StatsItem countNum={10} countText="+" text="שנות ניסיון" />
              </div>
              <div>
                <StatsItem countNum={100} countText="%" text="התאמה אישית" />
              </div>
              <div>
                <StatsItem countNum={98} countText="%" text="לקוחות מרוצות" />
              </div>
            </div>

            {/* Call-to-action button */}
            <a
              href="https://wa.me/972536100932"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mx-auto xl:mx-0 shadow-lg"
            >
              קבעי תור
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
