import { useForm } from "@formspree/react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "mohamedechaara1@gmail.com",
    href: "mailto:mohamedechaara1@gmail.com",
  },
  {
  label: "WhatsApp",
  value: "+212 681747938",
  href: "https://wa.me/212681747938?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20portfolio.",
  icon: <FaWhatsapp />,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Morocco",
    href: "#",
  },
];

export default function Contact({ darkMode }) {
  const [state, handleSubmit] = useForm("xbglonny");

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-4 text-center text-3xl font-bold md:text-4xl ${
            darkMode ? "text-white" : "text-slate-950"
          }`}
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        {/* Description */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-center leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          Un projet, une opportunité ou une idée ?
          <br />
          Discutons-en et construisons quelque chose de moderne ensemble.
        </p>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl border p-5 transition hover:-translate-y-1 hover:border-cyan-400 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-slate-200 bg-white/80 shadow-sm"
                }`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  {item.icon}
                </span>

                <span>
                  <span className="block text-sm text-cyan-400">
                    {item.label}
                  </span>

                  <span
                    className={
                      darkMode ? "text-slate-200" : "text-slate-800"
                    }
                  >
                    {item.value}
                  </span>
                </span>
              </a>
            ))}

            {/* Social media */}
            <div className="flex gap-3 pt-3">
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/mohamedechaara",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/mohamed-echaara-500a87367/",
                  label: "LinkedIn",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`grid h-11 w-11 place-items-center rounded-full border transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                    darkMode
                      ? "border-white/10 bg-white/5 text-slate-200"
                      : "border-slate-200 bg-white/80 text-slate-700"
                  }`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            className={`rounded-xl border p-6 ${
              darkMode
                ? "border-white/10 bg-slate-900/65"
                : "border-slate-200 bg-white/85 shadow-sm"
            }`}
          >

            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className={`rounded-lg border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                    : "border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
                }`}
              />

              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                required
                className={`rounded-lg border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                    : "border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
                }`}
              />

            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              className={`mt-4 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                  : "border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
              }`}
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane />

              {state.submitting ? "Envoi..." : "Envoyer Message"}
            </button>

            {/* Success message */}
            {state.succeeded && (
              <p className="mt-4 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">
                Merci ! Votre message a été envoyé avec succès.
              </p>
            )}

            {/* Error message */}
            {state.errors && (
              <p className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
}