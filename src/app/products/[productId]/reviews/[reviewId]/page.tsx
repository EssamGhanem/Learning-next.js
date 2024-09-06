import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

const Home = ({params} :{params:{reviewId:string,productId:string}}) => {
  throw new Error("Error in loading");
  return (
    <div>  
      <h1>product {params.productId} review number:{params.reviewId}</h1>
    </div>
  );
};

export default Home;