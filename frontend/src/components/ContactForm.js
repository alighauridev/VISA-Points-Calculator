import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import styles from "../scss/from.scss";
import LoadingAnimation from "./LoadingAnimation";
const ContactForm = ({ totalPoints, setformToggle }) => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_bi0twsh",
                "template_70lwzyt",
                form.current,
                "9Pkw4rOqj4QdNqhxr"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Email sent successfully!");
                    setLoading(false);
                    setformToggle(true)
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);
                    setStatus("Failed to send email. Please try again later.");
                }
            );
    };

    return (
        <div className={"contact-form"} style={{ marginTop: "40px" }}>
            <h2>Please fill out the form to view the summary of results.</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name*</label>
                <input type="text" name="user_name" required />
                <label>Number*</label>
                <input type="number" name="user_email" required />
                <label style={{ display: "none" }}>Points</label>
                <input
                    type="number"
                    style={{ display: "none" }}
                    name="user_points"
                    value={totalPoints}
                />
                <label>Message</label>
                <textarea name="message" required />

                <button style={{
                    background: "rgb(0, 77, 142)",
                    color: "#fff",
                    cursor: "pointer",
                }} type="submit">     {loading ? <LoadingAnimation /> : 'Submit'}</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default ContactForm;
