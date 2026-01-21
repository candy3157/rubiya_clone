export default function Page() {
  return (
    <div className="flex min-h-screen justify-center">
      <div
        className="
          relative min-h-screen max-w-4xl w-full
          bg-black/70 text-white
          px-10 py-12 font-sans antialiased sm:py-24
          border border-white/10
          rounded-none lg:rounded-lg
          mt-0 lg:mt-16
        "
      >
        <main>
          <section id="hero" className="mb-12 space-y-3">
  <h1 className="text-4xl font-bold tracking-tight">
    Members
  </h1>
  <p className="max-w-md text-sm leading-relaxed text-white/70">
    Current active players in HACTOR
  </p>
</section>

        </main>
      </div>
    </div>
  );
}
