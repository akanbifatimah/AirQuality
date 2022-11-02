import React from 'react'
import logo from '../Assets/Air.png'
function Footer() {
  return (
    <footer class="footer my-container mx-auto">
    <div class="footer-flex-container text-center text-md-left">
        <div class="flex-1">
            <img alt="air quality" class="footer-logo" src={logo} height='150px' width='150px'/>
        </div>

  
        <div class="flex-3">
            <h3>Links</h3>              
            <a class="link" href="./">
                <p>Store</p>
            </a>
            <a class="link" href="./">
                <p>Blog</p>
            </a>
        </div>

        <div class="flex-4 address">
            <h3>Contact</h3>
            <p> Jubliee-CMD Road, Magodo, <br />Lagos State</p>
            <p>
                <a class="link" href="./">
                    hello@AirQuality.team
                </a>
            </p>
        </div>

        <div class="flex-5">
            <h3>Follow Us</h3>
            <div class="contact-icons">
                <a class="link" href="./"> <img alt="" src="https://zuri.team/img/fb.png"/> </a>
                <a class="link" href="./"> <img alt="" src="https://zuri.team/img/twitter.png"/> </a>
                <a class="link" href="./"> <img alt="" src="https://zuri.team/img/IG.png"/> </a>
                <a class="link" href="./"> <img alt="" src="https://zuri.team/img/in.png"/> </a>
            </div>
        </div>
    </div>

    <div>
        <hr class="m-3 md-0"/>
    </div>

    <div class="mx-auto text-center copyright">
        <p>&copy; 2022 AirQuality Team </p>
    </div>

</footer>
  )
}

export default Footer