import React from "react";  
import '../../pages/home/home.css';

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
                <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Necklaces" />
                <h3>Necklaces</h3>
            </div>
            <div className="category-card">
                <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Bracelets" />
                <h3>Bracelets</h3>
            </div>
            <div className="category-card">
                <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Earrings" />
                <h3>Earrings</h3>
            </div>
        </div>
    </div>
</section>

    </>
    
  );
}