/**
 * Treatments Page Component
 * 
 * Displays available skincare treatments in a grid layout:
 * - Classic Facial
 * - Chemical Peel
 * - Eyebrow Waxing/Shaping
 * - HydraFacial
 * 
 * Includes treatment image and call-to-action button
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Image from "next/image";
import TreatmentsItem from "@/components/TreatmentsItem";

const Treatments = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-16 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-center xl:items-start xl:max-w-[650px] text-center xl:text-start mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0cfbc]/70 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <span>תפריט הטיפולים שלנו</span>
            </div>

            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none text-primary">
              טיפולים יוקרתיים בהתאמה אישית
            </h2>

            <p className="lead max-w-[600px] mx-auto xl:mx-0 text-primary/85 leading-relaxed">
              בקליניקת Phoenix אנו מאמינים בשילוב מנצח בין רוגע עמוק, טכנולוגיות אסתטיקה מתקדמות ותוצאות נראות לעין.
            </p>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mx-auto xl:mx-0 w-full">
              <TreatmentsItem
                title="ספא ראש יפני (Japanese Head Spa)"
                description="טקס יפני ייחודי הכולל עיסוי קרקפת עמוק, שטיפה במי גשם זורמים, הזנת סיב השערה וחוויית רוגע והפגת מתחים שאין שניה לה."
              />

              <TreatmentsItem
                title="הסרת שיער בלייזר (Laser Hair Removal)"
                description="טכנולוגיית לייזר מתקדמת ועוצמתית בסטנדרטים הגבוהים ביותר, ללא כאב, עם תוצאות חלקות ומהירות המותאמות במדויק לעורך."
              />

              <TreatmentsItem
                title="טיפולי פנים (Facial Treatments)"
                description="טיפולי עור מתקדמים, ניקוי עמוק, פילינג עדין, החדרה של חומצות וחומרים פעילים למיצוק, זוהר ורענון המראה הטבעי."
              />

              <TreatmentsItem
                title="אסתטיקה וטיפוח משלים"
                description="אבחון עור אישי ומקצועי, התאמת שגרת טיפוח ביתית מותאמת אישית וטיפולי זוהר ורענון לאירועים מיוחדים."
              />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/972536100932"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mx-auto xl:mx-0 shadow-lg"
            >
              קבעי תור
            </a>
          </motion.div>

          {/* Media / Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.6, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full xl:w-[420px] flex flex-col gap-4 items-center"
          >
            {/* Main Treatment / Instagram Preview Box */}
            <div className="w-[320px] h-[440px] xl:w-[384px] xl:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl bg-[#f0cfbc]/50 border-4 border-white/60">
              {/* <!-- INSERT_INSTAGRAM_IMAGE_1 --> */}
              {/* 
                Swap this image with your Instagram media tag, photo, or video embed:
                <img src="/your-instagram-photo-1.jpg" alt="ספא ראש יפני" className="w-full h-full object-cover" />
              */}
              <Image
                src="/assets/treatments/img.jpg"
                fill
                alt="טיפולים בקליניקת פניקס"
                quality={100}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 left-4 text-white text-start">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold block">ספא ראש יפני</span>
                <span className="text-lg font-bold font-primary">חוויה של רוגע ושלווה</span>
              </div>
            </div>

            {/* Instagram Gallery Thumbnail Slots */}
            <div className="grid grid-cols-3 gap-3 w-[320px] xl:w-[384px]">
              {/* <!-- INSERT_INSTAGRAM_IMAGE_2 --> */}
              <div className="aspect-square rounded-xl bg-[#e8cebf] relative overflow-hidden shadow-sm border border-white/50 flex items-center justify-center text-[10px] text-primary/70 font-semibold">
                <span>לייזר מתקדם</span>
              </div>
              {/* <!-- INSERT_INSTAGRAM_IMAGE_3 --> */}
              <div className="aspect-square rounded-xl bg-[#dfc3b2] relative overflow-hidden shadow-sm border border-white/50 flex items-center justify-center text-[10px] text-primary/70 font-semibold">
                <span>טיפולי פנים</span>
              </div>
              {/* <!-- INSERT_INSTAGRAM_IMAGE_4 --> */}
              <div className="aspect-square rounded-xl bg-[#e8cebf] relative overflow-hidden shadow-sm border border-white/50 flex items-center justify-center text-[10px] text-primary/70 font-semibold">
                <span>זוהר וטיפוח</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;
