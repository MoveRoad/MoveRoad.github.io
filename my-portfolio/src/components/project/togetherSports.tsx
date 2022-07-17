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
      <li>
        Websocket을 이용하여 방 내 실시간 통신 <br />( 채팅, 방 수정 시 정보
        업데이트, 방 접속자 확인 및 온/오프라인 관리 등 )
      </li>
      <Video
        src="/websocket.mp4"
        autoPlay
        loop
        muted
        poster="/room.png"
      ></Video>
      <li> auth0 기능과 JWT를 이용한 로그인 상태 관리 구현</li>
      <li>
        Infinite scrolling 기능 ( Grid 형식의 방 목록과 Chatting ) 및 Throttling
        적용
      </li>
      <li> Slider(Carousel) 및 Calendar 기능 자체 구현</li>
      <li> 회원정보 & 수정 & 방 생성</li>
      <li>
        Map API를 통해 활동지역을 선택하는 기능 및 회원정보 수정 시 기존
        활동지역 재표시 기능 구현
      </li>
      <li>방 목록 조건 필터 기능</li>
      <li>axios를 통한 API 설계</li>
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
