import './Results.scss';

export default function Results(props) {
    return (
      <section>
        <p>
        Response
        </p>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
};