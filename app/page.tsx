"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

const productCategories = [
  "AI-native products",
  "Automation platforms",
  "Creative systems",
  "Commerce engines",
  "Developer tools",
  "Experimental hardware",
];

const technologies = [
  {
    title: "AI foundations",
    description:
      "Models, agents, and adaptive interfaces that can power many product worlds instead of one narrow app.",
  },
  {
    title: "Automation engines",
    description:
      "Reusable workflow intelligence for tasks, businesses, creators, teams, and future product lines.",
  },
  {
    title: "Product craft",
    description:
      "Interfaces shaped to feel sharp, fast, memorable, and worthy of the ambition behind them.",
  },
  {
    title: "Reliable systems",
    description:
      "Clear states, resilient architecture, and dependable behavior for products people can trust at scale.",
  },
  {
    title: "Scalable infrastructure",
    description:
      "Backbones that let ideas grow from prototypes into platforms, marketplaces, networks, and ecosystems.",
  },
  {
    title: "Trust architecture",
    description:
      "Data boundaries, thoughtful defaults, and governance that make trust part of the product itself.",
  },
];

const values = [
  "Ambition",
  "Speed",
  "Intelligence",
  "Craft",
  "Trust",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ZyrenoxWebsite() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const orbitItems = useMemo(
    () => ["AI", "Tools", "Commerce", "Systems", "Labs", "Scale"],
    [],
  );

  async function handleWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to join the waitlist.");
      }

      form.reset();
      setStatus("success");
      setMessage("You are on the waitlist. We will share more when it is ready.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-[-18rem] z-0 mx-auto h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(94,144,255,0.09)_34%,transparent_68%)] blur-3xl"
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/35 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.28em]">
            ZYRENOX
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/62 md:flex">
            <a className="transition hover:text-white" href="#vision">
              Vision
            </a>
            <a className="transition hover:text-white" href="#ecosystem">
              Ecosystem
            </a>
            <a className="transition hover:text-white" href="#technology">
              Technology
            </a>
            <a className="transition hover:text-white" href="#waitlist">
              Waitlist
            </a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur transition hover:border-white/24 hover:bg-white/14"
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:pt-40"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur"
            >
              A startup building products for every high-potential zone.
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
            >
              Zyrenox builds whatever the future needs next.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/62 sm:text-xl"
            >
              We are not only making daily-use products. Zyrenox is a technology
              company for bold product bets: AI tools, platforms, automation,
              commerce, creative systems, and new categories that do not have a
              name yet.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#waitlist"
                className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-white/90"
              >
                Join Waitlist
              </a>
              <a
                href="#ecosystem"
                className="rounded-full border border-white/14 bg-white/[0.04] px-6 py-3.5 text-center text-sm font-medium text-white transition hover:border-white/28 hover:bg-white/[0.08]"
              >
                Enter The Build Zone
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[35rem]"
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,rgba(255,255,255,0.04),rgba(106,132,255,0.28),rgba(255,255,255,0.06),rgba(117,226,197,0.18),rgba(255,255,255,0.04))] p-px shadow-2xl shadow-blue-950/30">
              <div className="h-full w-full rounded-full bg-black/72 backdrop-blur-2xl" />
            </div>
            <div
              className="absolute inset-[14%] rounded-full border border-white/10 bg-white/[0.035] shadow-[inset_0_1px_35px_rgba(255,255,255,0.08)]"
            />
            <div className="absolute inset-[29%] rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_54%,transparent)]" />
            {orbitItems.map((item, index) => (
              <span
                key={item}
                className="absolute left-1/2 top-1/2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-xs text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur"
                style={{
                  transform: `rotate(${index * 60}deg) translateY(-15.5rem) rotate(-${
                    index * 60
                  }deg)`,
                }}
              >
                {item}
              </span>
            ))}
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.42em] text-white/38">
                  Product Lab
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  ZYRENOX
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="relative z-10 px-5 py-28 sm:px-8">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.14 }}
        >
          <motion.p variants={fadeUp} className="section-kicker">
            Vision
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl"
          >
            A company built to explore, invent, and launch across many product
            frontiers.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/62"
          >
            Zyrenox combines AI, automation, design, infrastructure, and fast
            product thinking to build useful technology wherever the opportunity
            is strongest. The goal is not one app. The goal is a growing universe
            of products with the same intelligence, quality, and ambition.
          </motion.p>
        </motion.div>
      </section>

      <section id="ecosystem" className="relative z-10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Product Ecosystem</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                One company. Many possible product worlds.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/58">
              The Zyrenox zone is where strong ideas become products: practical,
              ambitious, digital, intelligent, experimental, and ready to scale.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
                className="group min-h-48 rounded-[2rem] border border-white/[0.09] bg-white/[0.045] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.07]"
              >
                <div className="mb-10 h-1 w-12 rounded-full bg-gradient-to-r from-white/80 via-[#b8c7ff] to-[#87f2d6] transition group-hover:w-20" />
                <h3 className="text-2xl font-medium tracking-[-0.025em]">
                  {category}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/52">
                  Built as part of a wider product engine, not as an isolated
                  one-off experiment.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Technology</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Built to move from strange ideas to serious products.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <motion.article
                key={technology.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-6 backdrop-blur-xl transition hover:border-white/18 hover:bg-white/[0.08]"
              >
                <span className="text-sm text-white/36">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">
                  {technology.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {technology.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] px-6 py-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl sm:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">The Zyrenox Zone</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                If it can become a meaningful product, it belongs in the zone.
              </h2>
            </div>
            <div className="space-y-8 text-xl leading-9 text-white/64">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Zyrenox is built for range. A tiny utility, a serious AI system,
                a creator tool, an operating platform, a marketplace, or a new
                category can all start here if the idea has real force.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.12 }}
              >
                The company is designed to keep expanding: product after
                product, system after system, with each launch making the next
                one faster, smarter, and bigger.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-white/[0.09] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_34%),rgba(255,255,255,0.035)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="section-kicker">Waitlist</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Watch the product universe take shape.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/58">
              Join the private waitlist for early product drops, company updates,
              and launch access from the Zyrenox build zone.
            </p>
          </div>

          <form onSubmit={handleWaitlist} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-white/58">Name</span>
              <input
                required
                name="name"
                minLength={2}
                autoComplete="name"
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/30 focus:bg-black/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/58">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/30 focus:bg-black/50"
                placeholder="you@example.com"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:scale-[1.01] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
            {message ? (
              <p
                className={`text-sm ${
                  status === "error" ? "text-red-300" : "text-white/62"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Company Values</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-5">
            {values.map((value) => (
              <motion.div
                key={value}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#050505] p-7"
              >
                <p className="text-lg font-medium tracking-[-0.02em]">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold tracking-[0.28em] text-white/78">ZYRENOX</p>
          <p>(c) 2026 Zyrenox. Building products for every high-potential zone.</p>
        </div>
      </footer>
    </main>
  );
}
