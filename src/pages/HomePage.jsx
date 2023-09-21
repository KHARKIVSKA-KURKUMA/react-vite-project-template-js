import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const HomePage = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <Link to="another">Link to Another Page</Link>
    </Container>
  );
};

export default HomePage;
