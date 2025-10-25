import { Akaya_Kanadaka, Josefin_Sans, Leckerli_One } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import Slider from "react-slick";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBridgeWater, faPlane, faPlaneDeparture, faShip, faTrainSubway } from "@fortawesome/free-solid-svg-icons";
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function Attractions () {
    return (
        <>
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current={'Nearby Attractions'} />
            <section className='beyt-dwarka-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>Nearby Attractions</h1>

                        <div className='attraction-category'>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/1000303604.jpg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Sudarshan Setu <br />(Signature Bridge)</h4>
                                </div>
                            </div>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/1000303605.jpg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Hanuman Dandi</h4>
                                </div>
                            </div>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/1000303606.jpg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Nageshwar Jyotirlinga</h4>
                                </div>
                            </div>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/1000303608.jpg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Shivrajpur Beach</h4>
                                </div>
                            </div>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/gallery/images/img8.jpeg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Dwarkadhish Temple</h4>
                                </div>
                            </div>
                            <div className='card-category'>
                                <div className='top-content'>
                                    <Image src='/assets/images/1000303607.jpg' alt='' width={200} height={200} quality={100} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Rukmini Devi Temple</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}