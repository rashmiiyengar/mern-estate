import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import {  FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const About = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [listings,setListings] = useState([]);
  const handleTotalListings =async()=>{
    const res = await fetch(`/api/user/listings/${currentUser._id}`);
    const data =await res.json();

    if(data.success===false){
      console.log(data.message)
    }

    setListings(data)
  }
  console.log(listings)
  return (
    <div>
      <div className="flex flex-row items-center">
      <img
        src="https://www.realestatewitch.com/wp-content/uploads/2020/04/1-percent-listing-fees.jpg"
        style={{
          backgroundSize: "cover",
        }}
        alt="realtor"
        className="w-full md:w-6/12 rounded-full p-12"
      />
      <div className="flex flex-col gap-4">
      <button className="bg-pink-200 border border-pink-400 p-3 text-black inline-block hover:shadow-lg rounded-lg" onClick={handleTotalListings}>
        Total Listings 
      </button>
       <p className="bg-slate-200 font-semibold p-2"> 
       <span>
        We have successfully created {listings && listings.length} so far and continue to serve our community
       </span>
       
        </p> 
        <img align="right" alt="Coding" width="400" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"/>
      </div>
       
      </div>
     
     

      <p className="bg-slate-200 text-ellipsis p-3 m-10 rounded-l-2xl border">
        Welcome to our about page! we take pride in
        being your trusted partner in California real estate. Here's a glimpse
        into who we are and what we stand for: 
        <FaHome  className="font-bold text-2xl"/>  Passion for California Living:
        Born and raised in the beautiful landscapes of California, our realtor
        brings a deep-rooted passion for the Golden State's diverse communities,
        vibrant culture, and stunning scenery. We believe in more than just
        buying and selling homes; we're dedicated to helping our clients find
        their perfect piece of California paradise. Local Expertise: With years
        of experience navigating the California real estate market, we offer
        unparalleled local expertise. Whether you're looking for a cozy
        beachfront bungalow in Malibu, a chic urban loft in downtown Los
        Angeles, or a sprawling estate in the hills of Silicon Valley, we're
        here to guide you every step of the way. Client-Centered Approach: Our
        philosophy revolves around putting our clients first. We understand that
        buying or selling a home can be a significant life decision, which is
        why we prioritize clear communication, personalized attention, and
        exceptional service tailored to your unique needs and goals. Commitment
        to Excellence: As a licensed real estate professional in California, we
        adhere to the highest standards of integrity, professionalism, and
        ethical conduct. We're committed to exceeding your expectations, whether
        you're a first-time homebuyer, seasoned investor, or looking to sell
        your property for top dollar.
      </p>
    </div>
  );
};

export default About;
