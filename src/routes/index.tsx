import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Shield,
  Heart,
  Users,
  Check,
  Sparkles,
  Flame,
  Flower2,
  Bus,
  Package,
  UserPlus,
  Route as RouteIcon,
  Home as HomeIcon,
  LifeBuoy,
  Send,
} from "lucide-react";

import logoAsset from "@/assets/logo-sjb-transparent.png";
import coupleAsset from "@/assets/couple-sjb-local.png";
import partnersAsset from "@/assets/partners-sjb-strip.png";

const WHATSAPP_BASE = "https://wa.me/5585991141979";
const wa = (msg: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: coupleAsset },
      { name: "twitter:image", content: coupleAsset },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Assistência Familiar São João Batista",
          image: coupleAsset,
          telephone: "+55 85 99114-1979",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Rua Vereador José Evaldo, 321, loja 01, Praça da Matriz, Distrito de Croatão",
            addressLocality: "São Gonçalo do Amarante",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/assis.sjb"],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Planos />
        <Sobre />
        <Dependentes />
        <Servicos />
        <Saloes />
        <Beneficios />
        <CTABanner />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- HEADER ---------- */

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#planos", label: "Planos" },
  { href: "#saloes", label: "Salões" },
  { href: "#sobre", label: "Sobre" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#servicos", label: "Serviços" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(14,44,102,0.25)]"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <img
            src={logoAsset}
            alt="Assistência Familiar São João Batista"
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-dark/80 transition-colors hover:bg-brand-soft hover:text-brand-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={wa(
              "Olá! Conheci a Assistência Familiar São João Batista pelo site e gostaria de conhecer melhor os planos.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Fale com um consultor
          </a>
          <button
            aria-label="Abrir menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-soft"
              >
                {item.label}
              </a>
            ))}
            <a
              href={wa(
                "Olá! Conheci a Assistência Familiar São João Batista pelo site e gostaria de conhecer melhor os planos.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Fale com um consultor
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section id="inicio" className="bg-hero relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-light/50 blur-3xl animate-floaty" />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl animate-floaty"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
            <Shield className="h-3.5 w-3.5" />
            Planos em destaque
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Cuidado, acolhimento e <span className="text-brand-gradient">respeito</span> em todos os
            momentos.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Planos de assistência familiar criados para proporcionar proteção, segurança e
            tranquilidade para você e quem você ama.
          </p>

          <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-brand/15 bg-white/80 px-5 py-3 shadow-sm">
            <span className="text-sm font-medium text-brand-dark/70">Planos a partir de</span>
            <span className="text-3xl font-extrabold text-brand-dark">R$ 39,90</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
            >
              Conhecer os planos
            </a>
            <a
              href={wa(
                "Olá! Gostaria de conhecer os planos da Assistência Familiar São João Batista.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um consultor
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-dark/75">
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4 text-brand" /> Atendimento humano
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand" /> Proteção familiar
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-brand" /> Cobertura para dependentes
            </span>
            <span className="inline-flex items-center gap-2">
              <HomeIcon className="h-4 w-4 text-brand" /> 2 salões próprios
            </span>
          </div>
        </div>

        {/* Couple visual */}
        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={coupleAsset}
              alt="Consultores da Assistência Familiar São João Batista"
              className="mx-auto block h-auto w-full object-contain drop-shadow-[0_24px_35px_rgba(14,44,102,0.18)]"
            />

            {/* Floating price badge */}
            <div className="absolute -bottom-4 right-4 rotate-[-6deg] rounded-2xl bg-cta px-5 py-3 text-center text-white shadow-[var(--shadow-cta)] animate-floaty sm:-bottom-6 sm:right-8">
              <div className="text-[10px] font-semibold uppercase tracking-widest opacity-90">
                Planos a partir de
              </div>
              <div className="text-2xl font-extrabold">R$ 39,90</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOBRE ---------- */

function Sobre() {
  return (
    <section id="sobre" className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Cuidamos de quem mais importa: <span className="text-brand-gradient">sua família.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A Assistência Familiar São João Batista oferece planos pensados para proporcionar apoio,
            organização e tranquilidade para as famílias. Nosso compromisso é estar presente com
            acolhimento, respeito e atenção em todos os momentos.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Heart, title: "Acolhimento", text: "Atendimento humano e respeitoso." },
              { icon: Shield, title: "Proteção", text: "Segurança para toda a família." },
              { icon: Users, title: "Dependentes", text: "Cobertura para quem você ama." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold text-brand-dark">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="relative">
            <img
              src={coupleAsset}
              alt="Equipe São João Batista"
              className="mx-auto block h-auto max-h-[520px] w-full object-contain drop-shadow-[0_20px_28px_rgba(14,44,102,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PLANOS ---------- */

const PLANOS = [
  {
    id: "serenidade",
    name: "Plano Serenidade",
    tagline: "Essencial para começar a proteger.",
    benefits: [
      "Funeral com urna básica",
      "Kit café",
      "Cobertura para até 5 pessoas",
      "Translado de até 100 km",
      "Clube de descontos",
    ],
    cta: "Quero conhecer o Serenidade",
    wa: "Olá! Gostaria de receber mais informações sobre o Plano Serenidade.",
    highlight: false,
  },
  {
    id: "esperanca",
    name: "Plano Esperança",
    tagline: "Cobertura intermediária e completa.",
    benefits: [
      "Funeral completo",
      "Duas opções de urnas",
      "Uma coroa de flores",
      "Kit café",
      "Cobertura para até 8 pessoas",
      "Translado de até 150 km",
      "Clube de descontos",
    ],
    cta: "Quero conhecer o Esperança",
    wa: "Olá! Gostaria de receber mais informações sobre o Plano Esperança.",
    highlight: true,
  },
  {
    id: "vida-plena",
    name: "Plano Vida Plena",
    tagline: "Proteção ampla para a família inteira.",
    benefits: [
      "Funeral completo",
      "Três opções de urnas",
      "Tanatopraxia",
      "Duas coroas de flores",
      "Kit café",
      "Cobertura para até 12 pessoas",
      "Translado de até 200 km",
      "Clube de descontos",
    ],
    cta: "Quero conhecer o Vida Plena",
    wa: "Olá! Gostaria de receber mais informações sobre o Plano Vida Plena.",
    highlight: false,
  },
];

function Planos() {
  return (
    <section id="planos" className="relative bg-brand-soft/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-dark shadow-sm">
            <Sparkles className="h-4 w-4 text-brand" />
            Planos em evidência
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">
            Escolha o plano ideal para sua família
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Proteção e assistência com opções para diferentes necessidades.
          </p>
          <div className="mt-5 inline-flex items-baseline gap-2 rounded-full border border-brand/15 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm text-brand-dark/70">Planos a partir de</span>
            <span className="text-xl font-extrabold text-brand-dark">R$ 39,90</span>
          </div>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-brand/15 bg-white px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm">
            <span className="inline-flex items-center gap-2">
              <HomeIcon className="h-4 w-4 text-brand" />2 salões de velório próprios
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>Estrutura própria para acolher sua família com mais tranquilidade.</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANOS.map((p) => (
            <article
              key={p.id}
              className={`card-plan card-plan-hover relative flex flex-col p-7 ${
                p.highlight ? "md:-translate-y-3 ring-2 ring-brand/60" : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                  Recomendado
                </span>
              )}
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-dark">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.tagline}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-brand-dark/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={wa(p.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-cta text-white shadow-[var(--shadow-cta)]"
                    : "border border-brand-dark/15 bg-white text-brand-dark hover:bg-brand-soft"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Consulte disponibilidade, valores e condições com nossos consultores.
        </p>
      </div>
    </section>
  );
}

/* ---------- DEPENDENTES ---------- */

const DEPS = ["Titular", "Cônjuge", "Pai", "Mãe", "Sogra", "Sogro", "Filhos"];

function Dependentes() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Proteção para toda a família
          </h2>
          <p className="mt-3 text-muted-foreground">
            Converse com nossos consultores para verificar as condições de inclusão.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {DEPS.map((d) => (
            <div
              key={d}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-3 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand-dark">
                <Users className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm font-semibold text-brand-dark">{d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={wa("Olá! Gostaria de saber mais sobre a inclusão de dependentes nos planos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar inclusão de dependentes
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVIÇOS ---------- */

const SERVICES = [
  { icon: Sparkles, label: "Tanatopraxia" },
  { icon: Flame, label: "Cremação" },
  { icon: Flower2, label: "Ornamentação e vestimentas" },
  { icon: Flower2, label: "Coroa de flores" },
  { icon: UserPlus, label: "Inclusão de pessoa adicional" },
  { icon: RouteIcon, label: "Translado adicional" },
  { icon: Bus, label: "Transporte em ônibus ou van" },
  { icon: Package, label: "Gavetas para sepultamento" },
  { icon: HomeIcon, label: "Locação em cemitério" },
  { icon: LifeBuoy, label: "Seguro de vida" },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-brand-soft/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Serviços adicionais</h2>
          <p className="mt-3 text-muted-foreground">
            Consulte disponibilidade, valores e condições com nossa equipe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-dark">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium text-brand-dark">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SALÕES ---------- */

function Saloes() {
  return (
    <section id="saloes" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-dark">
            <HomeIcon className="h-4 w-4 text-brand" />
            Estrutura própria
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">
            2 salões de velório próprios
          </h2>
          <p className="mt-3 text-muted-foreground">
            Espaços próprios preparados com respeito e cuidado para acolher famílias e amigos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2].map((n) => (
            /* PLACEHOLDER: substituir por fotografia real do Salão {n} quando disponível */
            <div
              key={n}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-soft to-white p-10 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-dark shadow-sm">
                  <HomeIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand/80">
                    Espaço para velório
                  </div>
                  <div className="text-xl font-bold text-brand-dark">Salão {n}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Fotografia, localização e estrutura serão exibidas aqui em breve. Para mais
                informações sobre o espaço, fale com nossos consultores.
              </p>
              <a
                href={wa(`Olá! Gostaria de mais informações sobre o Salão ${n} para velórios.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand"
              >
                Saber mais <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */

function Beneficios() {
  return (
    <section id="beneficios" className="bg-brand-soft/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Mais benefícios para sua família
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Além da assistência, nossos associados podem contar com uma rede de parceiros e
            benefícios pensada para o cuidado e o bem-estar da família.
          </p>
          <ul className="mt-6 space-y-3 text-brand-dark/85">
            {[
              "Clube de descontos incluso em todos os planos",
              "Rede de empresas parceiras locais",
              "Atendimento humano e acolhedor",
              "Cobertura para dependentes da família",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a
            href="#parceiros"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-soft"
          >
            Ver empresas parceiras
          </a>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-light/50 blur-2xl" />
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, t: "Bem-estar" },
                { icon: Shield, t: "Proteção" },
                { icon: Users, t: "Família" },
                { icon: Sparkles, t: "Descontos" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="rounded-2xl bg-brand-soft p-5 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-brand-dark shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-brand-dark">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BANNER ---------- */

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-cta py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Proteja hoje quem sempre esteve ao seu lado.
          </h2>
          <p className="mt-4 text-white/85">
            Conheça nossos planos e encontre uma opção adequada para sua família.
          </p>
        </div>
        <a
          href={wa(
            "Olá! Gostaria de conversar com um consultor da Assistência Familiar São João Batista.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-brand-dark shadow-lg transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com um consultor
        </a>
      </div>
    </section>
  );
}

/* ---------- CONTATO ---------- */

const PLAN_OPTIONS = ["Plano Serenidade", "Plano Esperança", "Plano Vida Plena", "Ainda não sei"];

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    plano: PLAN_OPTIONS[0],
    dependentes: "",
    mensagem: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Solicito contato da Assistência Familiar São João Batista.\n\n` +
      `Nome: ${form.nome}\n` +
      `Telefone: ${form.telefone}\n` +
      `Plano de interesse: ${form.plano}\n` +
      `Dependentes (aprox.): ${form.dependentes}\n` +
      `Mensagem: ${form.mensagem}`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };

  const address =
    "Rua Vereador José Evaldo, 321, loja 01, Praça da Matriz, Distrito de Croatão, São Gonçalo do Amarante - CE";

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Fale com a gente</h2>
          <p className="mt-3 text-muted-foreground">
            Estamos prontos para tirar suas dúvidas e apresentar o plano ideal para sua família.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              title="Telefone e WhatsApp"
              value="(85) 99114-1979"
              href={wa(
                "Olá! Gostaria de mais informações sobre a Assistência Familiar São João Batista.",
              )}
              external
            />
            <ContactCard
              icon={MapPin}
              title="Endereço"
              value={address}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              external
              cta="Como chegar"
            />
            <ContactCard
              icon={Instagram}
              title="Instagram"
              value="@assis.sjb"
              href="https://www.instagram.com/assis.sjb"
              external
            />
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* Note: mapa aproximado a partir do endereço; ajuste caso a localização exata seja outra. */}
              <iframe
                title="Mapa aproximado — Distrito de Croatão, São Gonçalo do Amarante - CE"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="border-t border-border bg-brand-soft/60 px-4 py-2 text-xs text-muted-foreground">
                Localização aproximada com base no endereço. Confirme com nossos consultores.
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <h3 className="text-xl font-bold text-brand-dark">Solicite contato</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha e continue a conversa pelo WhatsApp.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <Field label="Nome">
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="input-base"
                  placeholder="Seu nome completo"
                />
              </Field>
              <Field label="Telefone">
                <input
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="input-base"
                  placeholder="(85) 90000-0000"
                  inputMode="tel"
                />
              </Field>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Plano de interesse">
                  <select
                    value={form.plano}
                    onChange={(e) => setForm({ ...form, plano: e.target.value })}
                    className="input-base"
                  >
                    {PLAN_OPTIONS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Nº aprox. de dependentes">
                  <input
                    value={form.dependentes}
                    onChange={(e) => setForm({ ...form, dependentes: e.target.value })}
                    className="input-base"
                    placeholder="Ex.: 4"
                    inputMode="numeric"
                  />
                </Field>
              </div>
              <Field label="Mensagem">
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="input-base min-h-[110px]"
                  placeholder="Conte-nos como podemos ajudar."
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Solicitar contato
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você será direcionado ao WhatsApp com sua mensagem pronta.
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid var(--border);
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--brand-dark);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input-base:focus {
          border-color: var(--brand);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 15%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  external,
  cta,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href: string;
  external?: boolean;
  cta?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-dark">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
          {title}
        </div>
        <div className="mt-0.5 text-sm font-medium text-brand-dark">{value}</div>
        {cta && (
          <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:underline">
            {cta} →
          </div>
        )}
      </div>
    </a>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  return (
    <footer id="parceiros" className="mt-8">
      <div className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-brand-dark">Empresas parceiras</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Benefícios e vantagens para associados da Assistência Familiar São João Batista.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[1090px] overflow-hidden rounded-[24px]">
            <img
              src={partnersAsset}
              alt="Empresas parceiras: FarmaTotal Popular, Antonio Lucas, Estética por Yanny Souza, Ópticas Paris, Clínica Dra. Jéssica Freire, LCE Óptica, Clínica Mais Saúde e CV Nutri Suplementos"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="bg-brand-dark text-white/90">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <img
              src={logoAsset}
              alt="São João Batista"
              className="h-24 w-auto max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
            />
            <p className="mt-5 max-w-md text-white/85">
              Cuidado, acolhimento e respeito em todos os momentos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/80 hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={wa("Olá!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  (85) 99114-1979
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Rua Vereador José Evaldo, 321, loja 01, Praça da Matriz, Distrito de Croatão, São
                  Gonçalo do Amarante – CE.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href="https://www.instagram.com/assis.sjb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @assis.sjb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/70 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} Assistência Familiar São João Batista. Todos os direitos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- FLOATING WHATSAPP ---------- */

function FloatingWhatsApp() {
  return (
    <a
      href={wa(
        "Olá! Vim pelo site da Assistência Familiar São João Batista e gostaria de falar com um consultor.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.66_0.16_150)] px-4 py-3 text-sm font-semibold text-white shadow-xl animate-pulse-ring hover:bg-[oklch(0.6_0.16_150)]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100 sm:inline-block">
        Fale conosco
      </span>
    </a>
  );
}
