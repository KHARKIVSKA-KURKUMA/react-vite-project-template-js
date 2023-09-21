import { Link } from "react-router-dom";
import Example from "../components/Example/Example";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eca345;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const AboutPage = () => {
  return (
    <Container>
      <h1> Another Page</h1>
      <Example />
      <Link to="/">Link to Home</Link>
    </Container>
  );
};

export default AboutPage;
