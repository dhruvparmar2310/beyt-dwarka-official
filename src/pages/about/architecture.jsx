import { Leckerli_One, Akaya_Kanadaka, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import { animatedClass } from "../shared/helper";
import Slider from "react-slick";
import React from "react";
import { Col, Row } from "react-bootstrap";

const LO_Font = Leckerli_One({ subsets: ['latin'], weight: ['400'] })
const Akaya_Kanadaka_Font = Akaya_Kanadaka({ subsets: ['latin'], weight: ['400'] })
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function Architecture () {
    const config = {
        imageBaseUrl: '/assets/images/',
        sliderImages: [
            'history-9.jpg',
            'history-1.jpg',
            // 'history-2.jpg',
            // 'history-3.jpg',
            // 'history-4.jpg',
            'history-5.jpg',
            'history-6.jpeg',
            'history-7.jpg',
            'history-8.jpg',
        ]
    };

    const settings = {
        customPaging: (i) => (
            <Image
                src={`${config.imageBaseUrl}${config.sliderImages[i]}`}
                alt={`slide-${i}`}
                width={50}
                height={50}
                quality={100}
            />
        ),
        dots: true,
        fade: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 4000,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'About - Architecture'} />
            <section className='history-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='About'>Architecture of Dwarka Temple</h1>
                        <div className="line"></div>

                        <div className="mt-4">
                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The Dwarkadhish Temple is an architectural marvel showcasing Chalukyan-style craftsmanship. The five-storied structure is supported by 72 intricately carved pillars, each depicting mythological stories and deities.
                            </p>

                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`} >
                                The Shikhar (Temple Spire) rises approximately 78 meters high, adorned with intricate carvings that reflect the artistry of ancient craftsmen. The flag (Dwaj) atop the temple is changed five times a day and is symbolic of Lord Krishna’s divine presence..
                            </p>

                            <div className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                <p>The temple has two main entrances:</p>
                                <ul>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Swarg Dwar (Gate to Heaven) - Used by pilgrims to enter.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Moksha Dwar (Gate to Liberation) - Used for exiting after darshan.</p>
                                    </li>
                                </ul>
                            </div>

                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`} >
                                Inside the sanctum, the idol of Lord Krishna stands in an enchanting pose, holding a conch and chakra. The temple complex also houses shrines dedicated to Subhadra, Balarama, Rukmini, and other deities.
                            </p>

                            <h3 className={` ${Josefin_Font?.className}`}>Second Floor of Temple</h3>
                            <div className="line"></div>

                            <p className={` ${Josefin_Font?.className} mt-3 wow animate__animated animate__fadeIn animate-slow`}>
                                On the second floor of the Dwarkadhish Temple, there is a shrine dedicated to Mata Harsiddhi (Harshat Mata), who is considered the Kuldevi (family goddess) of Lord Krishna.
                            </p>

                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                Mata Harsiddhi is revered as a goddess of strength and protection and is believed to have played a significant role in safeguarding Lord Krishna and his family.
                            </p>
                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                Devotees visiting Dwarkadhish Temple often ascend to the second floor to seek the blessings of Mata Harsiddhi after offering prayers to Lord Krishna.
                            </p>

                            <h3 className={` ${Josefin_Font?.className}`}>Size of the Dwaja (Temple Flag)</h3>
                            <div className="line"></div>

                            <p className={` ${Josefin_Font?.className} mt-3 wow animate__animated animate__fadeIn animate-slow`}>
                                The Dwaja (flag) atop the Dwarkadhish Temple is famously known as “52 Gaj ka Dhwaja”. 52 Gaj refers to 52 yards (approximately 47.5 meters) in length. It symbolizes the 52 Yadava clans that once resided in Dwarka and represents their eternal loyalty and devotion to Lord Krishna. It represents victory, devotion, mukut of Rajadhiraj (Lord Krishna) and divine protection. The flag is usually made from silk cloth, adorned with symbols of Lord Krishna's Sudarshan Chakra, Conch, and Peacock Feather.
                            </p>

                            <div className="iframe-section">
                                <Row>
                                    <Col className="wow animate__animated animate__fadeIn animate-slow">
                                        <iframe src="https://www.youtube.com/embed/8Ih-KSLn1OE?si=3RPLr7xE3REYYIZL&autoplay=0&vq=hd720" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>
                                    </Col>
                                    <Col className="wow animate__animated animate__fadeIn animate-slow">
                                        <iframe src="https://www.youtube.com/embed/STAcFDyVfs8?si=9xdowqfmqrUcNIrV&autoplay=0&vq=hd720" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
