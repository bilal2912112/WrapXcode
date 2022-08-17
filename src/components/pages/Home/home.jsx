import React from 'react'
import "./Asset/home.css"

import photo1 from "./Asset/website-01.png"
import photo2 from "./Asset/market.png"
import photo3 from "./Asset/maintain.png"
import photo4 from "./Asset/carticon.png"
import banner from './Asset/web-design.png'
import banner2 from './Asset/banner2.jpg'
import icon1 from "./Asset/icon1.png"
import icon2 from "./Asset/icon2.jpg"
import icon3 from "./Asset/icon3.jpg"
import web_image from "./Asset/web-image.png"
import "./Asset/icosah.css"
import { useState } from 'react'
var ReactRotatingText = require('react-rotating-text');
const Readmore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 40) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        <h6 className='text-success'>{isReadMore ? "...read more" : " show less"}</h6>
        
      </span>
    </p>
  );
};
let first1=<div >Turning Prospects<br/> Into <span style={{ color: '#1d9083'}}>Profits</span></div>
let second=<p>We merge imagination and technology to help brands grow in an age of digital transformation.</p>
const first=`${<div>this is text</div>}`
const Readmorequestion = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0,0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        <h5 className='text-muted'>{isReadMore ? "+" : "-"}</h5>
        
      </span>
    </p>
  );
};
const home = () => {
  
  return (
    <>
      <div className=' text-light text-center  py-4 ' style={{ backgroundColor: '#1d9083'}}>
      Learn how we can help grow your business by scheduling a call today!
      
      </div>
      <section>
    <div id="intro" class="bg-image-home container-fluid ">
    <div class="hero-wrap">
    <ReactRotatingText class="hero-headline" items={['Turning Prospects', 'Profits','We merge imagination and technology to help brands grow in an age of digital transformation.']} />
	
</div>
    </div>
    
  </section>
  <div class="gb-inside-container text-center mt-3">

<h3 class="cta1-title shadow-sm p-3 mb-5 bg-body">Professional Web Design, Digital Marketing &amp; SEO Agency</h3>

</div>
<div class="container pb-5 bg-gray">
<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 h-100 d-flex justify-content-center mx-3">
<div class="mx-4">
      <img  src={photo1}  class="mx-4" width={110}  alt="Los Angeles Skyscrapers"/>
      <div class="card-body mt-3">
        <h5 class="card-title ms-4 fw-bold fs-6">Web Design</h5>
        <p className='card-text text-muted'>
        <Readmore>
          A superior user experience is our top priority. Our designers, developers, and writers work together to ensure each website we build serves both our clients and their customers.
          </Readmore></p>   
             </div>
    </div>
    <div class="mx-4">
      <img src={photo2} class="mx-3 " width={110} alt="Los Angeles Skyscrapers"/>
      <div class="card-body mt-3">
        <h5 class="card-title fw-bold fs-6">Online Marketing</h5>
        <p className='card-text text-muted'>
        <Readmore>
        Our thorough digital advertising strategy allows you to capture, engage, and convert your desired target audience. We work diligently to maximize your online presence </Readmore></p>   
             </div>
    </div>
 
    <div class="mx-4">
      <img src={photo3} class="my-2  ms-4  " width={110} alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title  fw-bold  fs-6">Support/Maintenance</h5>
        <p className='card-text pb-0 text-muted '>
        <Readmore>
        From regular site audits to upgrades to vulnerability & threat penetration scanning, our maintenance and hosting plans ensures that your websites are up-to-date.          </Readmore></p>   
             </div>
    </div>
    <div class="mx-4">
      <img src={photo4} class="mx-4 " width={110} alt="Los Angeles Skyscrapers"/>
      <div class="card-body mt-3">
        <h5 class="card-title fw-bold ms-4 fs-6">E-Commerce</h5>
        <p className='card-text m-0 text-muted'>
        <Readmore>
        We build e-commerce websites that drive conversions through ease-of-use and rewarding customer experiences through developing digital tools that solve problems.          </Readmore></p>   
             </div>
    </div>
</div>
</div>
<div class="container my-5">
  <div class="row">
    <div class="col">
      <img src={banner} alt="this is a banner" />
    </div>
    <div class="col">
      <h1>Digital Marketing 
</h1>
<h2 className='my-4'>Professionals</h2>
<h5  style={{ color: '#1d9083'}} class="fw-bold   shadow-sm p-3 mb-5">Full-Service Digital Marketing Agency.</h5>
<p className='mb-4 text-muted'>Brick House is a full-service Web Design and Digital Marketing Agency, located in Berkshire County, MA. We offer a wide range of services, including website design, search engine optimization (SEO), digital marketing, and more.</p>
    <p className=' mb-2 text-muted'>Our team of experienced professionals will work with you to create a custom solution that meets your needs and exceeds your expectations. We are passionate about helping businesses grow online, and we’re confident that we can help you achieve your goals.</p>
   <ul className='my-4  text-muted'>
<li  >Website Design & Development</li>
<li>Search Engine Optimization</li>
<li>PPC & Social Media Advertising</li>
   </ul>
   <button type="button" style={{ backgroundColor: '#1d9083'}} class="btn text-light ">LEARN MORE  </button>
    </div>
  </div>
  </div>
  <div class=" container mt-5 bg-light">
  <div class="row">
    <div class="col">
    <div class="container">
  <div class="row">
    <div class="col-2">
    <img src={icon1} className="mt-3" alt="" />
    </div>
    <div class="col-8 mx-4 pt-3">
    <h5 className=''>Results Driven</h5>
    <p className=''>Leveraging analytics, we optimize your website from the front and back end so your company climbs the rankings.</p>
    </div>
  </div>
    
  </div>
    
    </div>
    <div class="col">
    <div class="col">
    <div class="container">
  <div class="row">
    <div class="col-2">
    <img src={icon2} className="mt-3" alt="" />
    </div>
    <div class="col-8 mx-4 pt-3">
    <h5 className=''>Locally Owned</h5>
    <p>Located in the heart of the Berkshires we strive to design user friendly websites to help grow our community.</p>
    </div>
  </div>
    
  </div>
    
    </div>
    </div>
    <div class="col">
    <div class="col">
    <div class="container">
  <div class="row">
    <div class="col-2">
    <img src={icon3} className="mt-3" alt="" />
    </div>
    <div class="col-8 mx-4 pt-3">
    <h5 className=''>Strategic Planning</h5>
    <p>Our custom strategy with your company goals is designed to increase the amount of leads you get that then turn into customers.</p>
    </div>
  </div>
    
  </div>
    
    </div>
    </div>
  </div>
</div>
<div class="  bg-dark my-5">
  <div class="row">
    <div class="col py-5 px-5">
      <img src={banner2} width="500" hight="582" alt="this is a banner" />
    </div>
    <div class="col pe-5">
      <h1 className='text-white my-5 '>Free Website Audit 
</h1>


<p className='mb-4  text-white'>Brick House is a full-service Web Design and Digital Marketing Agency, located in Berkshire County, MA. We offer a wide range of services, including website design, search engine optimization (SEO), digital marketing, and more.</p>
    <p className='mb-2 text-white'>Once you know where your website stands, our team of experts can help you improve your SEO for better visibility online. We want to help you reach more customers and grow your business.</p>
   
   <button type="button" style={{ backgroundColor: '#1d9083'}} class="btn b text-light  my-3 ">LEARN MORE  </button>
    </div>
  </div>
  </div>
  <div class=" container ">
  <div class="row me-2">
    <div class="col ms-5 ">
      <h1 className=''>Web Design Services</h1>
      <h5 style={{ color: '#1d9083'}} className='fw-bold   shadow-sm p-3 me-5 mb-5'>Convert Leads into Customers</h5>
      <p className=' mb-3 me-5 text-muted '>A website is one of the most important investments you can make for your business. It’s the foundation of your online presence and it can help you reach new customers, grow your business, and succeed online.</p>
    <p className='me-5 text-muted'>We want to help you build a website that’s perfect for your business. We have years of experience in web design and we know how to create beautiful websites that are also effective marketing tools. Plus, we offer a wide range of services so we can take care of everything for you – from designing your site to optimizing it for search engines to creating monthly content updates.</p>
    <button className='btn text-light' style={{ backgroundColor: '#1d9083'}}>Learn More</button>
    </div>
    <div class="col my-5">
    <img src={web_image} alt="" />
    </div>
  </div>
  </div>
  <div class="container my-5">
  <div class="row ">
    <div class="col mt-5">
      <h1>Frequently  Asked </h1>
      <h1 className='mt-3'>Questions</h1>
    </div>
    <div class="col mt-5 text-muted">
      <h5> How much does it cost to design a website?</h5>
      <p><Readmorequestion> Designing a website can cost anywhere between $6,000 and $30,000, depending on the complexity of the site and the level of customization you desire. If you’re looking for a simple site with just a few pages, you can expect to pay on the lower end of that range. However, if you need a more complex site with e-commerce capabilities or custom functionality, you’ll likely need to pay closer to $30,000. Ultimately, the price will depend on your specific needs.</Readmorequestion></p>
      <h5>What is Search Engine Optimization (SEO)?</h5>
      <p><Readmorequestion> Search Engine Optimization, or SEO, is the practice of improving the ranking of a website on search engines. The higher the ranking, the more likely people are to find the site. There are a number of techniques that can be used to improve a website’s ranking, and SEO experts are constantly experimenting with new ways to improve results.<br/>
        The most important factor in SEO is content. Search engines want to return relevant results to their users, so they will give preference to websites that contain high-quality, keyword-rich content. This means that website owners need to ensure that their site’s content is well-written and informative, and includes relevant keywords for their industry.
        </Readmorequestion></p>
      <h5> How do I generate more leads on my website?</h5>
      <p><Readmorequestion> You can generate more leads on your website by using effective digital marketing techniques, such as search engine optimization (SEO), content marketing, and paid digital advertising.

SEO involves improving the ranking of your website on search engines such as Google so that potential customers can learn about your business.

Content marketing involves creating and publishing valuable content on your website that will attract potential customers that are searching for your product or service.

Paid digital advertising involves using platforms such as Google, Instagram, Facebook, Twitter, and LinkedIn to reach more potential customers and promote your products or services.</Readmorequestion></p>

    
    </div>
    
  </div>
  </div>
  <div className=' text-center text-light  endingsection'>
<p className='pt-5 bottom-title'>Build Your Brand</p>
<h4 className='text-success'>Do you want to maximize your businesses potential?</h4>
<p className='pt-3'>Our expert team in Berkshire Massachusetts specializes in branding, web design and online marketing. We build strategic,</p>
  <p>engaging experiences that reinforce credibility, communicate key messages and turn prospects into profits.</p>
  <button type="button" class="btn btn-success btn-lg m-3">Get Started Now</button>
  </div>
    </>
  )
}

export default home
