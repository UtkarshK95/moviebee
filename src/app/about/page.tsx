export const metadata = {
  title: "About",
  description:
    "Learn about MovieBee — a modern movie & TV discovery app built with Next.js 16 and OMDb API — and meet the developer behind it.",
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      {/* About the App */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          About <span className="text-amber-500">MovieBee</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Welcome to MovieBee — your go-to platform for all things movies!
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          MovieBee is a comprehensive movie discovery web application that allows you to search for
          your favourite films, explore new releases, and delve into a curated list of Trending and
          Top Rated movies. With a sleek and user-friendly interface, you&apos;ll find everything
          you need to satisfy your movie cravings in one place.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Built with cutting-edge technologies like Next.js 16 and Tailwind CSS 3, MovieBee ensures
          a fast, responsive, and engaging user experience across all devices. Whether you&apos;re a
          casual moviegoer or a dedicated cinephile, MovieBee is designed to make your movie
          discovery journey seamless and enjoyable.
        </p>
      </section>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* About the Developer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          About the <span className="text-amber-500">Developer</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Hello there! I&apos;m Utkarsh, a dedicated Senior Software Engineer with over five years
          of experience crafting high-performing, responsive, and scalable web applications. My
          passion for technology drives me to create solutions that not only meet but exceed user
          expectations.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          I&apos;ve had the privilege of working across various sectors, from enhancing
          service-based solutions in healthcare and pharma to innovating within technology and
          e-commerce product spaces. My diverse background enables me to tackle complex challenges
          with a holistic approach.
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white mb-3">Tech Stack</p>
          <p><span className="font-medium text-amber-500">Frontend:</span> HTML5, CSS3, JavaScript, Bootstrap, Styled Components, Tailwind, SASS, TypeScript, ReactJS, Redux, NextJS, ChartJS</p>
          <p><span className="font-medium text-amber-500">Backend:</span> NodeJS, ExpressJS</p>
          <p><span className="font-medium text-amber-500">Database:</span> MongoDB, MySQL</p>
          <p><span className="font-medium text-amber-500">Testing:</span> Jest, Enzyme, React Testing Library, Cypress</p>
          <p><span className="font-medium text-amber-500">UI/UX:</span> Figma, Adobe XD</p>
          <p><span className="font-medium text-amber-500">CMS:</span> Kentico, Sitecore</p>
          <p><span className="font-medium text-amber-500">Other:</span> REST API, GraphQL, Git, Azure DevOps</p>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-700" />

      {/* Connect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Let&apos;s <span className="text-amber-500">Connect</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Feel free to check out my work and reach out!
        </p>
        <a
          href="https://github.com/UtkarshK95"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-medium">UtkarshK95 on GitHub</span>
        </a>
      </section>
    </main>
  );
}
