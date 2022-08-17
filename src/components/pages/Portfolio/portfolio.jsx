import React from 'react'
import photo1 from './Asset/img1.jpg'
import photo2 from './Asset/img2.jpg'
import photo3 from './Asset/img3.jpg'
import photo4 from './Asset/img4.jpg'
import './Asset/portfolio.css'
const portfolio = () => {
  return (
   <>
  
<section className='text-white text-center py-5 wave'>
    <div className='container m-5'>
    <h1>Work That We Love</h1>
    <h6 className='mx-5'>We employ an adaptive and innovative approach for all of our projects.
     Our strong ethics, years of experience, and extensive web design and online marketing skills distinguish us as a leader in the field.</h6>
   <a href="#work">  <button type="button"class="m-3 rounded-pill btn btn-lg btn-outline-danger" >Our Work</button>
   </a>
    </div>
   
<div class="custom-shape-divider-bottom-1655546158">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
</section>
<div id="work" class="container my-5 d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src={photo1}/>
            </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
            <img src={photo2}/>  </div>
            <div class="content">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
            <img src={photo3}/>   </div>
            <div class="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column " >
            <div class='imgContainer'>
            <img src={photo4}/> </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
            <img src={photo1}/>  </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
            <img src={photo2}/> </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
            <img src={photo3}/>  </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
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

export default portfolio
