import React, { useEffect } from "react";
import {useReducer} from 'react';
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

const reducer = (state, action) => {
  switch(action.type){
    case 'submit':
      return {...state, method: action.payload.method, url: action.payload.url}
    case 'api':
      return {...state, data: action.payload.data}
    default:
      throw Error('something went wrong')
  } 
  }

function App(props) {
  // const [data, setData] = useState({
  //   method: null,
  //   url: null,
  //   data: null,
  // });

  const [data, dispatch] = useReducer(reducer, {
      method: null,
      url: null,
      data: null,
    })
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
      console.log('response ', response)
      setApiResponse(response);
    })();
  }, [data.url]);

  const setRequestData = (requestData) => {
    console.log("submit", requestData);
    dispatch({
      type: 'submit',
      payload: {
        method: requestData.method,
        url: requestData.url,
        data: requestData
      }
    })
  };

  const setApiResponse = (data) => {
    console.log("api", data);
    dispatch({
      type: 'api',
      payload: {
        data: data
      }
    })
  }

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
