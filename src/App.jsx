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
      return {
        ...state, 
        data: action.payload.data, 
        history: [
          ...state.history, 
          {
            method: state.method,
            url: state.url,
            data: action.payload.data
          }
        ]}
    default:
      throw Error('something went wrong')
  }
}

function App(props) {
  // const [history, dispatch] = useReducer(historyReducer, []);
  const [data, dispatch] = useReducer(reducer, {
      method: null,
      url: null,
      data: null,
      history: []
    });
console.log('initial state', data)

  useEffect(() => {
    (async () => {
      console.log('state changed!')
      const params = {
        method: data.method,
      };
      console.log("params", params);
      const response = await (await fetch(data.url, params)).json();
      console.log('response ', response)
      setApiResponse(response);
      console.log('history', data.history)
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
        <div>
          <h1>history</h1>
          {
              <pre>
                {JSON.stringify(data, (key, val) => {
                  console.log(data)
                  if (key === 'history') {return val}}, 2)
                  }
              </pre>
          }
        </div>
      <Footer />
    </React.Fragment>
  );
}



export default App;
