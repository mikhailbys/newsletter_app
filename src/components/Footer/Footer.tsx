import React from 'react';
import useStyles from './styles'

export const Footer = () => {
    const styles = useStyles();
    return (
        <footer className={styles.contactDiv}>
            <div className={styles.contactP}>
                <ul className={styles.ul}>
                    <li className={styles.cp}>Contacts</li>
                    <li className={styles.cpli}>
                        phone: 8(999)172-54-49
                    </li>
                    <li className={styles.cpli} style={{textDecoration: "none"}}>
                        <a className={"contact-a"} target="_blank" href="https://vk.com/hotdollar" >Say hello on vk.com</a>
                    </li>
                    <li className={styles.cpli}>
                        <a className={"contact-a"} href="mailto:bystrovmikhailad@gmail.com">mail to: bystrovmikhailad@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}