import React from 'react';
import Link from 'next/link';




const About = () => {
  return (
    <div>
        <section class="banner-bottom py-5">
        <div class="container py-md-5">
        <div class="row grids-wthree-info">
                <div class="col-lg-6 ab-info-con ab-inf-page text-left">
                    <h4>About Our Lingerie</h4>
                    <p>My name is Kiara Thompson, Founder/CEO of Sexii Positions LLC, located in Columbus OH.  Our passion at Sexii Positions is to make birthdays, honeymoons, anniversaries, bachelorette parties, and more the most sexiest times. Our number one priority is to make every woman around the world is confidently sexii no mattter what shape or size. Remember Sexii isn't a size it's a feeling.  </p>
                    <Link href="/shop">
                        <a  class="btn shop mt-4">Shop Now</a>
                    </Link>
                </div>
        </div>
            <div class="row grids-wthree-info text-center">
                <div class="col-lg-4 ab-content">
                    <div class="ab-info-con">
                        <h4>Local Pickup & Availible Delivery</h4>
                    </div>
                </div>
                <div class="col-lg-4 ab-content">
                    <div class="ab-info-con">
                        <h4>Safe & Secure Payments</h4>
                    </div>
                </div>
                <div class="col-lg-4 ab-content">
                    <div class="ab-info-con">
                        <h4>Returns Subject to Approval</h4>
                    </div>
                </div>

            </div>
        </div>
    </section>

    </div>
  )
}

export default About
