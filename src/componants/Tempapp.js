import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=33690a0b6db182b269e61aca00809f97`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              console.log(setSearch(event.target.value));
            }}
          />
        </div>

        {!city ? (
          <p className="erroeMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp} ° Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min} ° Cel | max : {city.temp_max} ° Cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
