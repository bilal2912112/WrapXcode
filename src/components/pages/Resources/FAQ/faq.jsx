import React,{useState} from 'react'
import "./Asset/faq.css"
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
const faq = () => {
  return (
   <>
   <div className=' bg-success text-light text-center  py-4 '>
      Learn how we can help grow your business by scheduling a call today!
      </div>
      <section>
    <div id="intro" class="bg-image text-light  container-fluid">
    <h1 className='position-absolute top-50 start-50 translate-middle ' >FAQ</h1>
    </div>
    <div class="container my-5 bg-muted">
  <div class="row">
    <div class="col-4">
      <h1>Got Questions?</h1>
    </div>
    <div class="col-8 text-black-50">
      <p>We have answers, and if you still have questions that have not been answered call at <span className='fw-bold'>(413) 553-1992</span>  during business hours or contact us. Our Berkshire Massachusetts team is happy and ready to assist.</p>
    </div>
    </div>
    </div>
    <div class="container py-5 text-black-50">
  <div class="row">
    <div class="col">
    <h5> Do you provide free consultations?</h5>
    <p><Readmorequestion> We sure do! Call <span className='text-success'> (413) 553-1992</span> for more information or get your <span  className='text-success'>free quote online.</span> </Readmorequestion></p>
      
    </div>
    <div class="col">
    <h5>Are there any hidden costs?</h5>
      <p><Readmorequestion> Certainly not! We are transparent in our pricing so that the quote you receive is the price you pay. Once you have begun a project with us, we work diligently to give you the quality product you deserve!</Readmorequestion></p>

    </div>
    </div>
    <div class="row">
    <div class="col">
      <h5>Do I really need SEO?</h5>
      <p><Readmorequestion>SEO is what determines your rankings against your competitors on Google. Search engines are a discovery tool, meaning that many of these visitors are discovering your website for the first time. In order to remain competitive and to achieve business growth online, SEO is a necessity.

</Readmorequestion></p>

    </div>
    <div class="col">
    <h5>Will I have a say in the web design process?</h5>
    <p><Readmorequestion>Absolutely, our collaborative web design approach includes consistent communication and feedback throughout the entire process to help us build the best design for your business.
</Readmorequestion></p>
    </div>
    </div>
    <div class="row">
    <div class="col">
    <h5>Should I start SEO before or after my website is built?</h5>
    <p><Readmorequestion>We highly recommend that SEO is implemented during the creation of your website. It is more effective to build SEO into your website during the creation phase than to build it in after the fact. The first time Google sees your new website you want it to loads fast, have the right keywords, and look great.


</Readmorequestion></p>
    </div>
    <div class="col">
      <h5>How long will it take before my website is ready?</h5>
      <p><Readmorequestion>Depending on the complexity of the project the amount of time will vary. Generally our websites take anywhere from 2 to 4 weeks from the quote to completion.

</Readmorequestion></p>
    </div>
    </div>
    <div class="row">
    <div class="col">
     <h5>What are the ranking factors for SEO?</h5>
     <p><Readmorequestion>There are many ranking factors for SEO although the main ranking indicators include keyword rich content, meta data optimization, backlinks, social media signals and much more. We utilize all of these factors to custom tailor an SEO package to enhance your online presence.
</Readmorequestion></p>
    </div>
    <div class="col">
     <h5>Will my website be mobile responsive?</h5>
     <p><Readmorequestion>As a standard, all of our website are designed to be mobile responsive and convert leads no matter the device.</Readmorequestion></p>
    </div>
    </div>
    <div class="row">
    <div class="col">
     <h5>I need a logo and I already know exactly what I want it to look like. Can you help?</h5>
     <p><Readmorequestion>TSimply provide us with creative references and concepts and we can help bring your ideas to life.</Readmorequestion></p>
    </div>
    <div class="col">
     <h5>Can social media marketing really help my business?</h5>
     <p><Readmorequestion>Definitely! Social media marketing has proven itself to be successful again and again. Furthermore, its absence can actually harm a business.</Readmorequestion></p>
   
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
  </section>
  
 
   </>
  )
}

export default faq
