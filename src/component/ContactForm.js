import React from 'react'
import Header from './Header';
import Footer from './Footer';

function ContactForm() {
    return (
        <div>
            <Header />
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/16MYHtXuKJ-ESTz9rjCSIZNrdC0YnI3g6PjU-IcqFAu0/viewform?edit_requested=true" width="640" height="1300" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default ContactForm;