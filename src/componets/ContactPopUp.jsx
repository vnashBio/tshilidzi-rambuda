import '../css/contactPopUp.css';
import { useSpring, animated } from 'react-spring';
const ContactPopUp = (props) =>{

    const animation = useSpring({
        config:{
            duration: 250
        },
        opacity: props.trigger ? 1 : 0,
        transform: props.trigger ? `translateY(0%)`:'translateY(-100%)'
    })

    return (props.trigger) ? (
        <div className="popup">
            <animated.div style={animation}>
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <h1>Message sent successfully...</h1>
                <p>I will get back to you as soon as possible</p>
                <p>Can't wait to start working with you</p>
            </div>
            </animated.div>
        </div>
    ):"";
}
export default ContactPopUp;