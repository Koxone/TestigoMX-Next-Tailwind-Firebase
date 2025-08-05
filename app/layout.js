import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import localFont from "next/font/local";

export const raleway = localFont({
  src: "../Fonts/Raleway.ttf",
  display: "swap",
});

export const metadata = {
  title: "Testigo.mx",
  description:
    "Plataforma humanitaria para documentar hallazgos forenses relacionados con personas desaparecidas en México.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={raleway.className}>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
