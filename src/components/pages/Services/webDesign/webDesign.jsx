import React,{useState} from 'react'
import photo from './Asset/iconss.png'
import banner1 from './Asset/laptop.png'
import './Asset/webdesign.css'
import icon1 from './Asset/mobile.png'
import icon2 from './Asset/time.png'
import icon3 from './Asset/lock.jpg'
import banner from './Asset/ww.png'
import device from "./Asset/devices.png"
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
        <h5 className='text-muted '>{isReadMore ? "+" : "-"}</h5>
        
      </span>
    </p>
  );
  
};
const webDesign = () => {
  return (
   <>
    <div className=' bg-success text-light text-center  py-4 '>
      Learn how we can help grow your business by scheduling a call today!
      </div>
      <section>
    <div id="intro" class="webdesignbgimage text-light  container-fluid">
    <h1 className='position-absolute top-50 start-50 translate-middle' >PROFESSIONAL WEB DESIGN</h1>
    </div>
  </section>
  <div className='text-center bg-light py-5 '>
   <h3>You need a website that represents your business the right way.</h3> </div>
   <div class="container my-5">
  <div class="row">
    <div class="col">
      <img src={banner1} className=" w-100" alt="this is a banner" />
    </div>
    <div class="col">
      <h1>Strategic Website
</h1>
<h1 className='my-4'>Design Services</h1>
<h5 class="fw-bold text-success  shadow-sm py-3 mb-5">We’re a full-service web development agency.</h5>
<p className='mb-4  text-muted'>A website is one of the most important investments you can make for your business. It’s the foundation of your online presence – and it needs to be done right. That’s where we come in. We’re experts in web design, and we can create a website that will help you reach your goals.</p>
    <ul className='my-4  text-muted'>
<li  >Responsive Web Design</li>
<li>Custom Websites</li>

   </ul>
  
    </div>
  </div>
  
  </div>
  <div className='d-flex justify-content-center'><button type="button" class="btn btn-success my-3 btn-lg  ">LEARN MORE  </button></div>
  <div class=" container mx-5 mt-5 bg-light">
  <div class="row">
    <div class="col">
    <div class="container">
  <div class="row">
    <div class="col-2">
    <img src={icon1} className="mt-3" alt="" />
    </div>
    <div class="col-8 mx-4 pt-3">
    <h5 className=''>100% Mobile Ready</h5>
    <p className='text-muted'>Mobile-optimized and responsively designed websites can offer an efficient user experience no matter what device they are using.</p>
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
    <h5 className=''>24/7 Monitoring</h5>
    <p className='text-muted'>Have peace of mind knowing we will handle all of your website needs so you can focus on growing your business.</p>
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
    <h5 className=''>Fast & Secure</h5>
    <p className='text-muted'>We provide our partners with the fastest, secure and up-to-date website possible, to help protect your business.</p>
    </div>
  </div>
    
  </div>
    
    </div>
    </div>
  </div>
</div>
<div className='text-center  pt-5 '>
   <h1>Our Web Developers are Constantly Evolving.</h1>
   <h5 className='my-4' style={{color: "#bb8656"}}>Using the latest and most innovative web development technologies.</h5>
   <img  className='mt-4 ' height="auto" width="auto" sizes="(max-width: 1024px) 100vw, 1024px" src={photo} alt="" />
   
    </div>
    <div class="wrapper">
	<div class="divider div-transparent"></div>
	
</div>
<div class=" container ">
  <div class="row ">
    <div class="col ms-5 ">
      <h1 className=''>Websites Built To</h1>
      <h1>Impress</h1>
      <h5 className='fw-bold text-success  shadow-sm p-3 me-5 mb-5'>Hand-built website design.</h5>
      <p className=' mb-3 me-5 text-muted px-0 '>Each and every web design and development project is coded with the clients best interest in mind. Every website comes 100% mobile ready and meets all of today’s W3C coding standards.</p>
      <ul class="text-muted mb-5">
<li>Cross Platform Compatible</li>
<li>Strategic UI/UX Design</li>
<li>SEO Ready</li>
<li>Fully Maintainable</li>
</ul>
<img src={device} alt="" />
    </div>
    <div class="col ">
    <img src={banner} className="" alt="" />
    </div>
  </div>
  </div>
  <div class=" m-5 p-5  bg-light ">
  <div class="row ">
    <div class="col mt-5">
      <h1>Frequently  Asked </h1>
      <h1 className='mt-3'>Questions</h1>
    </div>
    <div class="col mt-5 text-muted">
      <h5>How long does it take to build a website?</h5>
      <p><Readmorequestion> The amount of time it takes to build a website can vary depending on a number of factors, such as the complexity and size of the site. Generally speaking, it can take anywhere from 6 to 12 weeks to complete a website.</Readmorequestion></p>
      <h5>How much does a small business website cost?</h5>
      <p><Readmorequestion>A small business website typically costs between $6,000 and $12,000. However, this price can vary greatly depending on the level of custom functionality that is required. Often, a more custom website will cost more money. But in general, this is a ballpark figure for what you can expect to spend on a small business website.
</Readmorequestion></p>
      <h5>Do your websites work on mobile devices (responsive)?
</h5>
      <p><Readmorequestion> Yes, our websites work on mobile devices. We use responsive design to ensure that the layout of the website is optimized for a variety of screen sizes. This means that the website will adjust automatically to fit the size of the screen that it is being viewed on.</Readmorequestion></p>

      <h5>Will my website be set up for SEO?</h5>
      <p><Readmorequestion>SEO is hugely important for any website that wants to be successful. Without SEO, your website will be buried in the search engine results pages (SERPs), making it very difficult for potential customers or clients to find you.

There are a lot of different aspects to SEO, ranging from on-page optimization and content marketing to link building and technical SEO. But don’t worry – our team of experts will help you with all of that. We’ll make sure that your website is set up for success from the ground up.</Readmorequestion></p>
    </div>
    
    
  </div>
  </div>
   </>
  )
}

export default webDesign
