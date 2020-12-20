import React from 'react';
import { Styled } from './styles';
import { FaRegCopyright } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
function Footer() {
  return (
      <Styled.FooterContainer>
        <Styled.FooterContainerInfo>
          <Styled.FooterContainerInfoItems>
            <img src={logo} alt="Logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dui vel orci condimentum pretium. Curabitur sodales hendrerit velit.</p>
          </Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoItems>
            <Styled.FooterContainerInfoTitle>Sobre a Fashion Store</Styled.FooterContainerInfoTitle>
            <Styled.FooterContainerInfoList>
              <Styled.FooterContainerInfoListItem>Pessoas</Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>Produtos</Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>Carreira</Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>Proteção da marca</Styled.FooterContainerInfoListItem>
            </Styled.FooterContainerInfoList>
          </Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoTitle>Loja</Styled.FooterContainerInfoTitle>
          <Styled.FooterContainerInfoList>
            <Styled.FooterContainerInfoListItem>Coleção Homens</Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>Coleção Mulheres</Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>Coleção Crianças</Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>Loja de Calçados</Styled.FooterContainerInfoListItem>
          </Styled.FooterContainerInfoList>
        </Styled.FooterContainerInfoItems>
        </Styled.FooterContainerInfo>
        <Styled.FooterContainerCopy>Copyright <FaRegCopyright size=".7em" style={{margin: '0 5px'}}/> 2020 - Todos os direitos reservados | Gabriel Stimamiglio</Styled.FooterContainerCopy>
      </Styled.FooterContainer>
    );
}

export default Footer;