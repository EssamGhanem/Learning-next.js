import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import { notFound } from 'next/navigation';

import { Metadata, Metadata } from 'next';

type params ={
  params:{
    productId:string;
  }
}
// Generate Metadata
export const metadata:Metadata = {
  
    title:{
      absolute:"",
      default:"next-js titile default",
      template:" %s | template key",
    }
  
}

const Home = ({params} :params) => {
    if(parseInt(params.productId) > 1000){
      return notFound();
    }
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
};

export default Home;