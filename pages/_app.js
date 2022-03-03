import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Script from "next/script";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <Script src="https://unpkg.com/aos@next/dist/aos.js" />
      <Script src="bower_components/aos/dist/aos.js" /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
