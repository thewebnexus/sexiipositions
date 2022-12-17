import React from 'react';
import Image from 'next/image';
import Logo from '../public/assets/logo.png'
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

const Footer = () => {

    const year = new Date().getFullYear();

  return (
<div class="footer_agileinfo_topf py-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-lg-3 footer_wthree_gridf mt-lg-5">
                    <div id="logo">
                    <a href="/"><Image src={Logo} alt='logo'/></a> 
                    </div>
                    <label class="sub-des2">Online Store</label>
                    <label class="sub-des2">18+</label>
                </div>
                <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-4">
                    <ul class="footer_wthree_gridf_list">
                    <li>
                        <a href="/"><span class="fa fa-angle-right" aria-hidden="true"></span> Home</a>
                    </li>
                    <li>
                        <a href="/about"><span class="fa fa-angle-right" aria-hidden="true"></span> About</a>
                    </li>
                    <li>
                        <a href="/shop"><span class="fa fa-angle-right" aria-hidden="true"></span>Shop</a>
                    </li>
                    </ul>
                </div>
                <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                    <ul class="footer_wthree_gridf_list">
                    <li>
                        <a href="/"><span class="fa fa-angle-right" aria-hidden="true"></span> Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="/contact"><span class="fa fa-angle-right" aria-hidden="true"></span> Contact Us</a>
                    </li>
                </ul>
                </div>

                <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                    <ul class="footer_wthree_gridf_list">
                    <li>
                        <a href="/login"><span class="fa fa-angle-right" aria-hidden="true"></span> Login </a>
                    </li>

                    <li>
                        <a href="/register"><span class="fa fa-angle-right" aria-hidden="true"></span>Register</a>
                    </li>
                    <li>
                        <a href="/"><span class="fa fa-angle-right" aria-hidden="true"></span>Privacy & Policy</a>
                    </li>

                </ul>
                </div>
            </div>

            <div class="w3ls-fsocial-grid">
                <h3 class="sub-w3ls-headf">Follow Us on Social Media</h3>
                <div class="social-ficons">
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100082861736252" target= "_blank"><AiFillFacebook /> Facebook</a></li>
                        <li><a href="https://www.instagram.com/sexii_positions/" target= "_blank"><AiFillInstagram /> Instagram</a></li>
                    </ul>
                </div>
                
            </div>
          
        </div>
        <div class="cpy-right text-center py-3">
                    <p>© {year} Sexii Positions. All rights reserved | Design by
                        <a href="http://thewebnexus.com"> The Web Nexus.</a>
                    </p>
        </div>
    </div>
    
  )
}

export default Footer