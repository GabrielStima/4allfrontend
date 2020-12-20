import React from "react";
import { Styled } from "./styles";
import { menu } from "../../assets/json/menu";
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSubContainer gridColumn={1}>
        <Styled.HeaderLogo />
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={2} justifyContent="center">
        <Styled.HeaderMenu>
          {menu.map((item) => (
            <Styled.HeaderMenuItem>{item.title}</Styled.HeaderMenuItem>
          ))}
        </Styled.HeaderMenu>
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={3} justifyContent="center">
        <Styled.HeaderIcons>
          <Styled.HeaderIcon>
            <FiSearch size="1.2em"/>
          </Styled.HeaderIcon>
          <Styled.HeaderIcon>
            <FiUser size="1.2em"/>
          </Styled.HeaderIcon>
          <Styled.HeaderIcon>
            <FiShoppingBag size="1.2em"/>
          </Styled.HeaderIcon>
        </Styled.HeaderIcons>
      </Styled.HeaderSubContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
