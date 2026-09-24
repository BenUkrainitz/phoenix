/**
 * Contact Page Component
 * 
 * Two-column layout displaying:
 * - Left: Contact information (address, phone, email) with icons
 * - Right: Contact form for users to send messages
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Form from "@/components/Form";
import InfoItem from "@/components/InfoItem";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-16 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 flex flex-col justify-center text-start"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0cfbc]/70 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-4 w-max">
              <span>יצירת קשר ותיאום תורים</span>
            </div>

            <h3 className="h3 mb-4 text-primary">פרטי התקשרות והגעה</h3>
            <p className="lead max-w-md text-primary/80 mb-8 leading-relaxed">
              נשמח לארח אותך בקליניקה שלנו בדימונה לחוויית טיפוח מלכותית ומרגיעה. צרי קשר לתיאום תור או ייעוץ.
            </p>

            <div className="flex flex-col items-start gap-8">
              {/* Address */}
              <InfoItem
                imgSrc="/assets/contact/pin.svg"
                title="כתובת הקליניקה"
                description={
                  <p className="leading-relaxed text-primary/80 font-medium">
                    כיכר ז&apos;בוטינסקי 1, דימונה
                    <br />
                    <span className="text-xs text-primary/60">גישה נוחה וחניה בקרבת מקום</span>
                  </p>
                }
              />

              {/* Phone */}
              <InfoItem
                imgSrc="/assets/contact/phone.svg"
                title="טלפון ו-WhatsApp"
                description={
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:0536100932"
                      dir="ltr"
                      className="text-primary hover:text-accent font-semibold transition-colors text-start"
                    >
                      053-6100932
                    </a>
                    <a
                      href="https://wa.me/972536100932"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent font-bold hover:underline"
                    >
                      לחצי כאן לשליחת הודעה בוואטסאפ
                    </a>
                  </div>
                }
              />

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/972536100932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-lg"
                >
                  קבעי תור
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.6, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 w-full"
          >
            <div className="bg-[#f0cfbc]/90 rounded-3xl shadow-xl w-full max-w-[580px] p-8 xl:p-10 mx-auto xl:mx-0 border border-white/50">
              <h3 className="h3 mb-2 text-primary text-center">השאירי פרטים</h3>
              <p className="text-sm text-primary/75 text-center mb-6">
                מלאי את הפרטים ונחזור אלייך בהקדם לתיאום הטיפול המושלם
              </p>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
