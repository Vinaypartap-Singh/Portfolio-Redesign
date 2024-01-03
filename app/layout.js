import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Vinay - Web Developer | React.js, Node.js, MongoDB, Firebase, React Native, Shopify Liquid (Theme Development), WordPress, Elementor, Google Sites |",
  description:
    "Hi, I am Vinay. I am a web developer passionate about new technology and always look for new challanges and opportunities to test my abilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
