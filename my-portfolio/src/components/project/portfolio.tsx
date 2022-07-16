export const Portfolio = () => {
  return (
    <ul>
      <h2> 설명 </h2>
      <li>
        Notion으로 많이 작성하는 이력서를 Typescript와 Github Actions를 통해
        gh-pages로 CI/CD를 구축해보기 위해 제작하였습니다.
      </li>
      <li> Main Tech : React, Typescript, Github Actions</li>
      <li>개인 프로젝트 입니다.</li>
      <h3> 배운 점 </h3>
      <li>
        Typescript의 장점인 정적 타입 덕분에 이전 TogetherSports 에서 겪었던
        오류를 컴파일 단계에서 캐치할 수 있다는 장점을 알게되었습니다.
      </li>
      <li>
        {" "}
        actions 의 worflows 기본 작동 원리와 작성 방법에 대해 알게되었습니다.{" "}
      </li>
      <li>
        {" "}
        Custom Hook을 만들어 응집도와 추상화 단계를 고려하여 작업하는 방법을
        알게되었습니다.
      </li>
    </ul>
  );
};
