import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0A0706]">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-[#6B8A3A] shadow-sm">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-[clamp(1.5rem,5vw,6rem)] py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/20 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight text-white">TooTime</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Nosotros</a>
            <a href="#how" className="text-sm text-white/80 hover:text-white transition-colors">Cómo funcina</a>
            <a href="#reviews" className="text-sm text-white/80 hover:text-white transition-colors">Opiniones</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Acceso</a>
          </div>

          <a
            href="#contact"
            className="rounded-xl border border-white/40 bg-white px-4 py-2 text-sm font-medium text-[#6B8A3A] shadow-sm hover:bg-white/90 transition-colors"
          >
            Solicitar acceso
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white">
        {/* Background image — full-bleed 100vw, desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <Image
            src="/images/hero-restaurante.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "65% top" }}
          />
          {/* Gradient overlay — progressive left-to-right reveal */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, white 0%, white 30%, rgba(255,255,255,0.85) 42%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0.1) 78%, transparent 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, white 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Content — fluid container matching navbar */}
        <div className="relative mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)] py-16 md:py-20 lg:py-28">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-medium shadow-sm backdrop-blur-sm lg:bg-white/70">
              <span className="h-2 w-2 rounded-full bg-[#6B8A3A] animate-pulse" />
              Siempre actualizado &middot; En tiempo real
            </div>

            <h1 className="mt-8 text-5xl font-extrabold tracking-tight leading-[1.05] sm:text-6xl lg:text-7xl">
              Menos caos.
              <br />
              <span className="text-[#6B8A3A]">M&aacute;s control.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed opacity-65 lg:mx-0 md:text-lg">
              Todo lo que ocurre en tu local, centralizado en un sistema &uacute;nico. Siempre actualizado. En tiempo real.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href="#contact"
                className="rounded-2xl bg-[#6B8A3A] px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all"
              >
                Solicitar acceso
              </a>
              <a
                href="#how"
                className="rounded-2xl border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                C&oacute;mo funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section className="border-y border-stone-100 bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)]">
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="Visibilidad operativa"
              text="Estado del local, equipo y día a día. Siempre actualizado."
            />
            <Card
              title="Comunicación centralizada"
              text="Menos WhatsApp. Más claridad. Decisiones con contexto y trazabilidad."
            />
            <Card
              title="Publicación sin sorpresas"
              text="Turnos siempre cubiertos. Sin huecos, sin descuidos, sin pérdida de control."
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Diseñado para operaciones reales
            </h2>
            <p className="mt-2 max-w-2xl text-sm opacity-70 md:text-base">
              Decisiones, reglas, excepciones y cambios diarios en un sistema estructurado y visible.
Lo que antes dependía de memoria, mensajes o intuición, ahora queda organizado, validado y centralizado.
Sin fricción. Sin puntos ciegos. Sin perder información.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature title="Visibilidad operativa" text="Todo lo que ocurre en tu local, visible en un solo sistema. Siempre actualizado para que no te pierdas nada." />
            <Feature title="Coordinación estructurada" text="Reglas, ausencias y cambios gestionados con contexto.
Menos improvisación. Más consistencia." />
            <Feature title="Publicación con control" text="Nada se publica sin validación.
Turnos cubiertos. Reglas respetadas. Sin descuidos." />
            <Feature title="Coherencia operativa" text="Lo planificado y lo trabajado siempre alineado.
Con seguimiento y sin desajustes." />
            <Feature title="Rendimiento operativo" text="Analiza cobertura, costes y facturación para detectar desequilibrios antes de que impacten en el servicio." />
            <Feature title="Estructura de permisos" text="Cada persona accede a lo que necesita.
Visibilidad según responsabilidad." />
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="border-y border-stone-100 bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)]">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">C&oacute;mo funciona</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Step n="1" title="A&ntilde;ade tu equipo" text="Empleados, horas, estados, d&iacute;as libres y roles." />
              <Step n="2" title="Define las reglas" text="Descansos, m&iacute;nimos, turnos, festivos y excepciones." />
              <Step n="3" title="Genera y publica" text="Revisi&oacute;n r&aacute;pida, avisos claros y publicaci&oacute;n ordenada." />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Lo que cambia</h2>
            <p className="mt-2 text-sm opacity-70 md:text-base">
              Menos improvisaci&oacute;n. M&aacute;s claridad. (Aqu&iacute; pondremos testimonios reales cuando tengas 2&ndash;3 pruebas piloto.)
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Quote
              text="&ldquo;Antes era todo WhatsApp y &uacute;ltima hora. Ahora est&aacute; todo claro.&rdquo;"
              author="Gerente (piloto)"
            />
            <Quote
              text="&ldquo;Los turnos de apertura/cierre dejaron de ser un drama semanal.&rdquo;"
              author="Encargado/a (piloto)"
            />
            <Quote
              text="&ldquo;Publico el horario y ya no hay dudas ni malentendidos.&rdquo;"
              author="RRHH (piloto)"
            />
          </div>
        </div>
      </section>

      {/* ── CTA / Subscribe ── */}
      <section id="contact" className="border-t border-stone-100 bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-[clamp(1.5rem,5vw,6rem)]">
          <div className="rounded-[2rem] bg-[#6B8A3A] p-8 text-white shadow-md">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  &iquest;Quieres acceso anticipado?
                </h3>
                <p className="mt-2 text-sm opacity-90 md:text-base">
                  D&eacute;janos tu email y te avisamos cuando abramos pruebas. Sin spam. Solo avances reales.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#0A0706] outline-none"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-[#0A0706] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Avisadme
                </button>
              </form>
            </div>
          </div>

          <footer className="mt-8 flex flex-col items-start justify-between gap-3 text-xs opacity-60 md:flex-row">
            <p>&copy; {new Date().getFullYear()} TooTime</p>
            <p>Contacto: hello@tootimeapp.com (lo configuramos cuando quieras)</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

/* ── Helper components ── */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-sm border border-stone-100">
      <p className="text-xs font-medium opacity-60">{label}</p>
      <p className="mt-1 text-sm font-extrabold">{value}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.6rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm opacity-70">{text}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.6rem] border border-stone-100 bg-stone-50 p-6">
      <p className="text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm opacity-70">{text}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-[1.6rem] bg-stone-50 p-6">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#6B8A3A] text-sm font-bold text-white">
        {n}
      </div>
      <p className="mt-3 text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm opacity-70">{text}</p>
    </div>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <div className="rounded-[1.6rem] border border-stone-100 bg-stone-50 p-6">
      <p className="text-sm font-medium opacity-85">{text}</p>
      <p className="mt-4 text-xs font-semibold opacity-60">{author}</p>
    </div>
  );
}