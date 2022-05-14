import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Whatsapp from './Whatsapp';

function BusinessForm() {
    return (
        <div>
            <Header />
            <Whatsapp/>
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHw7-cJwslwoylNrB9gSoT3nFZMs5IRoWYwg7b9ETOSPS_Aw/viewform" width="640" height="930" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default BusinessForm;