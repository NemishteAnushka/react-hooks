import React, { useEffect, useState } from "react";

function FetchDataUsingPromise() {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  //useeffect is used to fetch the data
  //using promise method

  //use useState to store data and view
  const [data, setData] = useState([]);
  console.log("data", data);
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((resdata) => {
        console.log(resdata);
        return setData(resdata);
      });
  }, []);
  return (
    <div>
      <h1>Fetch Data using Promises</h1>
      <ul>
        {data?.map((resName) => (
          <li>{resName?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataUsingPromise;
