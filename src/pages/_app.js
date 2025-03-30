import "@/styles/globals.css";
import "@/styles/main.scss"
import Header from "./shared/components/Header";
import { lazy, useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';

// Dynamically import WOW.js to disable SSR
import 'animate.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/css/bootstrap.min.css')
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
    require('slick-carousel/slick/slick.css')
    require('slick-carousel/slick/slick-theme.css')

    if (typeof window !== 'undefined') {
      // Use require to ensure proper import
      const WOW = require('wow.js/dist/wow');
      const wow = new WOW({
        boxClass: 'wow', // Class for animation trigger
        animateClass: 'animate__animated', // Animate.css class prefix
        offset: 0, // Distance to start the animation
        mobile: true, // Trigger animations on mobile
        live: true, // Act on asynchronously loaded content
      });
      wow.init();
    }
  }, [])
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
