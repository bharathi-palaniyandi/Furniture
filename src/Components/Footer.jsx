
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pt-4">
      <div className="container">
       <div className="foot">
        <div className="cor">
          <h3>Corporate</h3>
          <p>About Us</p>
          <p>Corporate Governance</p>
          <p>Careers</p>
          <p>Pepperfry in the News</p>
        </div>
        <div className="use">
          <h3>Useful Links</h3>
          <p>Explore Gift Cards</p>
          <p>Buy in Bulk</p>
          <p>Discover Our Brands</p>
          <p>Check Out Bonhomie us</p>
        </div>
        <div className="part">
          <h3>Partner With Us</h3>
          <p>Sell on Pepperfry</p>
          <p>Become a Franchisee</p>
          <p>Our Marketplace Policies</p>
          <p>Merchant Dashboard Login</p>
        </div>
        <div className="need">
          <h3>Partner With Us</h3>
          <p>Sell on Pepperfry</p>
          <p>Become a Franchisee</p>
          <p>Become Our Pep Homie</p>
          <p>Scratch Resistant Finish</p>
        </div>
        <div className="down ">
          <h3>Download our App</h3>
          <img src="./images/do1.webp" className='img-fluid w-25' alt="" />
          <img src="./images/do2.webp" className='img-fluid w-25 ms-2' alt="" />
        </div>
       </div>

        <p className="text-center text-white pt-3 pb-3 mb-0">
          &copy; 2021-2025 Bharathi Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
