import React, { useEffect, useState } from "react";

function AbortNetworkRequest() {
  const URL = `https://jsonplaceholder.typicode.com/posts`;
  //state to handle data
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      let response = await fetch(URL, { signal });
      let data = await response.json();
      console.log(data);
      setPostData(data);
    };
    fetchData();

    //clean up function to abort the network request when component unmounts
    //Aborting a network request when a component unmounts is important for performance, memory management, and avoiding potential bugs
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>Abort network request using useEffect clean up functions</h1>
      {postData?.map((items) => (
        <div>
          <h1>{items.id}</h1>
          <h1>{items.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default AbortNetworkRequest;
