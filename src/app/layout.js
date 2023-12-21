import { ThemeProvider } from "./context";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Website",
  description: "This is an example portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={poppins.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
