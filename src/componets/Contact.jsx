import React, { useState } from 'react';
import '../css/contact.css';
import contactImg from '../images/email-me.svg';
import ContactPopUp from './ContactPopUp';
const Contact = () =>{
    // form usestates
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    // popup usestates
    const [buttonPopup, setButtonPopup] = useState(false);

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        setButtonPopup(true);
    };


    return(
        <div className="contact-me">
            <div class="page-title">
                <h1 class="page-sub-head contact-title">Contact me</h1>
                <div class="about-links"><a href="/">Home</a><a href="/contact">Contact me</a></div>
            </div>
            <div className="contact-wrapper">
                <div className="contact-text">
                    <div>
                        <img src={contactImg} alt=""/>
                    </div>
                    <div>
                        <h1>Contact me</h1>
                        
                        <div className="contact-info">
                            <p><i class="fas fa-phone-alt"></i><a href="tel:0670295684">067 029 5684</a></p>
                           <p> <i class="fas fa-envelope"></i><a href="mailto:rambudatshilidzi1@gmail.com">rambudatshilidzi1@gmail.com</a></p>
                        </div>
                        <p>I take freelance opportunities like contract projects
                        and also jobs involving <strong>frontend design and development.</strong></p>
                        <p className="pointing-p">And if you think I am the guy you can work with then let's go fill up
                        that contact form!</p>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div>
                    <form  name="contact" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h1>Let's have <span>a chat...</span></h1>
                            <input placeholder="Name" id="name" className="form-control" type="text" name="form-name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" id="email" className="form-control" type="email" name="form-name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="message" placeholder="Message" type="text" name="form-name" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" value="submit" className="btn contact-btn" style={{background : loader 
                        ? "#ccc" : "#35358e" }}>Submit</button>
                    </form>

                    {/* The popup message */}
                    <ContactPopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
                </div>
            </div>
        </div>
    )
}
export default Contact;

