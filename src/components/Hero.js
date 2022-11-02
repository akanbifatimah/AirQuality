import React, { useEffect, useState } from 'react'

function Hero() {
  const [data, setData] = useState({})
        useEffect(() => {
            fetch( '/data.json'
            
            )
              .then(function(response){
                return response.json();
              })
              .then(function(data) {
                setData(data)
                // console.log(data?.article-info_1_category_url)
              });
           
        }, []);
  return (
    <section className="hero-container">
    <div className="center-image">
        <h2 className="logo-img">Air<span className="red">.</span>Quality</h2>
    </div>
    
    <div className="hero">
        <h2>BREATHE A HEALTHY AIR</h2>
        <p>{data.p_3_value}</p> 
         
            <div className="btn-div">
            <a href="#know-more">
                <button className=" my-btn btn-red">Know More</button>
            </a>
            
            </div>
    </div>
</section>
  )
}

export default Hero;