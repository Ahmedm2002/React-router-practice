import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className="bg-teal-400 text-orange-400 text-2xl p-4 m-6 text-center rounded-2xl shadow-xl">
        {data && data.results && data.results.length > 0 && (
          <>
            <img src={data.results[0].picture.large} className="w-50" />
            <p>GitHub Followers:{data.results[0].location.street.number}</p>
          </>
        )}
      </div>
    </>
  );
}
export const getInfo = async () => {
  const response = await fetch("https://randomuser.me/api");
  return response.json();
};

export default Github;

/*

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json()) // Parse response data
      .then((responseData) => {
        console.log("Data Obtained for Api", responseData);
        setData(responseData);
      })
      .catch((err) => console.log(err));
  }, []);

*/
