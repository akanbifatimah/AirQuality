import React, { useEffect, useState } from "react";
// import ciggarImage from '../components/cigar.jpg'

function Particulate() {
  const [selectedCity, setSelectedCity] = useState({
    city: "",
    aqi: "",
    cigg: "",
  });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/cities.json");
      const data = await res.json();
      setCities(data);
    } catch (e) {
      console.log(e);
    }
  };
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
    <>
    <div className="container red mt-4">
    <p>{data.p_4_value}</p>
    </div>
    <div className="cities container text-center text-sm-left">
      <div className="info1 ">
        <form className="font-weight-bold">
          <label htmlFor="content">
          {data.p_1_value}
          </label>
        </form>
      </div>
      <div className="info2">
        <form>
          <select
            className="form-select form-control form-control-lg"
            name=""
            id="pm"
            defaultValue=""
            onChange={(e) => {
              const city = e.target.value;
              const foundCity = cities.find((c) => c.city === city);
              setSelectedCity(foundCity);
            }}
          >
            <option disabled value="">
              select an indian city
            </option>
            {cities.map(({ city }, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="cigg">
        {selectedCity?.city && (
          <div className="popup">
            <div className="city-info shadow-lg p-3 mb-5 bg-white">
              <div className="person">
             
                <h1>City Name: {selectedCity.city}</h1>
                <div>
                  <h4>Average No of Cigarretes in air per day:{selectedCity.cigg}</h4>
                  <p>No of Particulate Matter generated: {selectedCity.aqi}</p>
                </div>
              </div>

              <div
                className="btn btn-danger"
                onClick={() => setSelectedCity({})}
              >
                got it!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Particulate;
