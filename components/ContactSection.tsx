"use client";

import { FormEvent, useState } from "react";
import SectionTitle from "./SectionTitle";
import { contactLinks } from "@/data/siteData";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-fade py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          overline="contacto"
          title="¿Listo para lanzar algo fuera de serie?"
          description="Cuéntame sobre tu proyecto o idea. Responderé en menos de 24 horas para ayudarte a crear una presencia digital con carácter."
        />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-accent/30 bg-base/80 p-8 shadow-lg"
          >
            <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-light/70">
              Nombre
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-accent/40 bg-base/70 px-4 py-3 text-base text-light placeholder:text-light/40 focus:border-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </label>
            <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-light/70">
              Email
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-accent/40 bg-base/70 px-4 py-3 text-base text-light placeholder:text-light/40 focus:border-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </label>
            <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-light/70">
              Mensaje
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-accent/40 bg-base/70 px-4 py-3 text-base text-light placeholder:text-light/40 focus:border-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </label>

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-accent/50 bg-accent/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent transition-all duration-500 hover:bg-accent/40 hover:text-base hover:shadow-glow"
            >
              Enviar mensaje
            </button>

            {submitted && (
              <p className="text-sm text-accent/80">
                ¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.
              </p>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-accent/30 bg-base/80 p-6">
              <h3 className="font-heading text-lg text-light">¿Prefieres escribirme directamente?</h3>
              <p className="mt-3 text-sm text-light/70">
                Envíame un correo a <span className="text-accent">hola@wahandri.dev</span> o conéctame en redes.
              </p>
            </div>

            <div className="rounded-3xl border border-accent/30 bg-base/80 p-6">
              <h4 className="text-xs uppercase tracking-[0.4em] text-accent/70">Redes</h4>
              <ul className="mt-4 space-y-2">
                {contactLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-light/80 transition hover:text-accent"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent/60" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
