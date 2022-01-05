import axios from "axios";
import { useEffect } from "react";
export default function Search(q) {
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${q}`)
      .then((res) => console.log(res.data.items));
  }, []);

  return <></>;
}
