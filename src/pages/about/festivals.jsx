import { Leckerli_One, Akaya_Kanadaka, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import { animatedClass } from "../shared/helper";
import Slider from "react-slick";
import React from "react";

const LO_Font = Leckerli_One({ subsets: ['latin'], weight: ['400'] })
const Akaya_Kanadaka_Font = Akaya_Kanadaka({ subsets: ['latin'], weight: ['400'] })
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function Festivals () {
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
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current={'About - Festivals'} />
            <section className='history-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='About'>Festivals Celebrated at Dwarka Temple</h1>
                        <div className="line"></div>

                        <div className="mt-3">
                            <p className={` ${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The Dwarka Temple celebrates numerous vibrant festivals that attract devotees and tourists from all over the world. These festivals reflect the spiritual and cultural richness of the temple.
                            </p>

                            <div className={` ${Josefin_Font?.className}`}>
                                <h3 className={` ${Josefin_Font?.className}`}>Janmashtami:</h3>
                                <ul>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Celebrated as Lord Krishna’s birthday, this festival is the grandest in Dwarka.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>The temple is beautifully decorated, and rituals continue throughout the night.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Special 'Krishna Leela' enactments and traditional dances mark the occasion.</p>
                                    </li>
                                </ul>
                                <h3 className={` ${Josefin_Font?.className}`}>Holi:</h3>
                                <ul>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>The festival of colors is celebrated with great enthusiasm in Dwarka.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Devotees smear colors, sing bhajans, and participate in special prayers.</p>
                                    </li>
                                </ul>
                                <h3 className={` ${Josefin_Font?.className}`}>Annakut Utsav (Govardhan Puja):</h3>
                                <ul>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>Celebrated a day after Diwali, devotees offer mountains of food (Annakut) to Lord Krishna.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>The temple premises are adorned with thousands of diyas and flowers.</p>
                                    </li>
                                </ul>
                                <h3 className={` ${Josefin_Font?.className}`}>Rukmini Vivah:</h3>
                                <ul>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>This festival commemorates the wedding of Lord Krishna and Rukmini.</p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p>The rituals symbolize love, devotion, and unity.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="iframe-section wow animate__animated animate__fadeIn animate-slow">
                                <iframe src="https://www.youtube.com/embed/n6FLOgbadso?si=HEFbkZ3VtMvUhbMv?si=xpaa9FDXTZWImcNr&autoplay=0&vq=hd720" title="Legendary Kingdom of Krishna" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
