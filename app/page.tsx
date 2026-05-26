export default function ZyrenoxWebsite() {
  const projects = [
    {
      title: "TRAVIS AI Assistant",
      description:
        "Offline transformer-based assistant for visually impaired service agents using Mistral 7B and Ollama.",
      tags: ["AI", "LLM", "Mistral", "Accessibility"],
    },
    {
      title: "TabulaX",
      description:
        "AI-powered CSV transformation platform with prompt-based automation and multi-file processing.",
      tags: ["Flask", "Automation", "LLM", "Data Processing"],
    },
    {
      title: "NeuroBridge",
      description:
        "AI wellness and cognitive monitoring assistant using voice interaction and intelligent alerts.",
      tags: ["Healthcare AI", "Voice AI", "Azure"],
    },
    {
      title: "Telangana Vidya Vedika",
      description:
        "Engineering admissions and counseling platform optimized for lead generation and student guidance.",
      tags: ["Lead Generation", "Education", "Web Platform"],
    },
    {
      title: "QR Ordering System",
      description:
        "Smart QR-based cafe ordering platform with digital menus and customer workflow automation.",
      tags: ["SaaS", "Restaurant Tech", "Automation"],
    },
    {
      title: "HybridX-One",
      description:
        "Modular AI-powered drone platform designed for agriculture, surveillance, and disaster response.",
      tags: ["Drone Tech", "AI", "Hardware"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">ZYRENOX</h1>
          <p className="text-sm text-gray-400">AI • Automation • Innovation</p>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 md:px-16 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Building AI-Powered Digital Systems
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            We Build
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Products
            </span>
            <br />
            That Solve Real Problems.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Zyrenox is an innovation-focused technology studio building AI systems,
            automation platforms, intelligent business solutions, and scalable digital products.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Work With Zyrenox
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-16 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Turning ambitious ideas into powerful AI-driven systems.
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Zyrenox focuses on building practical AI solutions that solve real-world challenges across industries including healthcare, education, accessibility, automation, and intelligent systems.
            </p>

            <p>
              From transformer-based assistants and intelligent automation platforms to scalable lead generation systems and future-ready AI infrastructure, Zyrenox is designed to build impactful technology with strong execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 md:px-16 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">Services</p>
            <h2 className="text-4xl font-bold">What We Build</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Solutions",
                desc: "LLM systems, AI assistants, RAG pipelines, intelligent automation, and business AI tools.",
              },
              {
                title: "Web Platforms",
                desc: "Modern scalable platforms, dashboards, business systems, and lead generation funnels.",
              },
              {
                title: "Automation Systems",
                desc: "Workflow automation, WhatsApp integrations, CRM systems, and operational intelligence.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-16 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">Projects</p>
              <h2 className="text-4xl font-bold">Featured Work</h2>
            </div>

            <p className="text-gray-400 max-w-xl">
              A collection of AI products, automation systems, and scalable digital platforms built under Zyrenox.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />

                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-8 md:px-16 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">Vision</p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Building the next generation of
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI-powered innovation.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Zyrenox aims to create scalable systems that bridge technology with real-world impact — from intelligent healthcare and accessibility tools to advanced automation, education systems, and future-focused platforms.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">Contact</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Powerful.
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Looking for AI systems, automation solutions, business platforms, or innovative technology products? Let’s collaborate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@zyrenox.com"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              contact@zyrenox.com
            </a>

            <a
              href="https://wa.me/919999999999"
              className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Zyrenox. Built for innovation, automation, and impact.
      </footer>
    </div>
  );
}
