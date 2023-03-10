import React from 'react';
import Link from 'next/link';
import { Product } from '../components';
import { client } from '../lib/client';



const Shop = ({products}) => {

  return (
    <div className='shop-container'>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}


export default Shop