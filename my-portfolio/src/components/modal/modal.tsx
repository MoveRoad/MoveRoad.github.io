import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export type props = {
  modalShow: boolean;
  title: string;
  project: string;
};

const Modal = ({ modalShow, title, project }: props) => {
  return (
    <>
      {modalShow
        ? ReactDOM.createPortal(
            <React.Fragment>
              <ModalBackground>
                <ModalContainer>
                  <h1>{title}</h1>
                  <hr />
                  {project}
                </ModalContainer>
              </ModalBackground>
            </React.Fragment>,
            document.body
          )
        : null}
    </>
  );
};

const ModalBackground = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  /* animation: modal-bg-show 0.3s; // 스르륵 효과 */
`;

export default Modal;
