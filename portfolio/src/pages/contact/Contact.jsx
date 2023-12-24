import { useRef, useState } from 'react';
import './Contact.css';

const emailRegex = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);

export default function Contact () {
//begin contact fields section
    //un comment these later and give them functionality to contact me on the backend when I self host
    //grab the display text above/below the input fields as react refs so we can manipulate them with JS and state
    // const nameRef = useRef(null);
    // const nameHelpRef = useRef(null);
    // const emailRef = useRef(null);
    // const emailHelpRef = useRef(null);
    // const messageRef = useRef(null);
    // const messageHelpRef = useRef(null);

    // const [input, setInput] = useState('');

    //function to change the border of a field to blue when mouse hovers over it
    // const handleFieldMouseEnter = (event) => {
    //     event.target.classList.add("border-primary");
    // }

    //series of logic to check against a form field when the mouse exits
    //will check to see if the field is empty, or an incorrect email address, then show a red error message if it is
    // const handleFieldMouseLeave = (event) => {
        
    //     if (nameRef.current.value === "") {
    //         event.target.classList.add("border-danger");
    //         nameHelpRef.current.innerText = "This field is required.";
    //         nameHelpRef.current.classList.add(".text-danger");
    //         setInput('');
    //     } else {
    //         nameHelpRef.current.innerText = '';
    //         nameHelpRef.current.classList.remove(".text-danger");
    //         setInput('');
    //     }

    //     if (emailRef.current.value === "") {
    //         event.target.classList.add("border-danger");
    //         emailHelpRef.current.innerText = "This field is required.";
    //         emailHelpRef.current.classList.add(".text-danger");
    //         setInput('');
    //     } else if (!emailRegex.test(emailRef.current.value)) {
    //         event.target.classList.add("border-danger");
    //         emailHelpRef.current.innerText = "Please enter a valid email address.";
    //         emailHelpRef.current.classList.add(".text-danger");
    //         setInput('');
    //     } else {
    //         emailHelpRef.current.innerText = '';
    //         emailHelpRef.current.classList.remove(".text-danger");
    //         setInput('');
    //     }

    //     if (messageRef.current.value === "") {
    //         event.target.classList.add("border-danger");
    //         messageHelpRef.current.innerText = "This field is required.";
    //         messageHelpRef.current.classList.add(".text-danger");
    //         setInput('');
    //     } else {
    //         messageHelpRef.current.innerText = '';
    //         messageHelpRef.current.classList.remove(".text-danger");
    //         setInput('');
    //     }
    // }
//end contact fields section

    return (
        <div className='contactBackground'>
            <div className="row container-fluid text-center">
                <div className="col-2"></div>
                <div className="col">
                    <div className='my-5'></div>
                    {/* several forms here commented out until in re enable the contact fields */}
                    {/* <section className="row bg-secondary bg-gradient" id="contactMe">
                        below is a form imported from bootstrap and edited slightly
                        <form className='d-flex flex-column align-items-center'>
                            <div className="mb-3">
                                <label htmlFor="yourName" className="form-label">Enter your name</label>
                                <input
                                    ref={nameRef}
                                    defaultValue={input}
                                    type="text" 
                                    className="form-control inputForm" 
                                    id="yourName" 
                                    aria-describedby="nameHelp"
                                    onMouseEnter={handleFieldMouseEnter}
                                    onMouseLeave={handleFieldMouseLeave}
                                    ></input>
                                <div ref={nameHelpRef} id="nameHelp" className="form-text">Enter your name here.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="yourEmail" className="form-label">Email Address</label>
                                <input 
                                    ref={emailRef}
                                    type="email" 
                                    className="form-control inputForm" 
                                    id="yourEmail" 
                                    aria-describedby="emailHelp"
                                    onMouseEnter={handleFieldMouseEnter}
                                    onMouseLeave={handleFieldMouseLeave}
                                    >
                                </input>
                                <div ref={emailHelpRef} id="emailHelp" className="form-text">Enter your email here</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="yourMessage" className="form-label">message</label>
                                <input 
                                    ref={messageRef}
                                    type="text" 
                                    className="form-control inputForm" 
                                    id="yourMessage"
                                    aria-describedby="messageHelp"
                                    onMouseEnter={handleFieldMouseEnter}
                                    onMouseLeave={handleFieldMouseLeave}
                                    >
                                </input>
                                <div ref={messageHelpRef} id="messageHelp" className="form-text">Enter your message here</div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </section> */}
                    <section className='row centerCol bg-gradient justify-content-center' id='contactMethods'>
                        <h3>Ways to contact me:</h3>
                        <div className='col contactLeft'>
                            <p>email:</p>
                            <p>Phone/SMS:</p>
                            <p>Signal Messenger:</p>
                            <p>Matrix:</p>
                            <p>PGP:</p>
                        </div>
                        <div className='col contactRight'>
                            <p>jeremysr@proton.me</p>
                            <p>435-840-8800</p>
                            <p>435-840-8800</p>
                            <p>@exist:monero.social</p>
                            <p>C2054C18</p>
                        </div>
                    </section>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
};