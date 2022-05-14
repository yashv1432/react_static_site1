import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/slider.css";
import "../assets/phone-css/sliderphone.css";

// ....



export default function Slider() {
  const options = {
  
    autoplay: true,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 5,

        }
    },
};
  return (
    <>
      {/* // className "owl-theme" is optional */}
      <OwlCarousel className="owl-theme" loop margin={10} nav 
      // items={5}
       {...options}>
        <div class="item">
          <img
            src="Images/Converted/Aarush.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/akshita.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/ankit.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/anu.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/anushka.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/ayushi.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/charrul.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Deepshikha.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/ekta.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/garima.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Gaurika.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/gayathiri.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/guari.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/harshali.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Heer.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/jared.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/jayati.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Kamya.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Kinshuk.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Lavanya.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Leena.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Mallika.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/mallikasingh.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Manju.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Miheek.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/mohit.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/muskan.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Namita.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Neeraj.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Neetu.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Neha.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/neha1.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Nehal.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/nia.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/nikita.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/pranjal.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/preksha.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Prerna.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/priya.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Raj.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/ram.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/rishab.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Ritika.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/rushad.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Sai.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Shayosree.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/shivanee.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Shivani.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/shreeradhe.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Shubhra.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Sukhvinder.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/summit.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Sunny.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/surabhi.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/surabhisamriddhi.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Swasti.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Swati.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/tashveen.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/Tushar.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="item">
          <img
            src="Images/Converted/twinkle.webp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </OwlCarousel>
      ;
    </>
  );
}

