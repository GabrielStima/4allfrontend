import React from "react";
import Modal from "@material-ui/core/Modal";
import { Styled } from './styles';
import { FiX } from 'react-icons/fi';

function ModalComponent({isOpen, toggleModal, title, text, withOption}) {
    const body = (
    <Styled.ModalContainer>
        <Styled.Modal>
            <Styled.ModalClose>
                <Styled.ModalCloseIcon onClick={toggleModal}>
                    <FiX/>
                </Styled.ModalCloseIcon>
            </Styled.ModalClose>
            <Styled.ModalTitle>{title}</Styled.ModalTitle>
            <Styled.ModalDescription>{text}</Styled.ModalDescription>
            <Styled.ModalButtonContainer>
                {
                    withOption.map((element, index) => (
                        <Styled.ModalButton key={index} buttonColor={element.buttonColor} onClick={element.onClick}>{element.text}</Styled.ModalButton>        
                    ))
                }
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
