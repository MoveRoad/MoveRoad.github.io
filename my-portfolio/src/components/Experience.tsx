import styled from "styled-components";
import Card from "./projectCard/Card";

const Experience = () => {
  return (
    <>
      <h1>📃 Experience & Project</h1>
      <hr />
      <ProjectSection>
        <Card
          projectName={`투스 : Together Sports`}
          cooperation={true}
          stacks={["Next", "Redux", "WebSocket", "Auth0", "AWS"]}
          startDate={`2022-02`}
          endDate={`2022-06 (배포 O)`}
        ></Card>
        <ul>
          <li>
            개발관리 페이지 :{" "}
            <a href="https://www.notion.so/Together-Sports-fa0476b057034596bc276438e8198e77">
              Notion
            </a>
          </li>
          <li>
            깃허브 레포 :{" "}
            <a href="https://github.com/Cha-Young-Ho/TogetherSports">
              Repository
            </a>
          </li>
          <li>
            {" "}
            홈페이지 :{" "}
            <a href="https://together-sports.com">
              https://together-sports.com
            </a>
          </li>
        </ul>
      </ProjectSection>
    </>
  );
};

const ProjectSection = styled.section`
  width: 100%;
  display: flex;
`;

export default Experience;
