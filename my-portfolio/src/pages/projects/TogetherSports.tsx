import style from "styled-components";

const TogetherSports = () => {
  return (
    <>
      <Body>
        <p> hey</p>
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

export default TogetherSports;
