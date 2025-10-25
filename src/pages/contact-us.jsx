import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import BreadCrumb from './shared/components/BreadCrumb';

const Josefin_Font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })

const ContactUs = () => {
    const router = useRouter();
    return (
        <>
            <BreadCrumb title={'Home | Devbhumi Dwarka'} link={'Home'} current='Bet Dwarka - Mythological Significance' />

            <section className='contact-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h1 className={`sectionTitle`} data-heading='Bet Dwarka'>Contact Us</h1>


                        <div className='mt-5'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1437.9858581324281!2d69.09472782441603!3d22.451994935571037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3956a4ab24acb95b%3A0x97218220f669d0c0!2sBet%20Dwarka%20Temple!5e1!3m2!1sen!2sin!4v1761415984150!5m2!1sen!2sin" width="800" height="600" style={{ border: '0' }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ContactUs
