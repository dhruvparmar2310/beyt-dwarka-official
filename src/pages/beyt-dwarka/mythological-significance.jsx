import { Akaya_Kanadaka, Josefin_Sans, Leckerli_One } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import Slider from "react-slick";
import React from "react";
import dwarkaTemple from '../../../public/assets/images/bet-dwarka-2.jpg'
import sudama from '../../../public/assets/images/beyt-dwarka-5.jpg'
import { Col, Row } from "react-bootstrap";

const LO_Font = Leckerli_One({ subsets: ['latin'], weight: ['400'] })
const Akaya_Kanadaka_Font = Akaya_Kanadaka({ subsets: ['latin'], weight: ['400'] })
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function MythologicalSignificance () {
    // const config = {
    //     imageBaseUrl: '/assets/images/',
    //     sliderImages: [
    //         'beyt-dwarka-1.jpeg',
    //         'bet-dwarka-2.jpg',
    //         'beyt-dwarka-3.jpg',
    //         'beyt-dwarka-4.png',
    //         'beyt-dwarka-5.jpg',
    //     ]
    // };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    const config = {
        imageBaseUrl: '/assets/images/',
        sliderImages: [
            'beyt-dwarka-1.jpeg',
            'bet-dwarka-2.jpg',
            'beyt-dwarka-3.jpg',
            'beyt-dwarka-4.png',
            'beyt-dwarka-5.jpg',
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
            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Bet Dwarka - Mythological Significance'} />
            <section className='beyt-dwarka-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>Mythological Significance of Bet Dwarka</h1>
                        <div className="line"></div>

                        <div className={`${Josefin_Font?.className}`}>
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
                            {/* <div className="dwarka-temple wow animate__animated animate__fadeIn animate-slow">
                                <Image src={dwarkaTemple} quality={100} alt="Dwark Templt" className="img-fluid" />
                            </div> */}
                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                Bet Dwarka, also known as “Shankhodhar”, is an ancient island located about 30 km from Dwarka. According to mythology, it was the residence of Lord Krishna and his family. It is believed that this island was gifted to Lord Krishna by the sea god (Varuna Dev).
                            </p>

                            {/* <div className="wow animate__animated animate__fadeIn animate-slow">
                                <Image src={sudama} quality={100} alt="Dwarka Temple" className="img-fluid" />
                            </div> */}
                            <p className={`${Josefin_Font?.className} wow animate__animated animate__fadeIn animate-slow`}>
                                The island is deeply rooted in the events of the Mahabharata. It is said that Lord Krishna lived here with Devi Rukmini and received Sudama, his childhood friend, on this very island. The famous story of Sudama offering poha (flattened rice) to Krishna and receiving abundant blessings took place here.
                            </p>
                        </div>

                        <div className={` ${Josefin_Font?.className}`}>
                            <h3>Reference from Shrimad Bhagavad Gita:</h3>
                            <div className="line"></div>

                            <h5 className="mt-3">In Bhagavad Gita (Chapter 4, Verse 7-8), Lord Krishna says:</h5>
                            <figure>
                                <blockquote class="blockquote">
                                    <p className=" wow animate__animated animate__fadeIn animate-slow">
                                        "Yada Yada Hi Dharmasya Glanir Bhavati Bharata, Abhyutthanam Adharmasya Tadatmanam Srujamyaham."
                                    </p>
                                </blockquote>
                                {/* <figcaption class="blockquote-footer">
                                    Lord Krishna
                                </figcaption> */}
                            </figure>

                            <p className=" wow animate__animated animate__fadeIn animate-slow">
                                Translation: Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.
                            </p>
                            <p className=" wow animate__animated animate__fadeIn animate-slow">
                                This verse resonates deeply with the spiritual essence of Bet Dwarka, symbolizing Lord Krishna’s eternal presence and guidance to his devotees.
                            </p>
                        </div>
                        <div className={` ${Josefin_Font?.className}`}>
                            <h3 className={` ${Josefin_Font?.className}`}>Highlights:</h3>
                            <div className="line"></div>
                            <ul className="mt-3">
                                <li className="wow animate__animated animate__fadeIn animate-slow">
                                    <p>The Dwarkadhish Temple at Bet Dwarka is believed to be the original residence of Lord Krishna.</p>
                                </li>
                                <li className="wow animate__animated animate__fadeIn animate-slow">
                                    <p>The Sudama Setu Bridge, connecting the island, adds both spiritual and scenic beauty.</p>
                                </li>
                                <li className="wow animate__animated animate__fadeIn animate-slow">
                                    <p>Ancient relics and submerged structures discovered near Bet Dwarka indicate the presence of an advanced civilization.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="iframe-section">
                            <div className="inner-content">
                                <iframe src="https://www.youtube.com/embed/ZflADba7CaI?si=iVgUlUiH41jCX0jG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" lazy='loading' referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="wow animate__animated animate__fadeIn animate-slow"></iframe>

                                <iframe src="https://www.youtube.com/embed/jl5YkGB3Hfw?si=7VqFaD2vZw2QMgii" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" lazy='loading' allowfullscreen className="wow animate__animated animate__fadeIn animate-slow"></iframe>

                                <iframe src="https://www.youtube.com/embed/y7zHfcvOLU4?si=MVQ866ZNvyQPMPJB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" lazy='loading' allowfullscreen className="wow animate__animated animate__fadeIn animate-slow"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}