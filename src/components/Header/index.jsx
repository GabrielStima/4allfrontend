import React from "react";
import { Styled } from "./styles";
import { menu } from "../../assets/json/menu";
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import {Link} from "react-router-dom";
function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSubContainer gridColumn={1}>
        <Styled.HeaderLogo />
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={2} justifyContent="center">
        <Styled.HeaderMenu>
          {menu.map((item, index) => (
            <Link to={item.url}>
              <Styled.HeaderMenuItem key={index}>{item.title}</Styled.HeaderMenuItem>
            </Link>
          ))}
        </Styled.HeaderMenu>
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={3} justifyContent="center">
        <Styled.HeaderIcons>
          <Styled.HeaderIcon>
            <FiSearch size="1.2em"/>
          </Styled.HeaderIcon>
          <Styled.HeaderIcon>
            <FiShoppingBag size="1.2em"/>
          </Styled.HeaderIcon>
          <Styled.HeaderIcon divider>
            <FiUser size="1.2em"/>
          </Styled.HeaderIcon>
        </Styled.HeaderIcons>
      </Styled.HeaderSubContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
