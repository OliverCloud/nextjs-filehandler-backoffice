'use client';
import Image from 'next/image';
import styles from './navigation.module.css';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Link from 'next/link';

const Links = () => {
    return <>
            <a href="./#home">HOME</a>
            <a href="./#section-affiliates">AFFILATES</a>
            <a href="./#section-reviews">REVIEWS</a>
            <a href="./backoffice">BACKOFFICE</a>
        </>
    
};

const Navigation = () => {

    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    
    return (
        <div className={`${styles.navigation} ${mobileMenuActive ? styles.active : ''}`}>
        
            <nav className={`${styles.navBar} wrapper`}>
                
                <div className={`${styles.logo}`} >
                    <Link href={'/'}><Image src="/square_logo.png" alt="MCDM Logo" width={184} height={91} /></Link>
                </div>

                <div>
                    <div className={`${styles.burger}`} onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                        <FaBars />
                    </div>
                    <div className={`${styles.nav}`}>
                        <Links />
                    </div>
                </div>
                
            </nav>

            <div className={`${styles.mobilenav}`} onClick={() => setMobileMenuActive(false)}>
                <Links />
            </div>

        </div>
    )
};
export default Navigation