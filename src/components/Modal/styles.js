import styled from "styled-components";

export const Styled = {
  ModalContainer: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  `,
  Modal: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;
    width: 30%;
    @media (max-width: 1024px) {
      width: 50%;
    }
  `,
  ModalClose: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  ModalCloseIcon: styled.div`
    cursor: pointer;
  `,
  ModalTitle: styled.h2`
    text-align: center;
  `,
  ModalDescription: styled.p`
    font-size: 1.2rem;
  `,
  ModalButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  `,
  ModalButton: styled.div`
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 1px 2px 5px #989898;
    padding: 1rem;
    width: 40%;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    background-color: ${(props) => props.buttonColor};
    align-items: center;
    justify-content: center;
    display: flex;
    &:hover {
      background-color: #989898;
    }
  `,
};
