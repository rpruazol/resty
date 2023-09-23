import './Results.scss';

export default function Results(props) {
    return (
      <section>
        <h1>
        Response
        </h1>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
};