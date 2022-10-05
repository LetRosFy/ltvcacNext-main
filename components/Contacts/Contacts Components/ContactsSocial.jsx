import React from 'react';
import styles from "../Contacts.module.scss";



const ContactsSocial = () => {
    const social = [{
        id: 'LinkedIn',
        img: 'LinkedIn.svg',
        title: 'LinkedIn',
    },
        {
            id: 'Facebook',
            img: 'Facebook.svg',
            title: 'Facebook',
        },
        {
            id: 'Instagram',
            img: 'Instagram.svg',
            title: 'Instagram',
        }
    ]

    return (
        <div className={styles.social}>
            <h2>Socials:</h2>
            <div>
                <ul className={styles.ul}>
                    {social.map(obj => (
                        <li className={styles.socialList}
                            key={obj.id}>
                            <a href="components/Contacts/Contacts Components/ContactsSocial#" className={styles.socialLinks}>
                                <img src={'./img/' + obj.img} alt=""/>
                                <p>{obj.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ContactsSocial;
