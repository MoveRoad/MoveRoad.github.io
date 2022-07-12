import style from "styled-components";
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

const Body = style.body`
  width: 100%;
  margin: 110px 0;
  display: flex;
  justify-content: center;
  text-align: left;
`;

export default Main;
