import React, { useState } from "react";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
};
const Search: React.FC<Props> = ({ onSubmit, onChange, inputValue, setInputValue }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='search' name='search' value={inputValue} onChange={onChange} required></input>
        <button type='submit' placeholder='search city'>
          search
        </button>
      </form>
    </div>
  );
};
export default Search;
