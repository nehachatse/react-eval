export default function ResultItem(props) {
  const { name, node_id } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        padding: "0.5rem",
        border: "1px solid black",
        margin: "1rem"
      }}
    >
      <h2>{name}</h2>
      <p>{node_id}</p>
    </div>
  );
}
