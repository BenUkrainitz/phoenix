/**
 * Home Page Component
 * 
 * This is the main landing page of the skincare salon website
 * Uses Framer Motion for animations and custom cursor context for interactive elements
 * 
 * "use client" directive: Required for client-side features like:
 * - Hooks (useCursor, useState, useEffect, etc.)
 * - Event handlers (onClick, onMouseEnter, etc.)
 * - Browser APIs (window, document, etc.)
 * - Framer Motion animations
 */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

// Components
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      className="min-h-screen flex items-center overflow-x-hidden relative"
    >
      {/* Hero Video / Background Placeholder Container */}
      <div className="absolute inset-0 -z-10 bg-[#f7ebe1] overflow-hidden pointer-events-none opacity-60">
        {/* <!-- INSERT_HERO_VIDEO_HERE --> */}
        {/* 
          Placeholder container for background video. 
          Swap the fallback with your <video autoPlay loop muted playsInline src="..." /> tag here. 
        */}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full pt-36 pb-12 xl:pt-28 xl:pb-0 gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.4, duration: 0.9, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-start xl:max-w-[580px]"
          >
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-[#f0cfbc]/70 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-6 mx-auto xl:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>פניקס • קליניקה לאסתטיקה וקוסמטיקה מתקדמת</span>
            </div>

            {/* Headline */}
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-6 text-primary tracking-tight"
            >
              פינוק מלכותי <br />
              ומקצועיות ללא פשרות
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto xl:mx-0 text-primary/85 text-lg leading-relaxed"
            >
              היכנסי לחוויה יוקרתית של התחדשות ורוגע בדימונה: ספא ראש יפני אותנטי, הסרת שיער בלייזר בטכנולוגיה החדישה ביותר, וטיפולי פנים מתקדמים לעור זוהר ובריא.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.a
                href="https://wa.me/972536100932"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn btn-lg text-center shadow-lg"
              >
                קבעי תור
              </motion.a>

              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>

          {/* Visual / Hero Media Area */}
          <div className="flex-1 flex justify-center xl:justify-end w-full max-w-[520px] xl:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.6, duration: 1, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative w-full max-w-[420px] xl:max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#eedfd5] border-4 border-white/60"
            >
              {/* <!-- INSERT_HERO_VIDEO_HERE --> */}
              <Image
                src="/assets/home/img.png"
                fill
                priority
                className="object-cover object-center"
                alt="פניקס - קליניקה לאסתטיקה וקוסמטיקה"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating feature pill */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/40 text-start">
                <p className="text-xs text-accent font-semibold">דימונה • כיכר ז&apos;בוטינסקי 1</p>
                <p className="text-sm font-bold text-primary">ספא ראש יפני • לייזר • טיפולי פנים</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
