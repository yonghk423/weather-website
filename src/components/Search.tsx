import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};
const Search: React.FC<Props> = ({ onSubmit, onChange, inputValue }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <TextField
          id='standard-basic'
          label='search city...'
          variant='standard'
          value={inputValue}
          onChange={onChange}
          required
          autoFocus
        ></TextField>
        <IconButton aria-label='delete' type='submit'>
          <DeleteIcon />
        </IconButton>
      </form>
    </Container>
  );
};
export default Search;

const Container = styled.div`
  display: grid;
  justify-content: center;
`;
