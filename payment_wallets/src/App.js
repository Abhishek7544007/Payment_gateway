import React, { useEffect } from "react";

import "./App.css";
import PropertyCard from "./components/PropertyCard";

const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <section className="card-list">
     {/*  <PropertyCard
        PropertyName="Complete React Native Mobile App developer - Build 10 apps"
        PropertyThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/Propertys/82228/rn20_fg9wxu.png"
        PropertyDetails="2 Free + 92 Paid"
        PropertyPrice="2,999"
        PropertyDiscountedPrice="199"
        PropertyDiscount="93"
      /> */}
      <PropertyCard
        PropertyName="Duplex bunglow"
        PropertyThumbnail= { process.env.PUBLIC_URL + '/bunglow.jfif'}
        PropertyDetails=" Furnished Bugnlow at posh area"
        PropertyPrice="20 lacs"
        PropertyDiscountedPrice="18 lacs"
        PropertyDiscount="6"
      />
      <PropertyCard
        PropertyName="House rent"
        PropertyThumbnail={ process.env.PUBLIC_URL + '/rent.jfif'}
        PropertyDetails=" House for rent at Cheap price"
        PropertyPrice="20 K"
        PropertyDiscountedPrice="18 k"
        PropertyDiscount="5"
      />
      <PropertyCard
        PropertyName="Flat"
        PropertyThumbnail = { process.env.PUBLIC_URL + '/flat.jfif'}
        PropertyDetails=" 3 BHK flat at good price"
        PropertyPrice="25 Lacs"
        PropertyDiscountedPrice="24 lacs"
        PropertyDiscount="10"
      />
    </section>
  );
};

export default App;
