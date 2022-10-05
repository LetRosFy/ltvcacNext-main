import React from 'react';
import styles from "../Contacts.module.scss";
import ContactsLets from "./ContactsLets";



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

export default ContactsLet;
