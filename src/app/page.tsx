import React from "react";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Featured from "@/app/components/featured";
import Latest from "@/app/components/latest";
import Shopex from "@/app/components/shopex"
import UniqueFeatures from "@/app/components/uniquefeatures";
import TrendingProducts from "@/app/components/trendingproducts";
import Discount from "@/app/components/discount"
import Topcateg from "@/app/components/topcateg"
import Offers from "@/app/components/offers";
import Footer from "@/app/components/footer";
import Blog from "@/app/components/blog";





export default function Home() {
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Shopex/>
      <UniqueFeatures/>
      <TrendingProducts/>
      <Discount />
      <Topcateg/>
      <Offers/>
      <Blog/>
      <Footer/>
    </div>

    
  );
}