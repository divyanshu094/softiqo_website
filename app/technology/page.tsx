export default function TechnologyPage() {
  return (
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Technology</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">Modern technology for scalable growth</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            We leverage cloud-native tooling, modern frameworks, and robust architecture to build reliable software platforms and APIs.
          </p>
        </section>
        <section className="rounded-3xl bg-[color:var(--surface)] p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-lg font-semibold text-[color:var(--foreground)]">Our stack includes</p>
            <ul className="space-y-4 text-[color:var(--muted)]">
              <li>React, Next.js, and modern frontend architecture.</li>
              <li>Node.js, serverless APIs, and scalable backend services.</li>
              <li>Cloud infrastructure, automation, and monitoring.</li>
            </ul>
          </div>
        </section>
      </main>
  );
}
