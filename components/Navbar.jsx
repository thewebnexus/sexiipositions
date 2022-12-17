import React from 'react';
import { AiOutlineShopping, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  

  return (
    <div className="navbar-container">
    <div class="main-sec">
        <header class="py-sm-3 pt-3 pb-2" id="home">
            <div class="container">
               
                <div class="top-w3pvt d-flex">
                    <div id="logo">
                        <a href="/"><Image src={Logo} alt='logo'/></a> 
                    </div>

                    <div class="forms ml-auto">
                        <Link  href="/login">
                        <a class="btn"> Sign In</a>
                        </Link>
                        <Link  href="/register">
                        <a class="btn"> Sign Up</a>
                        </Link>
                        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
                    </div>
                </div>
                <div class="nav-top-wthree">
                    <nav>

                        <label for="drop" class="toggle"><AiOutlineMenu/></label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu">
                           <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            </li>
                           <li>
                           <Link href="/shop">
                                <a>&#128717;&#65039;Shop</a>
                            </Link>
                            </li>
                           <li>
                           <Link href="/about">
                                <a>About Us</a>
                            </Link>
                            </li>
                            <li>
                            <Link  href="/contact">  
                                <a>Contact</a>
                            </Link> 
                            </li>
                        </ul>
                        <div class="nav container"/>          
                    </nav>

                    <div class="search-form ml-auto">
                        <div class="form-w3layouts-grid">
                            <form action="#" method="post" class="newsletter">
                                <input class="search" type="email" placeholder="Newsletter..." required/>
                                <button class="form-control btn" value=""><AiOutlineMail /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        
    </div>



      {showCart && <Cart />}
    </div>
  )
}

export default Navbar