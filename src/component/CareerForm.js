import React from 'react'
import Header from './Header';
import Footer from './Footer';

function CareerForm() {
    return (
        <div>
            <Header />
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclF0NoGfjEtty1f53xj2dsabyZIQz3d4YEtKiYR_kv3kPGtQ/viewform" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default CareerForm;