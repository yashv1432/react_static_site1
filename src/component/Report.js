import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Report() {
    return (
        <div>
            <Header />
            <div style={{ 'display': "flex", "justifyContent": "center" }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnL4Cs38TeXmLNtij7csThE7WyYWxFoJaGKwJHh55jo3qvvQ/viewform" width="640" height="1500" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
            <Footer />
        </div>
    )
}
export default Report;