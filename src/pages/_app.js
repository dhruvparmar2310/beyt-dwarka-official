import "@/styles/globals.css";
import "@/styles/main.scss"
import Header from "./shared/components/Header";
import { lazy, useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';

// Dynamically import WOW.js to disable SSR
import 'animate.css';
import { useRouter } from "next/router";
import LoadingScreen from "./shared/components/LoadingScreen";
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

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

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true) 
      document.body.classList.add("no-scroll")
    }
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.classList.remove("no-scroll")
      }, 500)
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events])
  return (
    <>
     {isLoading && <LoadingScreen className={isLoading ? "logoLoading" : ""} />}
      <Header />
      <Component {...pageProps} />
    </>
  )
}
