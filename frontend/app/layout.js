import "./globals.css";

export const metadata = {
  title: "S&T Construccion y Mantenimiento | Cali",
  description: "Construccion, remodelacion y mantenimiento locativo en Cali."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
