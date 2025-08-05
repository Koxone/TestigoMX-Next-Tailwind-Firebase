import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import localFont from "next/font/local";

export const raleway = localFont({
  src: "../Fonts/Raleway.ttf",
  display: "swap",
});

export const metadata = {
  title: {
    default: "TestigoMX",
    template: "%s | TestigoMX",
  },
  description:
    "Plataforma humanitaria para documentar, clasificar y consultar hallazgos forenses relacionados con personas desaparecidas en México. Diseñada para colectivos de búsqueda, especialistas forenses y familiares.",
  keywords: [
    "personas desaparecidas",
    "hallazgos forenses",
    "documentación forense",
    "plataforma humanitaria",
    "colectivos de búsqueda",
    "México",
    "desapariciones forzadas",
    "testigo",
    "registro forense",
    "búsqueda de personas",
    "denuncia desapariciones",
    "memoria forense",
    "tecnología humanitaria",
  ],
  metadataBase: new URL("https://testigo.mx"),
  openGraph: {
    title: "TestigoMX",
    description:
      "Herramienta digital para la documentación segura y respetuosa de hallazgos forenses relacionados con personas desaparecidas en México. Accesible para colectivos de búsqueda y el público en general.",
    url: "https://testigo.mx",
    siteName: "TestigoMX",
    images: [
      {
        url: "https://testigo.mx/og-image.png",
        width: 1200,
        height: 630,
        alt: "TestigoMX - Plataforma humanitaria",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  authors: [{ name: "Juan Carlos de León", url: "https://github.com/Koxone" }],
  creator: "Juan Carlos de León",
  publisher: "TestigoMX",
  alternates: {
    canonical: "https://testigo.mx",
    languages: {
      "es-MX": "https://testigo.mx",
      "en-US": "https://testigo.mx/en",
    },
  },
  category: "plataforma humanitaria",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={raleway.className}>
      <body className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
