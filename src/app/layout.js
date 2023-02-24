export const metadata = {
  title: "MovieBee",
  description: "An IMDB clone built using NextJS 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
