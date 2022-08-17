import React,{useState} from 'react'
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
const contact = () => {
  return (
   <>
   <div className=' bg-success text-light text-center  py-4 '>
      Learn how we can help grow your business by scheduling a call today!
      </div>
      <section>
    <div id="intro" class="bgimage text-light  container-fluid">
    <h1 className='position-absolute top-50 start-50 translate-middle' >CONTACT US</h1>
    </div>
  </section>
  <div class="container">
  <div class="row">
    <div class="col-7 my-5">
      <p>For the very best in branding, website design, website development, online marketing, web hosting and maintenance, contact the professionals at Brick House Web Design in Pittsfield, MA. We look forward to hearing from you!</p>
    <form class="row g-3">
  <div class="col-md-6">
  <input type="text"  required class="form-control" placeholder='Name' />
   
  </div>
  <div class="col-md-6">
    
  <input type="email" required class="form-control " placeholder='Email' id="inputEmail4"/>
  </div>
  <div class="col-md-6">
  <input type="number" class="form-control" placeholder='phone' />
   
  </div>
  <div class="col-md-6">
    
    <input type="text" required class="form-control" placeholder='Company' id="inputEmail4"/>
    </div>
    <div class="form-floating">
  <textarea class="form-control" required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
<div class="col-12">
    <button type="submit" class="btn btn-success">Sign in</button>
  </div>
  </form>
    </div>
    <div class="col">
    <div class="p-5 mx-3 bg-gray   gb-inside-container">

<h2 class="py-4 gb-headline gb-headline-87e1e544 gb-headline-text">Find Us</h2>

<div className='text-muted'><p>Located in the Berkshires, our goal is to provide <strong>top quality website </strong>design services to our community through individualized plans to fit your needs. </p>



<p><strong>Phone:&nbsp;</strong>(413) 553-1992</p>



<p><strong>Email:&nbsp;</strong>info@brickhousewebdesign.com</p>



<ul class="wp-container-1 wp-block-social-links">







</ul>



<ul class="wp-container-2 wp-block-social-links">







</ul></div>



</div>
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
      <h5> Do you provide free consultations?</h5>
      <p><Readmorequestion> We sure do! Call <span className='text-success'> (413) 553-1992</span> for more information or get your <span  className='text-success'>free quote online.</span> </Readmorequestion></p>
      <h5>How long will it take before my website is ready?</h5>
      <p><Readmorequestion> Depending on the complexity of the project the amount of time will vary. Generally our websites take anywhere from 2 to 4 weeks from the quote to completion.
        </Readmorequestion></p>
      <h5>Are there any hidden costs?</h5>
      <p><Readmorequestion> Certainly not! We are transparent in our pricing so that the quote you receive is the price you pay. Once you have begun a project with us, we work diligently to give you the quality product you deserve!</Readmorequestion></p>

    
    </div>
    
    
  </div>
  </div>
  </>
  )
}

export default contact
