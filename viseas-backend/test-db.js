const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_ssOvH5XrFlYeor',
  key_secret: 'DPLAFEDW3tXAQk289yzuYGR2'
});

razorpay.orders.create({
  amount: 1000, // in paise = ₹10
  currency: "INR",
  receipt: "receipt#1"
}, function(err, order) {
  if (err) {
    console.log("❌ Razorpay Error:", err);
  } else {
    console.log("✅ Razorpay Order Created:", order);
  }
});
