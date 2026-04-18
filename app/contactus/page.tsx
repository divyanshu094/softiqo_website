export default function ContactUsPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Contact us</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">Let's build your next software solution together.</h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Reach out to start a conversation about your project, technology strategy, or design needs. We respond quickly and help shape the next step for your business.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-3xl bg-[color:var(--primary-dark)] p-10 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Contact details</p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Email</p>
                <p className="mt-3 text-lg font-semibold">info@softiqo.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Phone</p>
                <p className="mt-3 text-lg font-semibold">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Location</p>
                <p className="mt-3 text-lg font-semibold">123 Innovation Way, Suite 400, Austin, TX</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[color:var(--foreground)]" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="mt-3 w-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-3 text-[color:var(--foreground)] focus:border-[color:var(--primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[color:var(--foreground)]" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-3 text-[color:var(--foreground)] focus:border-[color:var(--primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[color:var(--foreground)]" htmlFor="message">
                  Project brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project goals."
                  className="mt-3 w-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-3 text-[color:var(--foreground)] focus:border-[color:var(--primary)] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex rounded-full bg-[color:var(--primary-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary)]"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">How we work</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Fast planning",
                detail: "We help you define scope, timeline, and early milestones quickly.",
              },
              {
                title: "Clear collaboration",
                detail: "Your team has direct access to our product managers, designers, and engineers.",
              },
              {
                title: "Reliable delivery",
                detail: "We ship usable software in iterations so you can validate as you grow.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-[color:var(--border)] p-6">
                <p className="text-lg font-semibold text-[color:var(--foreground)]">{item.title}</p>
                <p className="mt-3 text-[color:var(--muted)] leading-7">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}
