import axios from "axios";
import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";

export default function Search(q) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${q}&page=1&per_page=5`
      )
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      });
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <ResultItem key={item.id} name={item.name} node_id={item.node_id} />
      ))}
    </div>
  );
}
