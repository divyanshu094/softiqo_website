import Link from "next/link";

export default function Home() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-[color:var(--primary-dark)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              software solutions
            </span>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl">
                Building digital products and platforms that accelerate growth.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                Softiqo Technologies helps startups, scale-ups, and enterprises turn bold ideas into polished software, modern cloud systems, and memorable customer experiences.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-dark)]"
              >
                Talk to our team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--primary)] transition hover:border-[color:var(--primary)] hover:bg-[color:var(--background)]"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[color:var(--foreground)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-xl font-semibold">
                  S
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Softiqo Technologies</p>
                  <p className="text-xl font-semibold text-[color:var(--foreground)]">Your software innovation partner</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[color:var(--background)] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Trusted by</p>
                  <p className="mt-4 text-2xl font-semibold text-[color:var(--foreground)]">Fast-growing teams</p>
                </div>
                <div className="rounded-3xl bg-[color:var(--background)] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Delivered</p>
                  <p className="mt-4 text-2xl font-semibold text-[color:var(--foreground)]">Custom software experiences</p>
                </div>
              </div>
              <div className="grid gap-4 rounded-3xl bg-[color:var(--primary-dark)] p-5 text-white sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--surface)]/80">Launch faster</p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--surface)]">From discovery to delivery, we move quickly without sacrificing quality.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--surface)]/80">Scale with confidence</p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--surface)]">Built for resilient growth across web, mobile, and cloud.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Our expertise</p>
              <h2 className="mt-3 text-3xl font-semibold text-[color:var(--foreground)]">What we do best</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--background)]"
            >
              See all services
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-[color:var(--border)] p-7 transition hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Product Design</p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">Intuitive interfaces that convert</h3>
              <p className="mt-3 text-[color:var(--muted)]">Design systems, UX strategy, and digital product workflows tailored to your customers.</p>
            </article>
            <article className="rounded-3xl border border-[color:var(--border)] p-7 transition hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Software Engineering</p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">Modern apps with clean architecture</h3>
              <p className="mt-3 text-[color:var(--muted)]">Web and mobile development, APIs, integrations, and platform engineering backed by strong code reviews.</p>
            </article>
            <article className="rounded-3xl border border-[color:var(--border)] p-7 transition hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Cloud & DevOps</p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">Reliable infrastructure for growth</h3>
              <p className="mt-3 text-[color:var(--muted)]">Cloud migration, automation, monitoring, and resilient deployments for long-term stability.</p>
            </article>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-[color:var(--primary-dark)] p-10 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold">A partner that understands business and technology</h2>
            <div className="mt-8 space-y-6">
              <div className="space-y-2 rounded-3xl bg-[color:var(--primary-dark)]/80 p-6">
                <p className="text-lg font-semibold">Focused on measurable outcomes</p>
                <p className="text-[color:var(--surface)]/80">We align every feature, release, and launch to your goals, customers, and market timing.</p>
              </div>
              <div className="space-y-2 rounded-3xl bg-[color:var(--primary-dark)]/80 p-6">
                <p className="text-lg font-semibold">Transparent collaboration</p>
                <p className="text-[color:var(--surface)]/80">Daily updates, shared roadmaps, and open communication so your team always knows where the project stands.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Our process</p>
            <div className="mt-8 grid gap-5">
              {[
                {
                  title: "Discover",
                  description: "We start with user research, stakeholder interviews, and technical discovery to define the right solution.",
                },
                {
                  title: "Build",
                  description: "Engineering, design, and validation happen in parallel so we can ship fast and reduce wasted effort.",
                },
                {
                  title: "Scale",
                  description: "We deliver maintainable systems with monitoring, automation, and growth-ready infrastructure.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[color:var(--border)] p-6">
                  <p className="text-xl font-semibold text-[color:var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-[color:var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
