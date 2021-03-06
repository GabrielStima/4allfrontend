import React from "react";
import { Styled } from "./styles";
import { menu } from "../../assets/json/menu";
import { useSelector } from 'react-redux';
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
function Header() {
  const totalProducts = useSelector((state) => state.bag.totalProducts);

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSubContainer gridColumn={1}>
        <Link to="/">
          <Styled.HeaderLogo />
        </Link>
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={2} justifyContent="center">
        <Styled.HeaderMenu>
          {menu.map((item, index) => (
            <Link to={item.url} key={index}>
              <Styled.HeaderMenuItem>{item.title}</Styled.HeaderMenuItem>
            </Link>
          ))}
        </Styled.HeaderMenu>
      </Styled.HeaderSubContainer>
      <Styled.HeaderSubContainer gridColumn={3} justifyContent="center">
        <Styled.HeaderIcons>
          <Styled.HeaderIcon>
            <FiSearch size="1.2em"/>
          </Styled.HeaderIcon>
          <Link to="/bag">
            <Styled.HeaderIcon>
            <FiShoppingBag size="1.2em"/>
            {
              totalProducts !== 0 &&
                <Styled.HeaderBadge>
                  {totalProducts}
                </Styled.HeaderBadge>
            }
            </Styled.HeaderIcon>
          </Link>
          <Styled.HeaderIcon divider>
            <FiUser size="1.2em"/>
          </Styled.HeaderIcon>
        </Styled.HeaderIcons>
      </Styled.HeaderSubContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
