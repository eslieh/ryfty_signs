import { Manrope, Allison } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const allison = Allison({
  subsets: ["latin"],
  variable: "--font-allison",
  weight: "400",
});

export const metadata = {
  title: "Ryfty Sign | Digital signing should be easy",
  description: "Get agreements signed quickly with touch signatures and modern AI verification.",
  icons: {
    icon: "/dot.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${allison.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
