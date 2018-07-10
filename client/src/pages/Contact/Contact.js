import React, { Component } from 'react';

class Contact extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                    <div className="wrapper contact">
                        <h4 id="email">Email Us</h4>
                        <form id="contactform">
                            <p>
                                <label>Name</label>
                                <input type="text" name="name" />
                            </p>
                            <p>
                                <label>Company</label>
                                <input type="text" name="company" />
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" name="email" />
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" />
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5"></textarea>
                            </p>
                            <p className="full">
                                <button>Submit</button>
                            </p>
                        </form>
                </div>
            </div>
        );
    }
}

export default Contact;