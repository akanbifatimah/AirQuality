import React, { useEffect, useState } from "react";


function Content() {
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
    <section className="cont">
    <div className="container text-center pt-4 text-black">
        <h2 className="mb-xl-5 red">
        {data.hero_1_title}  
        </h2>
    </div>
    <div id="know-more" className="container info">
        <div className="info1">
            <img src={data.hero_1_image} alt="covered men" />
        </div>
        <div className="info2">
            <p>
            {data.p_2_value}
            </p>
            <p>{data.p_3_value}</p>
          
           
            <div class="btn-div">
            <a href="#pm">
                <button class=" my-btn btn-red">Know PM around india</button>
            </a>
            
            </div>
        </div>
    </div>
    </section>
    
  );
}

export default Content;
