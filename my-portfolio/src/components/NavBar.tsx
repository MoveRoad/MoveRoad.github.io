import style from "styled-components";

const NavBar = () => {
  return (
    <Header_container>
      <h1>이 동길 Donggil Lee</h1>
      <LinkWrapper>
        <a href="https://github.com/MoveRoad">
          <Github__logo src="/github-logo.png" alt="github_link"></Github__logo>
        </a>
        <a href="https://moveroad.tistory.com">
          <Blog__logo src="/blog-logo.png" alt="tistory_link"></Blog__logo>
        </a>
      </LinkWrapper>
    </Header_container>
  );
};

const LinkWrapper = style.div`
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

export default NavBar;
