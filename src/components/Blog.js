import React, { useEffect, useState } from 'react'

function Blog() {
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
      console.log(data)
    
  return (
    <div>
    
        <div className="container head">
            <h2>
                {data.p_6_value}
            </h2>
            <div>
                <p>{data.p_9_value}</p>
                <p>{data.p_10_value}</p>
            </div>
            <h2>{data.hero_1_title}</h2>
            <div>
                <p>{data.p_7_value}</p>
                <p>{data.p_8_value}</p>
                
            </div>
            <a href="http://www.bbc.co.uk/news/world/asia/india" >

            <button className='my-btn btn-red'>
                Know latest Happening in India
            </button>
            </a>
        </div>
    </div>
  )
}

export default Blog