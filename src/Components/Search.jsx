import axios from "axios";
import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";

export default function Search(q) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  var pagination = new Array(20).fill(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=${q}&page=${page}&per_page=5`
      )
      .then((res) => {
        // var total_res = (res.data.total_count / 20) / 5;
        console.log(res.data);
        setData(res.data.items);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      {loading && <div>Loading........</div>}
      {data?.map((item) => (
        <ResultItem key={item.id} name={item.name} node_id={item.node_id} />
      ))}

      {pagination?.map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
