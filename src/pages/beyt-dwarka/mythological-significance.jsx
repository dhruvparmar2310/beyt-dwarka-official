import { Akaya_Kanadaka, Josefin_Sans, Leckerli_One } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import Slider from "react-slick";
import React from "react";
import { Col, Row } from "react-bootstrap";
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function MythologicalSignificance () {
    const config = {
        imageBaseUrl: '/assets/images/',
        sliderImages: [
            '1000303331.jpg',
            '1000303330.jpg',
            '1000303332.jpg',
            'beyt-dwarka-1.jpeg',
            'bet-dwarka-2.jpg',
            'beyt-dwarka-4.png',
            'stairs-beyt-dwarka.jpg',
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
        speed: 6000,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <>
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current={'Bet Dwarka - Mythological Significance'} />
            <section className='beyt-dwarka-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>Mythological Significance of Bet Dwarka</h1>

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

                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={12}>
                                    <div className='highlights'>
                                        <div className="wow animate__animated animate__fadeIn animate-slow mt-3">
                                            <Image src='/assets/images/1000303418.jpg' width={400} height={400} quality={100} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={12}>
                                    <div className="highlights">
                                        <p className=" wow animate__animated animate__fadeIn animate-slow">
                                            Even the map of Bet Dwarka resembles the shape of Lord Krishna resting peacefully.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
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