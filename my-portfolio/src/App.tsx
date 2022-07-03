import style from "styled-components";
import GlobalStyles from "./Theme/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header_container>
        <h1>Donggil Lee</h1>
        <Link__mySite>
          <a href="https://github.com/MoveRoad">
            <Github__logo
              src="/github-logo.png"
              alt="github_link"
            ></Github__logo>
          </a>
          <a href="https://moveroad.tistory.com">
            <Blog__logo src="/blog-logo.png" alt="tistory_link"></Blog__logo>
          </a>
        </Link__mySite>
      </Header_container>
      <Body>
        <dl>
          <h1>📌 Contact & About me</h1>
          <hr />
          <ul>
            <li>
              Email : <a href="mailto:oio31250@gmail.com">oio31250@gmail.com</a>
            </li>
            <li>
              GitHub :{" "}
              <a href="https://github.com/MoveRoad">
                https://github.com/MoveRoad
              </a>
            </li>
            <li>
              Tistory :{" "}
              <a href="https://moveroad.tistory.com">
                https://moveroad.tistory.com
              </a>
            </li>
          </ul>
          <h1>🔍 Front-End Developer</h1>
          <hr />
          <ul>
            <p>
              안녕하세요. Junior Front-End Developer로 React, Next, Redux,
              Github 등을
            </p>
            <p>사용하여 프로젝트를 설계부터 배포까지 경험 해 보았습니다.</p>
            <p>
              배우고 습득하는 데 적극적이며 이를 코드에 적용하려고 노력하고
              있습니다.
            </p>
            <p>협업과 프로젝트와 관련된 소통을 좋아합니다.</p>
          </ul>
          <h1>🛠️ Stacks</h1>
          <hr />
          <ul>
            <li>JavaScript (with TypeScript)</li>
            <ol>
              <li>ES6 문법을 이해하고 사용할 수 있습니다.</li>
              <li>Vanila JS를 이용하여 SPA를 구현할 수 있습니다.</li>
              <li>TypeScript이 왜 필요한지에 대해 알고 학습 중에 있습니다.</li>
            </ol>
            <li>React (with Next, Redux)</li>
            <ol>
              <li>Next.js를 이용하여 SSR 개발 경험이 있습니다.</li>
              <li>
                Next의 특성을 이해하여 Hooks를 통해 개선한 경험이 있습니다.
              </li>
              <li>Redux를 이용한 상태관리 라이브러리를 사용할 수 있습니다.</li>
              <li>React Hooks를 이해하고 사용할 수 있습니다.</li>
            </ol>
            <li>CI/CD</li>
            <ol>
              <li>Github Actions를 이용해 자동 배포 경험이 있습니다.</li>
              <li>CORS 에러에 대한 이해를 하고 있습니다.</li>
            </ol>
            <li>ETC</li>
            <ol>
              <li>Git, GitHub, Git Flow 등에 대한 사용이 익숙합니다.</li>
              <li>디자이너와 Zeplin을 이용한 협업 한 경험이 있습니다.</li>
              <li>
                REST API를 Back-End와 명세서 작성부터 사용까지 한 경험이
                있습니다.
              </li>
              <li>
                Notion을 통해 프로젝트를 문서화하여 작업한 경험이 있습니다.
              </li>
            </ol>
          </ul>
          <h1>📃 Experience & Project</h1>
          <hr />
          <ul>
            <h2>Together Sports : 투스</h2>
            <p>
              Notion :{" "}
              <a href="https://www.notion.so/Together-Sports-fa0476b057034596bc276438e8198e77">
                Go to Notion
              </a>
            </p>
            <p>
              GitHub Repo :{" "}
              <a href="https://github.com/Cha-Young-Ho/TogetherSports">
                Go to Repository
              </a>
            </p>
            <hr />
            <h3> 설명 </h3>
            <li>
              웹 기반 서비스로 익명의 동네 사람들과 운동 파트너를 구할 수 있게
              도와주는 서비스입니다.
            </li>
            <li>
              Front 2명, Back 2명, Designer 1명으로 총 5명이 진행한 프로젝트로
              <br />
              설계부터 배포까지 분배하여 협업하였습니다.
            </li>
            <h3> 담당 업무 </h3>
            <li></li>
            <h3> 사용한 기술 스택 </h3>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Websocket, STOMP</li>
            <li>Axios</li>
          </ul>
          <h1>👨‍🎓 Education</h1>
          <hr />
          <ul>
            <li>
              <h3>계명대학교 컴퓨터공학 전공</h3>
            </li>
            <p>2015.03 ~ 2022.02 학점 : 4.03 / 4.5</p>
            <li>
              <h3>독학</h3>
            </li>
            <p>2022.02 ~ 현재 진행중</p>
          </ul>
        </dl>
      </Body>
    </>
  );
}

const Link__mySite = style.div`
  @media (max-width: 768px){
    display: none;
  }
`;

const Header_container = style.header`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Github__logo = style.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 100px;
  top: 35px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.7);
  border-radius: 100%;
`;

const Blog__logo = style.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 50px;
  top: 35px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.7);
`;

const Body = style.body`
  width: 100%;
  margin: 110px 0;
  display: flex;
  justify-content: center;
  text-align: left;
`;

export default App;
