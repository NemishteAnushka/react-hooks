import React, { useEffect, useState } from "react";

function FetchDataUsingAsync() {
  const URL = `https://jsonplaceholder.typicode.com/users`;

  const [data, setData] = useState([]);
  const fetchData = async () => {
    let response = await fetch(URL);
    let resdata = await response.json();
    setData(resdata);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetching Data using async await</h1>
      <ul>
        {data?.map((items) => (
          <li key={items?.id}>{items?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataUsingAsync;
