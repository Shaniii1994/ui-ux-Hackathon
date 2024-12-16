import React from "react";
import Navbar from "@/app/components/navbar";
import Header from "@/app/components/Header";
import Hero from "@/app/components/hero";
import Topcateg from "@/app/components/topcateg";
import Offers from "@/app/components/offers";
import Footer from "@/app/components/footer";
import Blog from "@/app/components/blog";
import Grid from "./components/Grid";




export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Grid/>
      <Hero/>
      <Topcateg/>
      <Offers/>
      <Blog/>
      <Footer/>
    </div>

    
  );
}