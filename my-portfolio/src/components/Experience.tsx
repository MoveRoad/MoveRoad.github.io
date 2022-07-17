import styled from "styled-components";
import Card from "./projectCard/Card";
import { TogetherSports } from "./project/togetherSports";
import { Portfolio } from "./project/portfolio";
import { RelevantLink } from "./link/RelevantLink";

const Experience = () => {
  return (
    <>
      <h1>📃 Experience & Project</h1>
      <hr />
      <ProjectSection>
        <CardContainer>
          <Card
            projectName={`투스 : Together Sports`}
            cooperation={true}
            stacks={["Next", "Redux", "WebSocket", "Auth0", "AWS"]}
            startDate={`2022-02`}
            endDate={`2022-06 (배포 O)`}
            project={TogetherSports}
            image={"/together-sports-video.mp4"}
            poster={"/MainBanner.png"}
          ></Card>
          {RelevantLink({
            notion:
              "https://www.notion.so/Together-Sports-fa0476b057034596bc276438e8198e77",
            github: "https://github.com/Cha-Young-Ho/TogetherSports",
            domain: "https://together-sports.com",
          })}
        </CardContainer>
        <CardContainer>
          <Card
            projectName={`포트폴리오`}
            cooperation={false}
            stacks={["React", "Typescript", "Github Actions"]}
            startDate={`2022-07`}
            endDate={`(배포 O)`}
            project={Portfolio}
            image={""}
            poster={"/portfolio.png"}
          ></Card>
          {RelevantLink({
            notion: "",
            github: "https://github.com/MoveRoad/MoveRoad.github.io",
            domain: "https://moveroad.github.io/",
          })}
        </CardContainer>
      </ProjectSection>
    </>
  );
};

const ProjectSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;

  @media screen and (max-width: 1024px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Experience;
