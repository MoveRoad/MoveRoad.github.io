import { useState } from "react";

const useModalHook = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return {
    modalShow,
    toggleModal,
  };
};

export default useModalHook;
