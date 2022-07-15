import { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/modal";
import useModalHook from "./useModalHook";

const Card = () => {
  const { modalShow, toggleModal } = useModalHook();
  const [title, setTitle] = useState<string>("");

  const handleModal = (title: string) => {
    setTitle(title);
    toggleModal();
  };

  return (
    <>
      <Card__Container>
        <Video
          src="/together-sports-video.mp4"
          autoPlay
          loop
          muted
          poster="/MainBanner.png"
        ></Video>
        <Title>
          <button
            onClick={(e) => {
              handleModal("Together Sports");
            }}
          >
            Together Sports : 투스
          </button>
        </Title>
      </Card__Container>
      <Modal modalShow={modalShow} title={title} project={"test"}></Modal>
    </>
  );
};

const Card__Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  /* cursor: pointer; */
`;

const Video = styled.video`
  width: 100%;
  height: 250px;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  border-top: solid 0.5px #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Card;
