import { Akaya_Kanadaka, Josefin_Sans, Leckerli_One } from "next/font/google";
import Image from "next/image";
import BreadCrumb from "../shared/components/BreadCrumb";
import Slider from "react-slick";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBridgeWater, faPlane, faPlaneDeparture, faShip, faTrainSubway } from "@fortawesome/free-solid-svg-icons";
const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

export default function HowToReach () {
    return (
        <>
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current={'Bet Dwarka - Mythological Significance'} />
            <section className='beyt-dwarka-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>How To Reach?</h1>

                        <div className="cards mt-5">
                            {/* Air */}
                            <div className="card">
                                <div className="icon"><FontAwesomeIcon icon={faPlaneDeparture} /></div>
                                <h2 className={Josefin_Font?.className}>By Air</h2>
                                <p className={Josefin_Font?.className}>
                                    The nearest airport is <strong className={Josefin_Font?.className}>Jamnagar Airport</strong>, approximately 137 km away.
                                    Flights connect Jamnagar with major cities like Ahmedabad, Mumbai, and Delhi.
                                    From the airport, take a taxi or cab to Okha Port (2.5–3 hours) for onward travel to Bet Dwarka.
                                </p>
                            </div>

                            {/* Train */}
                            <div className="card">
                                <div className="icon"><FontAwesomeIcon icon={faTrainSubway} /></div>
                                <h2 className={Josefin_Font?.className}>By Train</h2>
                                <p className={Josefin_Font?.className}>
                                    <strong className={Josefin_Font?.className}>Okha Railway Station</strong> is the closest railhead, about 7 km from the Okha Jetty.
                                    Direct trains run from cities like Ahmedabad, Rajkot, Vadodara, Surat, Mumbai, and Delhi.
                                    From the station, take a local auto, cab, or bus to the Okha Port.
                                </p>
                            </div>

                            {/* Ferry */}
                            <div className="card">
                                <div className="icon"><FontAwesomeIcon icon={faShip} /></div>
                                <h2 className={Josefin_Font?.className}>By Ferry</h2>
                                <p className={Josefin_Font?.className}>
                                    Ferries operate from <strong className={Josefin_Font?.className}>Okha Port</strong> to Bet Dwarka Island, taking 15–20 minutes.
                                    Services run from 8:00 AM to 5:00 PM, with fares between ₹20–₹50.
                                    Enjoy the scenic Arabian Sea during this memorable journey.
                                </p>
                            </div>

                            {/* Bridge */}
                            <div className="card">
                                <div className="icon"><FontAwesomeIcon icon={faBridgeWater} /></div>
                                <h2 className={Josefin_Font?.className}>By Setu Bridge</h2>
                                <p className={Josefin_Font?.className}>
                                    The new <strong className={Josefin_Font?.className}>Okha–Bet Dwarka Signature Bridge</strong> allows visitors to drive directly to the island.
                                    It is India’s longest cable-stayed bridge and offers breathtaking sea views, especially at sunrise and sunset.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}