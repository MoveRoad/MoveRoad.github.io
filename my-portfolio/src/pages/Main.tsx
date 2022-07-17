import styled from "styled-components";
import Contact from "../components/Contact";
import MyIntroduce from "../components/MyIntroduce";
import Stacks from "../components/Stacks";
import Experience from "../components/Experience";
import Education from "../components/Education";

const Main = () => {
  return (
    <>
      <Body>
        <dl>
          <Contact />
          <MyIntroduce />
          <Stacks />
          <Experience />
          <Education />
        </dl>
      </Body>
    </>
  );
};

const Body = styled.body`
  width: 700px;
  margin: 110px auto;
  display: flex;
  text-align: left;

  @media screen and (max-width: 1024px) {
    & {
      width: 100%;
    }
  }
`;

export default Main;
