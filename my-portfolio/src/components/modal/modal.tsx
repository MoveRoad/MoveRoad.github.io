import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

interface props {
  modalShow: boolean;
  title: string;
  project: () => JSX.Element;
  toggle: () => void;
}

const Modal = ({ modalShow, title, project, toggle }: props) => {
  const projectDescription = project();

  return (
    <>
      {modalShow
        ? ReactDOM.createPortal(
            <React.Fragment>
              <ModalBackground
                className="background"
                onClick={(e) => {
                  const target = e.target as HTMLDivElement;
                  if (target.className.includes("background")) toggle();
                }}
              >
                <ModalContainer>
                  <Title>{`${title}`}</Title>
                  <hr />
                  <Body>
                    <>{projectDescription}</>
                  </Body>
                </ModalContainer>
              </ModalBackground>
            </React.Fragment>,
            document.body
          )
        : null}
    </>
  );
};

const FadeIn = keyframes`
    from{
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  overflow: auto;
  animation: ${FadeIn} 0.3s; // 스르륵 효과

  &::-webkit-scrollbar {
    width: 17px;
    border: none;
  }

  &::-webkit-scrollbar-track {
    width: 9px;
    border-radius: 4px;
    background-color: #f5f5f5;
    background-clip: padding-box;
    border: 5px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 17px;
    border-radius: 4px;
    border: solid 1px #e5e5e5;
    background-color: lightslategray;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Body = styled.body`
  width: 100%;
  padding: 0 50px;
`;

export default Modal;
