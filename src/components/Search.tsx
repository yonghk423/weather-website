import React, { useState } from "react";
type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const Search: React.FC<Props> = ({ onSubmit }) => {
  const [search, setSearch] = useState("seoul");
  const [input, setInput] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <input type='search' name='search' value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='submit' placeholder='search city'>
        search
      </button>
    </form>
  );
};
export default Search;
