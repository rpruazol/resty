import React, { useEffect } from "react";

import "./App.scss";

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention.
// Why is this source of truth beneficial when spread across a global organization?
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import { useState } from "react";

function App(props) {
  const [data, setData] = useState({
    method: null,
    url: null,
    data: null,
  });
console.log('initial state', data)
  useEffect(() => {
    // functionally we will still make the API call when we hit the button, but for the lab clicking the button will trigger useEffect instead of callApi

    // console.log(data)
    // if(!data.data) return;
    // if(data.data && Object.keys(data.data).length) return;
    (async () => {
      console.log('state changed!')
      const params = {
        method: data.method,
      };
      console.log("params", params);
      const response = await (await fetch(data.url, params)).json();

      const newData = {
        count: 2,
        results: [
          { method: data.method },
          { url: data.url },
          { data: response },
        ],
      };
      setData(newData);
      console.log(newData);
    })();
  }, [data.url]);

  const setRequestData = (requestData) => {
    setData(requestData);
    console.log("data", data);
  };

  const callApi = async (requestParams) => {
    // const params = {
    //   method: requestParams.method
    // }
    // const response = await (await fetch(requestParams.url, params)).json()
    // console.log(response)
    // const data = {
    //   count: 2,
    //   results: [
    //     {method: requestParams.method},
    //     {url: requestParams.url},
    //     {data: response}
    //   ],
    // };
    // setData(data);
    // setRequestParams(requestParams);
  };

  return (
    <React.Fragment>
      <Header />
      <div class="main">
        <div class="request">
          {/* <p>Request Method: {requestParams.method}</p>
            <p>URL: {requestParams.url}</p> */}
          <Form setRequestData={setRequestData} />
        </div>
        <Results data={data} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
