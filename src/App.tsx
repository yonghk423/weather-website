import React from "react";
import styled from "styled-components";
import Main from "./page/WeatherPage";

function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;
