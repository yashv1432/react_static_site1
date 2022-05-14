import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Whatsapp from './Whatsapp';

function FranchiseForm() {
    return (
        <div>
            <Header />
            <Whatsapp/>
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScw2FYbTYJTZDpbUg-OEX20kTfLPb3BV2L5A-7MKd2Mu4zJQw/viewform" width="640" height="1600" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default FranchiseForm;