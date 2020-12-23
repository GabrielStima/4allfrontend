import styled from "styled-components";
import logo from "../../assets/img/logo.png";

export const Styled = {
  HeaderContainer: styled.div`
    width: 100vw;
    box-sizing: border-box;
    height: 60px;
    background-color: #173957;
    display: grid;
    grid-template-columns: 7% 84% 9%;
    padding-right: 2%;
    @media (max-width: 768px) {
      padding-right: 4%;
    }
  `,
  HeaderSubContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "flex-start"};
    grid-column: ${(props) => props.gridColumn};
  `,
  HeaderLogo: styled.div`
    justify-self: start;
    margin: 0 15px;
    width: 90px;
    height: 40px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
  `,
  HeaderMenu: styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
    }
  `,
  HeaderMenuItem: styled.li`
    box-sizing: border-box;
    margin: 0 2.5px;
    cursor: pointer;
    padding: 10px;
    color: #ffffff;
    &:hover {
      color: #173957;
      background-color: #ffffff;
      border-radius: 5px;
    }
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  `,
  HeaderIcons: styled.div`
    display: flex;
  `,
  HeaderIcon: styled.div`
    color: #ffffff;
    width: 2.2em;
    height: 2.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 2%;
    cursor: pointer;
    &:hover {
      border-radius: 10%;
      color: #173957;
      background-color: #ffffff;
    }
    a {
      color: #ffffff;
      text-decoration: none;
    }
  `,
  HeaderBadge: styled.span`
    box-sizing: border-box;
    padding: 0.1rem;
    width: 16px;
    font-size: 0.6rem;
    background-color: #ffffff;
    color: #000000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 62px;
  `,
};
