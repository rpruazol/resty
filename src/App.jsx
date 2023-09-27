import React from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';


function App(props){

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  const callApi = async (requestParams) => {
    // mock output

    const params = {
      method: requestParams.method
    }
    const response = await (await fetch(requestParams.url, params)).json()
    
    console.log(response)

    const data = {
      count: 2,
      results: [
        {method: requestParams.method},
        {name: 'fake thing 1', url: requestParams.url},
        {data: response}
      ],
    };
    // this.setState({data, requestParams});
    setData(data);
    setRequestParams(requestParams);
  }

    return (
      <React.Fragment>
        <Header />
        <div class="request">
          <p>Request Method: {requestParams.method}</p>
          <p>URL: {requestParams.url}</p>
        </div>
        <Results data={data} />
        <Form handleApiCall={callApi} />
        <Footer />
      </React.Fragment>
    );
}

export default App;
