import styled from 'styled-components';

const Layout = styled.main`
  display: grid;
  overflow-y: scroll;
  height: 90vh;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "input"
    "results";
`;

export default Layout;
