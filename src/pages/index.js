import { Josefin_Sans } from "next/font/google";
import Hero from "./shared/components/Hero";
import {motion} from 'framer-motion'
import { Col, Row } from "react-bootstrap";
import aboutUs from '../../public/assets/images/gallery/images/about-us.jpeg'
import Image from "next/image";

const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function Home() {
  return (
    <main>
      <Hero />

      <section className='about-section'>
        <div className='container'>
          <div className='inner-content'>
            <h1 className={`sectionTitle wow animate__animated animate__fadeIn animate-slow`} data-heading='Jai'>Dwarkadhish</h1>

              <Row className="about-content">
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className="image-content wow animate__animated animate__fadeIn animate-slow">
                    <Image src={aboutUs} alt="about-us image" quality={100} className="img-fluid" />
                  </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className="description">
                    <p
                      className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn`}
                    >
                      The Dwarka Temple, also known as Dwarkadhish Temple (Devbhumi Dwarka), is a revered Hindu pilgrimage place in Gujarat, India. Dedicated to Lord Krishna, it is one of the Char Dham and Sapta Puri sacred places.
                    </p>
                    <p
                      className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn`}
                      data-wow-delay="0.8s"
                    >
                      The temple, with its majestic architecture and intricate carvings, sits by the Arabian Sea. Its towering spire and grand flag, replaced five times daily, symbolize devotion. This ancient temple attracts millions of devotees and tourists annually for its spiritual significance and historical heritage.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="iframe-section wow animate__animated animate__fadeIn animate-slow">
                <iframe src="https://www.youtube.com/embed/TMInP9vbdLI?si=8voWUgO0RX5-gDnY&autoplay=0&vq=hd720" title="Legendary Kingdom of Krishna" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
