
import { useState } from 'react';
import './Form.scss';

export default function Form(props){

  // const [url, setUrl] = useState("");
  // const [method, setMethod] = useState(false);
  const [formData, setFormData] = useState({
    method: "GET",
    url: null,
    data: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData)

    props.setRequestData(formData);
  }

  // const handleMethod = (method) => {
  //   setMethod({method: method})
  //   console.log(method)
  // }

    return (
      <>
        <form onSubmit={handleSubmit} >
          <select className="methods" name="method" onChange={(e) => setFormData({...formData, method: e.target.value})}>
            <option value="GET" id="get">GET</option>
            <option value="POST" id="post">POST</option>
            <option value="PUT" id="put">PUT</option>
            <option value="DELETE" id="delete">DELETE</option>
          </select>
          <label >
            <input name='url' type='text' placeholder="https://google.com" onChange={(e) => setFormData({...formData, url: e.target.value})} />
            <button type="submit">GO!</button>
          </label>
            <textarea name="body" id="" cols="30" rows="10" style={{
              visibility: ['POST', 'PUT'].includes(formData.method) ? "visible" : "hidden" }}>
              </textarea>
        </form>
      </>
    );
};