import React from 'react'
import BreadCrumb from '../shared/components/BreadCrumb'
import Slider from 'react-slick';
import Image from 'next/image';
import aboutUs from '../../../public/assets/images/beyt-dwarka-5.jpg'
import aboutUs2 from '../../../public/assets/images/1000303358.jpg'
import howToReach from '../../../public/assets/images/1000303332.jpg'
import attraction from '../../../public/assets/images/1000303392.jpg'
import { Josefin_Sans } from 'next/font/google';
import { Col, Row, Table } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

const BeytDwarka = () => {
    const router = useRouter();
    return (
        <>
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current='Bet Dwarka - Mythological Significance' />

            <section className='beyt-dwarka-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>About Bet Dwarka</h1>
                        <div className='category'>
                            <div className='card-category' onClick={() => router.push('/beyt-dwarka/mythological-significance')}>
                                <div className='top-content'>
                                    <Image src={aboutUs} alt='' width={200} height={200} quality={100} onClick={() => router.push('/beyt-dwarka/mythological-significance')} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Mythological Significance</h4>
                                </div>
                            </div>
                            <div className='card-category' onClick={() => router.push('/beyt-dwarka/how-to-reach')}>
                                <div className='top-content'>
                                    <Image src={howToReach} alt='' width={200} height={200} quality={100} onClick={() => router.push('/beyt-dwarka/how-to-reach')} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>How to Reach?</h4>
                                </div>
                            </div>
                            <div className='card-category' onClick={() => router.push('/beyt-dwarka/attractions')}>
                                <div className='top-content'>
                                    <Image src={attraction} alt='' width={200} height={200} quality={100} onClick={() => router.push('/beyt-dwarka/attractions')} />
                                </div>
                                <div className='bottom-content'>
                                    <h4 className={`${Josefin_Font?.className}`}>Attractions</h4>
                                </div>
                            </div>
                        </div>

                        <h1 className={`sectionTitle wow animate__animated animate__fadeIn animate-slow`}>Temple Timing</h1>

                        <Row className="about-content">
                            <Col xxl={6} xl={6} lg={6} md={12}>
                                <div className='timing'>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Temple Open</th>
                                                <th className='text-end'>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Morning Darshan</td>
                                                <td>9:00 AM  - 1:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Evening Darshan</td>
                                                <td>3:00 PM  - 6:00 PM</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={12}>
                                <div className="image-content wow animate__animated animate__fadeIn animate-slow">
                                    <Image src={aboutUs2} alt="about-us image" quality={100} className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BeytDwarka
