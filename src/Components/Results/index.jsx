import './Results.scss';

export default function Results(props) {
    return (
      <div className='response'>
        <p>
        Response
        </p>
        <div id="response-body">
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
        </div>
      </div>
    );
};