import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import mainLogo from '../../../../../public/assets/images/logo-2.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Courgette, Leckerli_One, Pacifico } from 'next/font/google'
import { useRouter } from 'next/router'

const Courgette_Font = Courgette({ subsets: ['latin'], weight: ['400'] })

const Header = () => {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30) // Add shadow after 50px scroll
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, path) => {
        e?.preventDefault()

        router?.push(path)
    }
    return (
        <>
            <header className={`${isScrolled ? 'scrolled' : ''}`}>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <FontAwesomeIcon icon={faBars} size='md' />
                    </label>
                    <label className="logo">
                        <Image src={mainLogo} alt='' quality={100} className='img-fluid' />
                    </label>
                    <ul>
                        <li>
                            <Link href={'/'} className={`${router?.route === '/' && 'active'} ${Courgette_Font?.className}`} onClick={(e) => handleClick(e, '/')}>Home</Link>
                        </li>
                        {/* <li className={`dropdown ${Courgette_Font?.className}`}>
                            <a href="#" className={`${router?.route?.includes('/about') && 'active'}`}>About Us ▾</a>
                            <ul className={`dropdown-menu`}>
                                <li>
                                    <Link href={'/about/history'} className={`${Courgette_Font?.className} ${router?.route?.includes('/about/history') && 'active'}`} onClick={(e) => handleClick(e, '/about/history')}>History</Link>
                                </li>
                                <li>
                                    <Link href={'/about/architecture'} className={`${Courgette_Font?.className} ${router?.route?.includes('/about/architecture') && 'active'}`} onClick={(e) => handleClick(e, '/about/architecture')}>Architecture</Link>
                                </li>
                                <li>
                                    <Link href={'/about/festivals'} className={`${Courgette_Font?.className} ${router?.route?.includes('/about/festivals') && 'active'}`} onClick={(e) => handleClick(e, '/about/festivals')}>Festivals</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className={`${Courgette_Font?.className}`}>
                            <Link href="/beyt-dwarka" className={`${router?.route === '/beyt-dwarka' && 'active'} ${Courgette_Font?.className}`} onClick={(e) => handleClick(e, '/beyt-dwarka')}>Beyt Dwarka</Link>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <Link href={'/beyt-dwarka/mythological-significance'} className={`${Courgette_Font?.className} ${router?.route?.includes('/beyt-dwarka/mythological-significance') && 'active'}`} onClick={(e) => handleClick(e, '/beyt-dwarka/mythological-significance')}>Mythological Significance</Link>
                                </li>
                                <li><a href="#">How to Reach</a></li>
                                <li><a href="#">Attractions</a></li>
                            </ul> */}
                        </li>
                        <li className={`dropdown ${Courgette_Font?.className}`}>
                            <a href="#">Services ▾</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Dwaja Booking</a></li>
                                <li><a href="#">Live Darshan</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </li>
                        {/* <li className={`dropdown ${Courgette_Font?.className}`}>
                            <a href="#">Tourist Guide ▾</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Nearby Places</a></li>
                                <li><a href="#">Temple Timings</a></li>
                            </ul>
                        </li> */}
                        <li><a href="/contact-us" className={` ${Courgette_Font?.className}`}>Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
