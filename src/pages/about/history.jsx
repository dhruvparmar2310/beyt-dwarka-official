import { Leckerli_One, Akaya_Kanadaka, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import { animatedClass } from "../shared/helper";
import Slider from "react-slick";
import React from "react";
import dwarkaTemple from '../../../public/assets/images/gallery/images/Dwarka Temple HD Picture.jpeg'

const LO_Font = Leckerli_One({ subsets: ['latin'], weight: ['400'] })
const Akaya_Kanadaka_Font = Akaya_Kanadaka({ subsets: ['latin'], weight: ['400'] })
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function History () {
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
        speed: 3000,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'About - History'} />
            <section className='history-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='About'>History of Dwarka Temple</h1>
                        <div className="line"></div>

                        <div className="mt-4">
                            <div className="dwarka-temple wow animate__animated animate__fadeIn animate-slow">
                                <Image src={dwarkaTemple} quality={100} alt="Dwark Templt" className="img-fluid" />
                            </div>
                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The Dwarka Temple, also known as Dwarkadhish Temple, holds a revered place in the hearts of millions of devotees. Believed to have been built by Lord Krishna’s grandson, Vajranabha, this temple marks the ancient city of Dwarka, mentioned in the Mahabharata and Harivamsa Purana. Dwarka is said to have been Lord Krishna's capital, built over land reclaimed from the sea by Lord Vishwakarma at Krishna’s request.
                            </p>

                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The temple, as it stands today, is estimated to have been constructed in the 16th century after earlier structures were destroyed by natural calamities and invasions. The Dwarkadhish idol, carved from a single piece of black marble, stands majestically in the inner sanctum, exuding divine serenity.
                            </p>

                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The city of Dwarka, referred to as “Mokshapuri”, was submerged underwater after Krishna’s leaved from the mortal world. Archaeological excavations have revealed submerged structures off the coast, confirming the ancient city's existence.
                            </p>
                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                Dr. Shikaripura Ranganatha Rao (S. R. Rao) is an Indian archaeologist who led underwater excavations at the submerged city of Dwarka, Gujarat. Rao led underwater excavations at Dwarka and Bet Dwarka from 1983–1990. He also led a full excavation in 2007.
                            </p>

                            <div className="container">
                                <div className="slider-container wow animate__animated animate__fadeIn animate-slow">
                                    <Slider {...settings}>
                                        {config.sliderImages.map((image, index) => (
                                            <React.Fragment key={index}>
                                                <Image
                                                    src={`${config.imageBaseUrl}${image}`}
                                                    alt={`slide-${index}`}
                                                    width={100}
                                                    height={100}
                                                    quality={100}
                                                />
                                            </React.Fragment>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div>
                                <h3 className={`${Josefin_Font?.className}`}>Additional Highlights:</h3>
                                <div className="line"></div>
                                <ul>
                                    <li className="mt-2 wow animate__animated animate__fadeIn animate-slow">
                                        <p className={`${Josefin_Font?.className} mb-0`} >
                                            The temple is part of the Char Dham Yatra.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn animate-slow">
                                        <p className={`${Josefin_Font?.className} mb-0`}>
                                            The temple’s five-story structure represents Panch Tattva (earth, water, fire, air, and sky).
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="iframe-section">
                            <iframe src="https://www.youtube.com/embed/-NfXK4op4F4?si=xpaa9FDXTZWImcNr&autoplay=1&vq=hd720" title="Legendary Kingdom of Krishna" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="wow animate__animated animate__fadeIn animate-slow" loading="lazy" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
