export default async function displayRazorpay() {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
     console.log("hi" +process.env.RAZORPAY_KEY_ID_LIVE)
    const options = {
      key: process.env.RAZORPAY_KEY_ID_LIVE,
      currency: data.currency,
      amount: data.amount,
      name: "Property Online",
      description: "Wallet Transaction",
      image: "http://localhost:1337/logo.png",
      order_id: data.id,
      handler: function (response) {
          try{
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
        alert("payment succesfull")}
        catch{
           alert("payment Failed...") 
        }
      },
      
      // User Name, mail and contact can be used from database for prefill
     /*  prefill: {
        name: " Demo Name",
        email: "test@gmail.com",
        contact: "9999999999",
      }, */
      
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  