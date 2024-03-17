import React, { useState } from "react";
import "./auth.scss";
import { Link } from "react-router-dom";
const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    address: "",
    country: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="auth">
      <div className="aboutContainer">
        <div className="wrapper">
          <div className="header">
            <h3>Welcome to</h3>
            <h1>EliteEstates</h1>
            <h2> where your dream home awaits!</h2>
          </div>
          <p>
            At [Your Real Estate Service Name], we understand that finding the
            perfect home is more than just a transaction; it's about finding a
            place where memories are made, where families grow, and where dreams
            come true. With years of experience and a passion for excellence, we
            are dedicated to providing unparalleled service to our clients,
            helping them navigate the complexities of the real estate market
            with ease. Whether you're buying, selling, or renting, our team of
            seasoned professionals is here to guide you every step of the way.
            From meticulously curated listings to personalized assistance
            tailored to your unique needs, we strive to make your real estate
            journey seamless and stress-free. At the heart of our service is a
            commitment to integrity, transparency, and professionalism. We
            believe in building lasting relationships based on trust and mutual
            respect, ensuring that our clients feel confident and empowered
            throughout their real estate endeavors. So whether you're searching
            for your forever home, looking to invest in property, or exploring
            new opportunities in the market, let [Your Real Estate Service Name]
            be your trusted partner. Experience the difference with us, and
            let's embark on this exciting journey together.
          </p>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <label htmlFor="">Full Name</label>
          <input
            required
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <label htmlFor="">Address</label>
          <input
            required
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <label htmlFor="">Country</label>
          <input
            required
            type="text"
            name="countery"
            placeholder="Country"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button>Sign Up</button>
          <span>
            Do you have an account? <Link to="/login">Sign In</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
