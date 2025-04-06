import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const BreadCrumb = ({ title, basePath }) => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment); // Remove empty strings
    return (
        <nav aria-label="breadcrumb" className='breadcrumb-section container'>
            <ul className="breadcrumb">
                {/* Home Link (Always Clickable) */}
                <li className="breadcrumb-item">
                    <Link href="/" title='Home | IJOPT'>Home</Link>
                </li>

                {/* Dynamically Generated Breadcrumb Items */}
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    const formattedText = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

                    // Make link clickable only if the route exists in basePath
                    const isClickable = basePath?.some(path => path.startsWith(href));

                    return (
                        <li key={index} className="breadcrumb-item">
                            {isClickable ? <Link href={href}>{formattedText}</Link> : <span title={title}>{formattedText}</span>}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BreadCrumb