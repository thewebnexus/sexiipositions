import React from 'react';


const Contact = () => {
  return (
    <div>

        <section class="banner-bottom py-5">
        <div class="container py-md-5">
            <h3 class="title-wthree mb-lg-5 mb-4 text-center">Contact Us </h3>
            <div class="row contact_information">
                <div class="col-md-6">
                    <div class="contact_right p-lg-5 p-4">
                        <form action="mailto:support@sexiipositions.com" method="post"enctype="text/plain" >
                            <div class="field-group">

                                <div class="content-input-field">
                                    <input name="text1" id="text1" type="text"  placeholder="Name" required />
                                </div>
                            </div>
                            <div class="field-group">

                                <div class="content-input-field">
                                    <input name="text1" id="text1" type="email"  placeholder="Email" required /> 
                                </div>
                            </div>
                            <div class="field-group">
                                <div class="content-input-field">
                                    <textarea placeholder="Your Message Here..." required ></textarea>
                                </div>
                            </div>
                            <div class="content-input-field">
                                <button type="submit" class="btn">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                    <div class="mt-5 information-wthree">
                        <h4 class="text-uppercase mb-4"><span class="fa fa-comments"></span> Communication</h4>
                        <p class="cont-wthree-para mb-3 text-capitalize">for general queries, including property Sales and constructions, please email us at <a href="mailto:support@sexiipositions.com">
                            support@sexiipositions.com</a></p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                     <div class="mt-5 information-wthree">
                        <h4 class="text-uppercase mb-4"><span class="fa fa-life-ring"></span> Technical Support</h4>
                        <p class="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <a href="tel:+16146265945"> (614) 626 5945</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact