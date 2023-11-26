import { useRef } from 'react';

const emailRegex = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);

export default function Contact () {
    const nameRef = useRef(null);
    const nameHelpRef = useRef(null);
    const emailRef = useRef(null);
    const emailHelpRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordHelpRef = useRef(null);

    //function to change the border of a field to blue when mouse hovers over it
    const handleFieldMouseEnter = (event) => {
        event.target.classList.add("border-primary");
    }

    //series of logic to check against a form field when the mouse exits
    //will check to see if the field is empty, or an incorrect email address, then show a red error message if it is
    const handleFieldMouseLeave = (event) => {
        
        if (nameRef.current.value === "") {
            event.target.classList.add("border-danger");
            nameHelpRef.current.innerText = "This field is required.";
            nameHelpRef.current.classList.add(".text-danger");
        } else {
            nameHelpRef.current.innerText = 'Enter your name here.';
            nameHelpRef.current.classList.remove(".text-danger");
        }

        if (emailRef.current.value === "") {
            event.target.classList.add("border-danger");
            emailHelpRef.current.innerText = "This field is required.";
            emailHelpRef.current.classList.add(".text-danger");
        } else if (!emailRegex.test(emailRef.current.value)) {
            event.target.classList.add("border-danger");
            emailHelpRef.current.innerText = "Please enter a valid email address.";
            emailHelpRef.current.classList.add(".text-danger");
        } else {
            emailHelpRef.current.innerText = 'Enter your email here.';
            emailHelpRef.current.classList.remove(".text-danger");
        }

        if (passwordRef.current.value === "") {
            event.target.classList.add("border-danger");
            passwordHelpRef.current.innerText = "This field is required.";
            passwordHelpRef.current.classList.add(".text-danger");
        } else {
            passwordHelpRef.current.innerText = 'Enter your password here.';
            passwordHelpRef.current.classList.remove(".text-danger");
        }
    }

    return (
        <div className="row container-fluid text-center">
            <div className="col-2 flex-grow-1"></div>
            <div className="col flex-grow-1">
                <section className="row" id="contactMe">
                    {/* below is a form imported from bootstrap and edited slightly */}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="yourName" className="form-label">Enter your name</label>
                            <input
                                ref={nameRef}
                                type="text" 
                                className="form-control" 
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
                                className="form-control" 
                                id="yourEmail" 
                                aria-describedby="emailHelp"
                                onMouseEnter={handleFieldMouseEnter}
                                onMouseLeave={handleFieldMouseLeave}
                                ></input>
                            <div ref={emailHelpRef} id="emailHelp" className="form-text">Enter your email here</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="yourPassword" className="form-label">Password</label>
                            <input 
                                ref={passwordRef}
                                type="password" 
                                className="form-control" 
                                id="yourPassword"
                                aria-describedby="passwordHelp"
                                onMouseEnter={handleFieldMouseEnter}
                                onMouseLeave={handleFieldMouseLeave}
                                ></input>
                            <div ref={passwordHelpRef} id="passwordHelp" className="form-text">Enter your password here</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </div>
            <div className="col-2 flex-grow-1"></div>
        </div>
    )
};