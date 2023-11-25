const emailRegex = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);

//function to change the border of a field to blue when mouse hovers over it
const handleFieldMouseEnter = (event) => {
    event.target.classList.add("border-primary");
}

//series of logic to check against a form field when the mouse exits
//will check to see if the field is empty, or an incorrect email address, then show a red error message if it is
const handleFieldMouseLeave = (event) => {
    const nameHelp = document.querySelector('#nameHelp');
    const emailHelp = document.querySelector('#emailHelp');
    const passwordHelp = document.querySelector('#passwordHelp');
    const yourName = document.querySelector('#yourName').value();
    const yourEmail = document.querySelector('#yourEmail').value();
    const yourPassword = document.querySelector('#yourPassword').value();

    if (!yourName) {
        event.target.classList.add("border-danger");
        nameHelp.textContent = "This field is required.";
        nameHelp.classList.add(".text-danger");
    } else {
        nameHelp.textContent = 'Enter your name here.';
        nameHelp.classList.remove(".text-danger");
    }

    if (!yourEmail) {
        event.target.classList.add("border-danger");
        emailHelp.textContent = "This field is required.";
        emailHelp.classList.add(".text-danger");
    } else if (!emailRegex.test(yourEmail)) {
        event.target.classList.add("border-danger");
        emailHelp.textContent = "Please enter a valid email address.";
        emailHelp.classList.add(".text-danger");
    } else {
        emailHelp.textContent = 'Enter your email here.';
        emailHelp.classList.remove(".text-danger");
    }

    if (!yourPassword) {
        event.target.classList.add("border-danger");
        passwordHelp.textContent = "This field is required.";
        passwordHelp.classList.add(".text-danger");
    } else {
        passwordHelp.textContent = 'Enter your password here.';
        passwordHelp.classList.remove(".text-danger");
    }
}

export default function Contact () {
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
                                type="text" 
                                className="form-control" 
                                id="yourName" 
                                aria-describedby="nameHelp"
                                onMouseEnter={handleFieldMouseEnter}
                                onMouseLeave={handleFieldMouseLeave}></input>
                            <div id="nameHelp" className="form-text">Enter your name here.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="yourEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="yourEmail" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">Enter your email here</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="yourPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="yourPassword" aria-describedby="passwordHelp"></input>
                            <div id="passwordHelp" className="form-text">Enter your password here</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </div>
            <div className="col-2 flex-grow-1"></div>
        </div>
    )
};