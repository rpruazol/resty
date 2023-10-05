import "./History.scss";

export default function Results(props) {
  return (
    <div className="history">
      <p>History</p>
      {props.historyArray.map((data) => {
        return (
          <div id="history-body">
            <pre key={data.url}>{JSON.stringify(data, null, 2)}</pre>
          </div>
        );
      })}
    </div>
  );
}
