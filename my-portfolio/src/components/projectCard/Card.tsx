import { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/modal";
import useModalHook from "../modal/useModalHook";

export interface props {
  projectName: string;
  cooperation: boolean;
  stacks: string[];
  startDate: string;
  endDate: string;
  project: () => JSX.Element;
  image: string;
  poster: string;
}

const Card = ({
  projectName,
  cooperation,
  stacks,
  startDate,
  endDate,
  project,
  image,
  poster,
}: props) => {
  const [title, setTitle] = useState<string>("");
  const { modalShow, toggleModal } = useModalHook();
  const handleModal = (title: string) => {
    setTitle(title);
    toggleModal();
  };

  return (
    <>
      <CardContainer
        onClick={() => {
          handleModal(projectName);
        }}
      >
        <Video src={image} autoPlay loop muted poster={poster}></Video>
        <Description>
          <Title>{projectName}</Title>
          <Cooperation>
            {cooperation ? "팀 프로젝트" : "개인 프로젝트"}
          </Cooperation>
          <Stacks>
            {stacks.map((stack, idx) => {
              return <Stack key={idx}>{stack}</Stack>;
            })}
          </Stacks>
          <Date>{`${startDate} ~ ${endDate}`}</Date>
        </Description>
      </CardContainer>
      <Modal
        modalShow={modalShow}
        title={title}
        project={project}
        toggle={toggleModal}
      ></Modal>
    </>
  );
};

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(55, 53, 47, 0.03);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 180px;
`;

const Description = styled.div`
  width: 100%;
  height: 120px;
  border-top: solid 0.5px #d8d8d8;
  padding: 2px 10px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Cooperation = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 1px 5px;
  background-color: #e3e2e0;
`;

const Stacks = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  margin: 2px 0;
`;

const Stack = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 1px 5px;
  background-color: #f5e0e9;
  margin-right: 5px;
`;

const Date = styled.p`
  font-size: 0.8rem;
`;

export default Card;
