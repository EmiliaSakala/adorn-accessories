import React from "react";  
import '../../pages/home/home.css';
import necklaces from '../../assets/necklaces.jfif';
import bracelets from '../../assets/bracelets.jfif';
import earrings from '../../assets/earrings.jfif';
import rings from '../../assets/rings.jfif';
import watches from '../../assets/watches.jfif';

export default function Home() {
  return (
    <>
    <div className="hero">
      <h1>Welcome to Adorn Accessories</h1>
      <p>Everyday Elegance made simple</p>
      <div className="buttons">
        <a href="" className="btn">New Items</a>
        <a href="" className="btn">Best Sellers</a>
      </div>
    </div>

<section className="categories">
    <div className="categories">
        <h2>Categories</h2>
        <div className="categories-inner">
            <div className="category-card">
                <img src={necklaces} alt="Necklaces" />
                <h3>Necklaces</h3>
            </div>
            <div className="category-card">
                <img src={bracelets} alt="Bracelets" />
                <h3>Bracelets</h3>
            </div>
            <div className="category-card">
                <img src={earrings} alt="Earrings" />
                <h3>Earrings</h3>
            </div>
             <div className="category-card">
                <img src={watches} alt="Earrings" />
                <h3>Watches</h3>
            </div>
            <div className="category-card">
                <img src={rings} alt="Earrings" />
                <h3>Rings</h3>
            </div>
        </div>
    </div>
</section>

<section className="contact">
    <div className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to our customer support team.</p>
        <div className="contact-details">
            <a href="mailto:emiliasakala18@gmail.com" className="btn">Email Us</a>
        <a href="https://wa.me/c/263782120332">View the catalog on WhatsApp</a>
        </div>
    </div>
</section>

    </>
    
  );
}