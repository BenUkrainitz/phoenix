/**
 * Form Component
 *
 * Contact form with fields for:
 * - Full name
 * - Email address
 * - Phone number
 * - Message (textarea)
 *
 * Note: This is a presentational component - form submission handling
 * would need to be added (e.g., using Next.js server actions or API routes)
 */
"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.phone) return;
    
    // Construct WhatsApp message with user input
    const text = encodeURIComponent(
      `שלום, שמי ${formData.name}. ${formData.phone ? `טלפון: ${formData.phone}. ` : ""}${formData.message ? `פרטים/טיפול מבוקש: ${formData.message}` : "אשמח לקבוע תור בקליניקה."}`
    );
    window.open(`https://wa.me/972536100932?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-start">
      <input
        type="text"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="input"
        placeholder="שם מלא *"
      />
      <input
        type="tel"
        required
        dir="ltr"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="input text-end"
        placeholder="מספר טלפון *"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="input"
        placeholder="כתובת אימייל (אופציונלי)"
      />
      <textarea
        className="textarea mb-2"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="איזה טיפול תרצי לקבוע? (ספא ראש יפני, לייזר, טיפול פנים...)"
      />
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button type="submit" className="btn w-full sm:w-auto shadow-md">
          קבעי תור בוואטסאפ
        </button>
        <span className="text-xs text-primary/70">מענה מהיר וישיר 053-6100932</span>
      </div>
      {submitted && (
        <p className="text-sm font-semibold text-emerald-800 bg-emerald-100/80 p-2.5 rounded-lg text-center mt-2">
          תודה! פנייתך נפתחה בוואטסאפ. נשמח לעמוד לרשותך.
        </p>
      )}
    </form>
  );
};

export default Form;
