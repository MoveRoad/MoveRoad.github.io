import styled from "styled-components";

export const TogetherSports = () => {
  return (
    <ul>
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
      <Video
        src="/websocket.mp4"
        autoPlay
        loop
        muted
        poster="/room.png"
      ></Video>
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
    </ul>
  );
};

const Video = styled.video`
  width: 100%;
  height: 300px;
`;
