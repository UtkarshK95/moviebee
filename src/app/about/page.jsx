export default function About() {
  return (
    <div className="mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-500">About the App</h1>
      <p>Welcome to MovieBee - your go-to platform for all things movies!</p>
      <p>
        MovieBee is a comprehensive movie discovery web application that allows
        you to search for your favorite films, explore new releases, and delve
        into a curated list of Trending and Top Rated movies. With a sleek and
        user-friendly interface, you'll find everything you need to satisfy your
        movie cravings in one place.
      </p>
      <p>
        Built with cutting-edge technologies like NextJS 14 and Tailwind CSS 3,
        MovieBee ensures a fast, responsive, and engaging user experience across
        all devices. Whether you're a casual moviegoer or a dedicated cinephile,
        MovieBee is designed to make your movie discovery journey seamless and
        enjoyable.
      </p>

      <h1 className="text-2xl font-medium text-amber-500">
        About the Developer
      </h1>
      <p>
        Hello there! I'm Utkarsh, a dedicated Senior Software Engineer with over
        five years of experience crafting high-performing, responsive, and
        scalable web applications. My passion for technology drives me to create
        solutions that not only meet but exceed user expectations.
      </p>
      <p>
        I've had the privilege of working across various sectors, from enhancing
        service-based solutions in healthcare and pharma to innovating within
        technology and e-commerce product spaces. My diverse background enables
        me to tackle complex challenges with a holistic approach.
      </p>

      <h2 className="text-xl font-medium text-amber-500">
        My Tech Stack Includes:
      </h2>
      <p>
        <strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, Styled
        Components, Tailwind, SASS, TypeScript, ReactJS, Redux, NextJS, ChartJS
        <br />
        <strong>Backend:</strong> NodeJS, ExpressJS
        <br />
        <strong>Database:</strong> MongoDB, MySQL
        <br />
        <strong>Testing:</strong> Jest, Enzyme, React Testing Library, Cypress
        <br />
        <strong>UI/UX:</strong> Figma, Adobe XD
        <br />
        <strong>CMS:</strong> Kentico, Sitecore
        <br />
        <strong>Other Skills:</strong> REST API, GraphQL, Git, Azure DevOps
      </p>

      <h1 className="text-2xl font-medium text-amber-500">Let's Connect</h1>
      <p>
        Feel free to check out my work on
        <a
          href="https://github.com/UtkarshK95"
          className="text-amber-500"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and reach out!
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 pt-4 justify-center sm:justify-start">
        <a
          href="https://github.com/UtkarshK95"
          className="text-amber-500"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-amber-500 hover:text-teal"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </span>
    </div>
  );
}
