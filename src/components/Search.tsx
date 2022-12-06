import React from "react";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  cityInput: React.RefObject<HTMLInputElement>;
};
const Search: React.FC<Props> = ({ onSubmit, onChange, inputValue, cityInput }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          name='search'
          placeholder='search city...'
          value={inputValue}
          onChange={onChange}
          required
          ref={cityInput}
        ></input>
        <button type='submit'>search</button>
      </form>
    </div>
  );
};
export default Search;
