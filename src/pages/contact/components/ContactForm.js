import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../../styles/ContactForm.module.css';
import { useHistory } from 'react-router-dom';
import FormInputs from '../../../components/forms/FormInputs';
import fields from '../../../assets/data/inputfieldsdata';
import FormTextAreas from '../../../components/forms/FormTextAreas';
import Buttons from '../../../components/Buttons';

const ContactForm = () => {
    const form = useRef();
    const history = useHistory();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rn023oh', 'template_tyb208i', form.current, 'E1ixKlLbduurKoiHf')
        .then((result) => {
            console.log(result.text); 
        }, (error) => {
            console.log(error.text);
        });
        history.push('/');
    };

    return (
        <div className={styles.ContactForm}>
            <h3 className="contact-heading uppercase text-center">Get in touch</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.Form}>
                        <div className={styles.FormColumn}>
                        {fields.map((field) => (
                            <FormInputs
                            key={field.id}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            />
                            ))}
                        </div>
                            
                        <div className={styles.FormColumn}>
                            <FormTextAreas
                                rows="6"
                                name="message"
                                id="projectsummary"
                                placeholder="message*"
                                />
        
                            <Buttons
                                type="submit"
                                value="send"
                                name="name"
                                text="Send"
                            />
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default ContactForm;