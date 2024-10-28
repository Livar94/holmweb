import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../../assets/styles/components/home/contactus.module.css';

export default function ContactUs() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qzlwk19', 'template_9fgw59j', formRef.current, 'pybKblkW4NXLnR0E9')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success("Thank you for your message! We will be in touch with you as soon as possible.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                console.error(error.text);
                toast.error("Failed to send message. Please try again.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div id="email" className="container">
            <div className={styles.header}>
                <div>
                    <h1>Contact Us</h1>
                    <p>Message us for more information about services or free estimation.</p>
                </div>
                <form ref={formRef} onSubmit={sendEmail} className={styles.contactform}>
                    <input type="text" placeholder="First Name" name="user_firstname" required />
                    <input type="text" placeholder="Last Name" name="user_lastname" required />
                    <input type="email" placeholder="Email" name="user_email" required />
                    <input type="tel" name="user_number" placeholder="Phone Number" required pattern="[0-9]{10}" />
                    <textarea name="message" required placeholder="Message..." />
                    <input type="submit" className={styles.contactbtn} value="Send" />
                </form>

                <ToastContainer />
            </div>
        </div>
    );
}
