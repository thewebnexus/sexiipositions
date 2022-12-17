import React from 'react';
import Link from 'next/link';




const Login = () => {
  return (
    <div>
        <section class="banner-bottom py-5">
        <div class="container">
            <div class="content-grid">
                <div class="text-center icon">
                    <span class="fa fa-unlock-alt"></span>
                </div>
                <div class="content-bottom">
                <h2>Login</h2>
                    <form action="#" method="post">
                        <div class="field-group">
                            <div class="content-input-field">
                                <input name="text1" id="text1" type="text"  placeholder="User Name" required />
                            </div>
                        </div>
                        <div class="field-group">
                            <div class="content-input-field">
                                <input name="password" id="myInput" type="Password" placeholder="Password" required />
                            </div>
                        </div>
                        <div class="content-input-field">
                            <button type="submit" class="btn">Sign In</button>
                        </div>
                        <ul class="list-login">
                            <li>
                                <a href="#" class="text-right">Forgot password?</a>
                            </li>
                            <li class="clearfix"></li>
                        </ul>
                        <ul class="list-login-bottom">
                            <li class="">
                                <Link href="/register" >
                                    <a class="">Don't have an Account?</a>
                                </Link>
                            </li>
                            <li class="">
                                <Link href="/contact">
                                    <a  class="text-right">Need Help?</a>
                                </Link>
                            </li>
                            <li class="clearfix"></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Login