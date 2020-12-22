import React from "react";
import Modal from "@material-ui/core/Modal";
import { Styled } from './styles';
import { useHistory  } from "react-router-dom";
import { FiX } from 'react-icons/fi';

function ModalComponent({isOpen, toggleModal}) {
    let history = useHistory();

    const body = (
    <Styled.ModalContainer>
        <Styled.Modal>
            <Styled.ModalClose>
                <Styled.ModalCloseIcon onClick={toggleModal}>
                    <FiX/>
                </Styled.ModalCloseIcon>
            </Styled.ModalClose>
            <Styled.ModalTitle>Text in a modal</Styled.ModalTitle>
            <Styled.ModalDescription>Gostaria de ir para a sacola?</Styled.ModalDescription>
            <Styled.ModalButtonContainer>
                <Styled.ModalButton buttonColor="#173957" onClick={() => history.push("/")}>Continuar comprando</Styled.ModalButton>
                <Styled.ModalButton buttonColor="#505050" onClick={() => history.push("/bag")}>Ir para a sacola</Styled.ModalButton>
            </Styled.ModalButtonContainer>
        </Styled.Modal>
    </Styled.ModalContainer>
  );

  return (
    <Modal open={isOpen} onClose={toggleModal}>
    {body}
    </Modal>
  );
}

export default ModalComponent;
