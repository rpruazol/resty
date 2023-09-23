
import './Form.scss';

export default function Form(props){

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: e.target.method.value,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    console.log(formData)
    props.handleApiCall(formData);
  }
    return (
      <>
        <form onSubmit={handleSubmit} >
          <select className="methods" name="method">
            <option value="GET" id="get">GET</option>
            <option value="POST" id="post">POST</option>
            <option value="PUT" id="put">PUT</option>
            <option value="DELETE" id="delete">DELETE</option>
          </select>
          <label >
            <input name='url' type='text' placeholder="https://google.com" />
            <button type="submit">GO!</button>
          </label>
        </form>
      </>
    );
};