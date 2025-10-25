import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Courgette } from 'next/font/google'

const Courgette_Font = Courgette({ subsets: ['latin'], weight: ['400'] })

const BreadCrumb = () => {
    const router = useRouter()
    const pathSegments = router.asPath.split('/').filter(Boolean) // Filter out empty strings

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-section container">
            <ul className="breadcrumb">
                {/* Home Link */}
                <li className={`breadcrumb-item ${Courgette_Font?.className}`}>
                    <Link href="/" title="Home | Devbhumi Dwarka">
                        Home
                    </Link>
                </li>

                {/* Dynamic Segments */}
                {pathSegments.map((segment, index) => {
                    const href = '/' + pathSegments.slice(0, index + 1).join('/')
                    const formattedText = segment
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, char => char.toUpperCase())

                    const isLast = index === pathSegments.length - 1

                    return (
                        <li
                            key={index}
                            className={`breadcrumb-item ${Courgette_Font?.className} ${isLast ? 'active' : ''
                                }`}
                            title={formattedText + ' | ' + 'Devbhumi Dwarka'}
                        >
                            {isLast ? (
                                <span title={formattedText + ' | ' + 'Devbhumi Dwarka'}>{formattedText}</span>
                            ) : (
                                <Link href={href}>{formattedText}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumb
