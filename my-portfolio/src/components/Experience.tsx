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

        {/* <ul>
          <h2> 설명 </h2>
          <li>
            익명의 동네 사람들과 운동 파트너를 구할 수 있게 도와주는 웹 기반
            서비스입니다.
          </li>
          <li> Main Tech : Next, Spring boot, MySQL</li>
          <li>
            Front 2명, Back 2명, Designer 1명으로 총 5명이 진행한 프로젝트로
            <br />
            설계부터 배포까지 분배하여 협업하였습니다.
          </li>
          <h3> 담당 업무 </h3>
          <li> Websocket을 이용하여 방 내 실시간 통신 </li>
          <li> 방 목록 필터 기능 및 무한 스크롤링</li>
          <li> 마이룸 화면의 캐러셀(슬라이더) 및 캘린더 기능</li>
          <li> 회원정보 & 수정 & 방 생성</li>
          <li> 카카오 맵 API를 이용해 지역 선택 기능</li>
          <li> Auth0 기능과 Refresh Token을 이용한 회원관리 기능</li>
          <li> 각종 Modal들 </li>
          <h3> 사용한 기술 스택 </h3>
          <li>Next.js</li>
          <li>Redux, ReduxWrapper</li>
          <li>Websocket, STOMP</li>
          <li>Axios</li>
          <li>styled jsx</li>
        </ul> */}
      </ProjectSection>
    </>
  );
};

const ProjectSection = styled.section`
  width: 100%;
  display: flex;
`;

const SummaryTitle = styled.summary`
  cursor: pointer;
`;

export default Experience;
