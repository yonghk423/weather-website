import React from "react";
import styled from "styled-components";
import Main from "./page/Main";
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
  max-width: 36rem /* 576px */;
  margin-left: auto;
  margin-right: auto;
`;
