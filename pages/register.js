import React from 'react';
import Link from 'next/link';


const Register = () => {
  return (
    <div>
        <section class="banner-bottom py-5">
        <div class="container">
            <div class="content-grid">
                <div class="text-center icon">
                    <span class="fa fa-user-circle-o"></span>
                </div>
                <div class="content-bottom">
                    <form action="#" method="post">
                    <h2>Sign Up</h2>

                        <div class="field-group">

                            <div class="content-input-field">
                                <input name="text1" id="text1" type="text" placeholder="User Name" required />
                            </div>
                        </div>
                        <div class="field-group">

                            <div class="content-input-field">
                                <input name="text1" id="text1" type="email" placeholder="User Email" required />
                            </div>
                        </div>
                        <div class="field-group">

                            <div class="content-input-field">
                                <input name="text1" id="text3" type="text" placeholder="Phone" required />
                            </div>
                        </div>
                        <div class="field-group">
                            <div class="content-input-field">
                                <input name="password" id="myInput" type="Password" placeholder="Password" required />
                            </div>
                        </div>
                        <div class="content-input-field">
                            <button type="submit" class="btn">Sign Up</button>
                        </div>
                        <div class="list-login-bottom text-center mt-lg-5 mt-4">

                            <a href="#" class="">By clicking Signup, I agree to your terms</a>



                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Register