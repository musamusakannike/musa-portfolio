import { Poppins } from "next/font/google";
import "./styles/globals.css";
import "animate.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Musa Musa K",
  description:
    "A Fullstack Web Developer using HTML, CSS, JavaScript, jQuery, React js, Next js, NodeJS, Express and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
