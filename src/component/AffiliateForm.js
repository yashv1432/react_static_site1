import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Whatsapp from './Whatsapp';

function AffiliateForm() {
    return (
        <div>
            <Header />
            <Whatsapp/>
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/1ra2AbSCSrvRDFSOba9patnXSsBp0_tQHdm4vIzJTPjM/viewform?edit_requested=true" width="640" height="2500" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default AffiliateForm;