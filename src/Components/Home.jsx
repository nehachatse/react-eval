import { useState } from "react";
import Search from "./Search";

export default function Home() {
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(click);
  const handleClick = () => {
    if (value !== "") {
      setClick(!click);
    } else {
      alert("Enter some input");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="search for repo"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}> Search </button>
      {click && <Search q={value} />}
    </>
  );
}
