import React from 'react'
import Image from 'next/image'
import logo from '../../../../../public/assets/images/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingScreen = () => {
    return (
        <>
            <div className='loadingOverlay'>
                <div className="spinner">
                    <Image className='logo' src={logo} alt='loading screen' quality={100} width={150} height={150} priority />
                </div>
                <span className='mt-4'><FontAwesomeIcon icon={faSpinner} spinPulse size='lg' className='me-2' />  Loading <FontAwesomeIcon icon={faEllipsis} fade className='mt-2' /></span>
            </div>
        </>
    )
}

export default LoadingScreen
