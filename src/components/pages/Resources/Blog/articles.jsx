import React,{useState,useEffect} from 'react'
import {  collection,doc,onSnapshot, orderBy,query } from 'firebase/firestore'
import { db } from '../../../../firebaseConfig'
import './Asset/articles.css'
const Articles = () => {
    const [Article,setAeticle]=useState([])
    useEffect(()=>{
         const articleRef=collection(db,"blog")
         const quee=query(articleRef,orderBy("createdAt","desc"))
         onSnapshot(quee,(snapshot)=>{
            const Articles=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setAeticle(Articles)
            console.log(Articles);
         })
    },[])
  return (
   <>
   {
    Article.length===0?(<p>No article found</p>):(
        Article.map(({id,title,description,createdAt,imageUrl})=>(
            <div key={id}>
              
               <div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src={imageUrl} alt="" />
                                </div>
                                <div class="text-container">
                                    <h6>{title}</h6>
                                    <p>{description}</p>
                                    <p>{createdAt.toDate().toDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                </div>
                </div>
                </div>
            </div>
        ))
    )
   }
   </>
  )
}

export default Articles
