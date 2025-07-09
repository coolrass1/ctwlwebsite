import Script from "next/script";
import Animater from "./components/Animater";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import "./globals.css";
import { Inter, Poppins, Open_Sans, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin-ext"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "200"] });
const monserat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Chauffeur Service London | Citywide London",
  description: "Experience premium chauffeur services in London with Citywide London. We offer luxury airport transfers, corporate travel, wedding cars, and event transportation with a fleet of Mercedes, BMW, and other high-end vehicles. Book your reliable and professional chauffeur today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-V41ZJVPW0C" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V41ZJVPW0C');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sc767vla01");
        `}
      </Script>
          <Heading />
          {children}
          <Footer />{" "}
    
      </body>
    </html>
  );
}
