export default function CareersPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Careers</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">Join the team at Softiqo Technologies</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            We are hiring engineers, designers, and product builders who want to create products that solve real problems and grow businesses.
          </p>
        </section>
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-lg font-semibold text-[color:var(--foreground)]">Why work with us?</p>
            <ul className="space-y-4 text-[color:var(--muted)]">
              <li>Collaborative teams with a focus on impact and quality.</li>
              <li>Flexible work arrangements and continuous learning.</li>
              <li>Opportunities to work across product, design, and cloud engineering.</li>
            </ul>
          </div>
        </section>
      </main>
  );
}
