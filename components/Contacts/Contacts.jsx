import React from 'react';
import ava from './img/ava.svg';
import styles from './Contacts.module.scss';
import Image from "next/image";



//Components
import ContactsLet from "./Contacts Components/ContactsLet";
import ContactsSocial from "./Contacts Components/ContactsSocial";
import ContactsEmail from "./Contacts Components/ContactsEmail";









const ContactsItem = () => {

    const social = [
        {
            id: 'telegram',
            img: 'telegram.svg',
            links: '@akhan0v'
        },
        {
            id: 'mail',
            img: 'mail.svg',
            links: 'sales@ltvcac.com'
        },
        {
            id: 'LinkedIn',
            img: 'link.svg',
            links: 'LinkedIn'
        },
    ]
    return (
        <>
            <div className={`container ${styles.contacts}`}>
                <div className={styles.ava}>
                    <div>
                        <Image src={ava} width={539} height={753} alt={ava} className={styles.img}/>
                    </div>
                </div>
                <div className={styles.info}>
                    <h2>
                        Ruslan Akhanov
                    </h2>
                    <p>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.3125 0.334939C9.54423 0.760577 7.30528 2.89193 6.72752 5.65165C5.95273 9.35289 7.75869 13.219 10.9969 14.7907C11.87 15.2145 11.9407 15.228 13.2795 15.228C14.6204 15.228 14.6877 15.2151 15.5622 14.7887C17.2366 13.972 18.4247 12.7301 19.2535 10.9299C19.846 9.64293 20.0465 8.55548 19.9632 7.0801C19.8644 5.32561 19.6022 4.46753 18.7931 3.24935C17.3848 1.12894 14.7769 -0.0438799 12.3125 0.334939ZM6.44399 16.2634C3.11931 17.8861 1.06466 20.4287 0.821612 23.2212L0.750488 24.0394L13.2323 24.0116L25.7142 23.984L25.7041 23.2544C25.676 21.2143 24.0685 18.7371 21.7709 17.1935C20.8734 16.5906 18.839 15.6149 18.6401 15.6921C18.5556 15.7249 17.7878 16.8509 16.9341 18.1944C16.0805 19.5377 15.3308 20.6202 15.2682 20.5998C15.2057 20.5795 15.0083 20.1079 14.8297 19.5519C14.6511 18.9958 14.4319 18.494 14.3428 18.4369C14.0883 18.2737 12.3924 18.3081 12.1608 18.4811C12.0489 18.5648 11.8338 19.071 11.6827 19.606C11.5316 20.1411 11.3561 20.5766 11.2925 20.5738C11.2291 20.571 10.9068 20.1459 10.5764 19.6289C8.60304 16.5411 8.03442 15.7113 7.87319 15.6842C7.77407 15.6675 7.13095 15.9283 6.44399 16.2634ZM12.1625 15.9738C12.0203 16.1176 12.069 17.42 12.2223 17.5751C12.4353 17.7908 14.1716 17.7695 14.3524 17.5489C14.4357 17.4473 14.4787 17.0857 14.4572 16.6672L14.4209 15.9577L13.3338 15.923C12.7359 15.904 12.2087 15.9268 12.1625 15.9738ZM22.9424 21.5605C23.0462 21.6656 23.1311 21.8533 23.1311 21.9775C23.1311 22.5325 22.8967 22.5855 20.4435 22.5855C17.9709 22.5855 17.8449 22.5561 17.8449 21.9775C17.8449 21.3988 17.9709 21.3694 20.4435 21.3694C22.3834 21.3694 22.7838 21.4 22.9424 21.5605Z"
                                  fill="black"/>
                        </svg>
                        <span> Sales Manager</span>
                    </p>
                    <div className={styles.social}>
                        <p>Social:</p>
                        <div>
                            <ul>
                                {social.map(item => (
                                    <li key={item.id}>
                                        <a href={item.links}>
                                            <img src={'./img/' + item.img} alt=""/>
                                            <p>{item.links}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    </div>
                </div>

            </div>

            <ContactsLet/>
            <ContactsSocial/>
            <ContactsEmail/>
            <ContactsMap/>
        </>

    );
};

const ContactsMap = () => {
    return (
        <div className={`container ${styles.map}`}>
            <div className={styles.first}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A6810bb18d265a0e771dd0ac57806951fa27ab1da3e00f2285980f13026dd3ef6&amp;source=constructor"
                    width="642" height="327" frameBorder="0" className={styles.frame}></iframe>

                <p>
                    <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.016 0.605469C5.65159 0.605469 0.50415 5.77529 0.50415 12.1674C0.50415 15.0413 1.32643 17.7336 2.82297 20.1616C4.38529 22.7052 6.44098 24.8855 8.01974 27.4291C8.79268 28.6679 9.35183 29.824 9.94387 31.1619C10.3715 32.0704 10.7168 33.6395 12.016 33.6395C13.3152 33.6395 13.6606 32.0704 14.0717 31.1619C14.6802 29.824 15.2229 28.6679 15.9958 27.4291C17.5746 24.902 19.6303 22.7217 21.1926 20.1616C22.7056 17.7336 23.5279 15.0413 23.5279 12.1674C23.5279 5.77529 18.3804 0.605469 12.016 0.605469ZM12.016 16.7095C9.74652 16.7095 7.90463 14.8596 7.90463 12.5803C7.90463 10.301 9.74652 8.45105 12.016 8.45105C14.2855 8.45105 16.1274 10.301 16.1274 12.5803C16.1274 14.8596 14.2855 16.7095 12.016 16.7095Z"
                            fill="#3725A2"/>
                        <path
                            d="M12.016 0.605469C5.65159 0.605469 0.50415 5.77529 0.50415 12.1674C0.50415 15.0413 1.32643 17.7336 2.82297 20.1616C4.38529 22.7052 6.44098 24.8855 8.01974 27.4291C8.79268 28.6679 9.35183 29.824 9.94387 31.1619C10.3715 32.0704 10.7168 33.6395 12.016 33.6395C13.3152 33.6395 13.6606 32.0704 14.0717 31.1619C14.6802 29.824 15.2229 28.6679 15.9958 27.4291C17.5746 24.902 19.6303 22.7217 21.1926 20.1616C22.7056 17.7336 23.5279 15.0413 23.5279 12.1674C23.5279 5.77529 18.3804 0.605469 12.016 0.605469ZM12.016 16.7095C9.74652 16.7095 7.90463 14.8596 7.90463 12.5803C7.90463 10.301 9.74652 8.45105 12.016 8.45105C14.2855 8.45105 16.1274 10.301 16.1274 12.5803C16.1274 14.8596 14.2855 16.7095 12.016 16.7095Z"
                            fill="black" fillOpacity="0.2"/>
                    </svg>
                    <span>19 W 24th Street, New York NY 10010, United States</span></p>
            </div>
            <div className={styles.second}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A6810bb18d265a0e771dd0ac57806951fa27ab1da3e00f2285980f13026dd3ef6&amp;source=constructor"
                    width="642" height="327" frameBorder="0" className={styles.frame}></iframe>
                <p>
                    <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.016 0.605469C5.65159 0.605469 0.50415 5.77529 0.50415 12.1674C0.50415 15.0413 1.32643 17.7336 2.82297 20.1616C4.38529 22.7052 6.44098 24.8855 8.01974 27.4291C8.79268 28.6679 9.35183 29.824 9.94387 31.1619C10.3715 32.0704 10.7168 33.6395 12.016 33.6395C13.3152 33.6395 13.6606 32.0704 14.0717 31.1619C14.6802 29.824 15.2229 28.6679 15.9958 27.4291C17.5746 24.902 19.6303 22.7217 21.1926 20.1616C22.7056 17.7336 23.5279 15.0413 23.5279 12.1674C23.5279 5.77529 18.3804 0.605469 12.016 0.605469ZM12.016 16.7095C9.74652 16.7095 7.90463 14.8596 7.90463 12.5803C7.90463 10.301 9.74652 8.45105 12.016 8.45105C14.2855 8.45105 16.1274 10.301 16.1274 12.5803C16.1274 14.8596 14.2855 16.7095 12.016 16.7095Z"
                            fill="#3725A2"/>
                        <path
                            d="M12.016 0.605469C5.65159 0.605469 0.50415 5.77529 0.50415 12.1674C0.50415 15.0413 1.32643 17.7336 2.82297 20.1616C4.38529 22.7052 6.44098 24.8855 8.01974 27.4291C8.79268 28.6679 9.35183 29.824 9.94387 31.1619C10.3715 32.0704 10.7168 33.6395 12.016 33.6395C13.3152 33.6395 13.6606 32.0704 14.0717 31.1619C14.6802 29.824 15.2229 28.6679 15.9958 27.4291C17.5746 24.902 19.6303 22.7217 21.1926 20.1616C22.7056 17.7336 23.5279 15.0413 23.5279 12.1674C23.5279 5.77529 18.3804 0.605469 12.016 0.605469ZM12.016 16.7095C9.74652 16.7095 7.90463 14.8596 7.90463 12.5803C7.90463 10.301 9.74652 8.45105 12.016 8.45105C14.2855 8.45105 16.1274 10.301 16.1274 12.5803C16.1274 14.8596 14.2855 16.7095 12.016 16.7095Z"
                            fill="black" fillOpacity="0.2"/>
                    </svg>
                    <span>1054 Budapest, Honved utca 8. 1. em. 2 SELLION Europe Kft. (HU29017043)</span></p>
            </div>
        </div>
    )
}


export default ContactsItem;
