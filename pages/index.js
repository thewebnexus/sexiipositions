import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />


    <section class="banner-bottom py-5">
        <div class="container py-md-5">

            <h3 class="title-wthree mb-lg-5 mb-4 text-center">Hey Sexii &#128139;</h3>
            <div class="row text-center">


                <div class="col-md-4 content-gd-wthree">
                    <img src="images/c1.jpg" class="img-fluid" alt="" />
                </div>
                <div class="col-md-4 content-gd-wthree ab-content py-lg-5 my-lg-5">
                <div className="products-heading">
      <h2>New Arrival Products</h2>
    </div>
                    <p>Shop now to find your sexii.</p>
                    <div className="products-container">
                      {products?.map((product) => <Product key={product._id} product={product} />)}
                    </div>
                </div>
                <div class="col-md-4 content-gd-wthree">
                    <img src="images/c2.jpg" class="img-fluid" alt="" />
                </div>
            </div>

        </div>
    </section>
    <section class="newsletter-w3pvt py-5">
        <div class="container py-md-5">
            <form method="post" action="#">
                <p class="text-center">Subscribe to the Sexii Positions mailing list to receive updates on new arrivals, special offers and other discount information.</p>
               <div class="row subscribe-sec">
                    <div class="col-md-9">
                        <input type="email" class="form-control" id="email" placeholder="Enter Your Email.." name="email" required />

                    </div>
                    <div class="col-md-3">

                        <button type="submit" class="btn submit">Subscribe</button>
                    </div>

                </div>
            </form>
        </div>
    </section>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
