import React from 'react'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'], style: ['normal'] })
const BreadCrumb = ({ title, link, current }) => {
    return (
        <>
            <div className={`breadcrumbContent container mt-5`}>
                <div className={`breadcrumb`}>
                    <span className={`breadcrumbItem`}>
                        <Link href={link === 'Home' ? '/' : link} className={ubuntu?.className} title={title}>{link}</Link>
                    </span>
                    <span><FontAwesomeIcon icon={faAngleRight} /></span>
                    <span className={`currentPage ${ubuntu?.className}`}>{current}</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb
