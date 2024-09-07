# MovieBee

This repository contains the source code for the MovieBee web application, a platform for movie enthusiasts to discover, search, and manage a personalized watchlist. The project leverages modern web development technologies to deliver a responsive and engaging user experience.

## Technologies Used

- **Frontend Framework**: Next.js
- **CSS Framework**: Tailwind CSS
- **JavaScript Tools**: PostCSS, Axios
- **API**: TMDb (The Movie Database) API
- **Environment Management**: dotenv
- **Linting**: ESLint

## Project Structure

```
moviebee/
├── public/                 # Static files like images and icons
├── src/                    # Source code for the application
│   ├── components/         # Reusable React components
│   ├── pages/              # Next.js pages for routing
│   ├── styles/             # Global styles and Tailwind configurations
│   ├── utils/              # Utility functions and helper methods
│   └── index.js            # Main entry point for the Next.js app
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── jsconfig.json           # JavaScript project configuration
├── next.config.js          # Next.js configuration file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration file
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation (this file)
```

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/moviebee.git
   cd moviebee
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the necessary environment variables:

   ```bash
   TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

The production-ready files will be located in the `.next` directory.

## Features

- **Movie Discovery**: Browse and search for movies.
- **Detailed Information**: View movie details, including cast, reviews, and ratings.
- **Personalized Watchlist**: Add movies to a personal watchlist.
- **Responsive Design**: Optimized for various screen sizes.

## Contributing

Contributions are welcome! Please open an issue or create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
