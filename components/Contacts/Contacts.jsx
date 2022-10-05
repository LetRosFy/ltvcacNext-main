import React from 'react';
import ava from './img/ava.svg';
import styles from './Contacts.module.scss';
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import telMask from "../../utils/telMask";
import CalendlyDialog from "../CalendlyDialog/CalendlyDialog";



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
const ContactsLet = () => {
    const list = [
        {
            id: '1',
            list: 'Product audit'
        },
        {
            id: '2',
            list: 'Customer & market audit'
        },
        {
            id: '3',
            list: 'Competitive audit'
        },
        {
            id: '4',
            list: 'Sales and ads channels audit'

        },
        {
            id: '5',
            list: 'Business model audit'
        }
    ]
    return (
        <div className={styles.forms}>
            <div className={styles.letTalks}>
                <h3>Speak With Expert Team</h3>
                <p><span>FREE!</span></p>
                <div className={styles.letList}>
                    <p>For $3k+ work budgets:</p>
                    <ul>
                        {list.map(obj => (
                            <li key={obj.id}>{obj.list}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <ContactsLets/>
        </div>
    )

}

function ContactsLets() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) =>
        axios
            .post('https://hook.eu1.make.com/gnsrx5v9ojaht18h8pftfzj4qvihkslo', data)
            .then(() => {
                reset();
                showDialog();
            })
            .catch((error) => {
                console.log(error);
            });
    const [calendlyOpen, setCalenlyOpen] = React.useState(false);
    const telInputRef = React.useRef(null);
    const {ref, ...rest} = register('phoneNumber');

    React.useEffect(() => {
        telMask(telInputRef);
    }, []);

    const showDialog = () => {
        setCalenlyOpen(true);
    };

    React.useEffect(() => {
        const body = document.querySelector('html');
        body.style.overflow = calendlyOpen ? 'hidden' : 'auto';
    }, [calendlyOpen]);

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={`${styles.field} ${errors.Name && styles.error}`}>
                    <input placeholder="Your Name:" {...register('Name')} />
                </div>
                <div className={`${styles.field} ${errors.PhoneNumber && styles.error}`}>
                    <input
                        placeholder="WhatsApp phone number:"
                        required={true}
                        {...rest}
                        ref={(e) => {
                            ref(e);
                            telInputRef.current = e; // you can still assign to ref
                        }}
                    />
                </div>
                <div className={`${styles.field} ${errors.Email && styles.error}`}>
                    <input placeholder="Your email:" {...register('Email')} />
                </div>
                <div className={styles.submit}>
                    <input className="button CTA" type="submit" value="TELL US ABOUT YOUR PROJECT"/>
                </div>
                <p className={styles.copy}>
                    By submitting this form you agree <br/> with terms of privacy policy
                </p>
            </form>
            {calendlyOpen && <CalendlyDialog closeModal={() => setCalenlyOpen(false)}/>}
        </div>
    );

}

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
                        <li className={styles.socialList}>
                            <a href="#" className={styles.socialLinks}>
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
const ContactsEmail = () => {
    return (
        <div className={styles.email}>
            <h3>
                <span>
<svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.0122 73.8232H27.6956L44.4091 58.3956C45.5071 57.3823 47.2007 57.3823 48.2987 58.3956L65.0122 73.8232Z"
      fill="#F72585"/>
<path
    d="M83.6707 42.595C83.6707 41.0837 83.0579 39.6039 81.9886 38.5361L77.9297 34.4772V20.7188C77.9297 18.8501 76.7255 17.2727 75.0592 16.6771V13.5425C75.0592 11.9594 73.7718 10.672 72.1887 10.672H20.5194C18.9363 10.672 17.6489 11.9594 17.6489 13.5425V16.6771C15.9826 17.2727 14.7784 18.8501 14.7784 20.7188V34.4772L10.7195 38.5361C9.65021 39.6039 9.03735 41.0837 9.03735 42.595V43.6829H9.04309C9.04166 43.7088 9.03735 43.7332 9.03735 43.759V75.2586C9.03735 79.2156 12.2566 82.4349 16.2136 82.4349H76.4945C80.4515 82.4349 83.6707 79.2156 83.6707 75.2586V43.759C83.6707 43.7332 83.6664 43.7088 83.665 43.6829H83.6707V42.595ZM80.8002 75.2586C80.8002 75.9518 80.6208 76.5977 80.328 77.1775L59.4709 57.1557L78.4866 42.6165C78.9315 42.2735 79.4984 42.219 79.9994 42.4687C80.5003 42.7156 80.8002 43.1992 80.8002 43.759V75.2586ZM72.1887 13.5425V16.413H20.5194V13.5425H72.1887ZM19.0842 19.2835H73.6239C74.4162 19.2835 75.0592 19.9265 75.0592 20.7188V41.6233L57.3768 55.1449L51.3215 49.3321C48.5356 46.6582 44.171 46.6582 41.3866 49.3321L35.3313 55.1449L17.6489 41.6219V20.7188C17.6489 19.9265 18.2919 19.2835 19.0842 19.2835ZM12.3801 77.179C12.0887 76.5977 11.9079 75.9518 11.9079 75.2586V43.759C11.9079 43.1992 12.2078 42.7156 12.7102 42.4701C13.2111 42.219 13.778 42.2764 14.2229 42.6165L33.2387 57.1586L12.3801 77.179ZM16.2136 79.5644C15.5821 79.5644 14.9865 79.4194 14.4468 79.1754L43.3745 51.4046C45.0451 49.7986 47.663 49.7986 49.3336 51.4046L78.2627 79.1754C77.7216 79.4194 77.126 79.5644 76.4945 79.5644H16.2136Z"
    fill="url(#paint0_linear_63_188)"/>
<path d="M29.1309 26.4598H63.577V29.3304H29.1309V26.4598Z" fill="#3725A2"/>
<path d="M29.1309 32.2008H63.577V35.0713H29.1309V32.2008Z" fill="#3725A2"/>
<path d="M29.1309 37.9419H44.9187V40.8124H29.1309V37.9419Z" fill="#3725A2"/>
<path d="M47.7893 37.9419H63.5771V40.8124H47.7893V37.9419Z" fill="#3725A2"/>
<defs>
<linearGradient id="paint0_linear_63_188" x1="46.354" y1="10.672" x2="46.354" y2="83.6448"
                gradientUnits="userSpaceOnUse">
<stop stopColor="#3725A2"/>
<stop offset="1" stopColor="#3725A2"/>
</linearGradient>
</defs>
</svg>
                </span>
                Learn best practices from our team of experts
            </h3>
            <form action="" className={styles.formEmail}>
                <input type="email" className={styles.input} placeholder='Your email:'/>
                <input type="submit" value='Subscription' className={styles.btn}/>
            </form>
        </div>
    )
}
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
