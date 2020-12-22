import React from 'react';
import { Styled } from './styles';
import { FaRegCopyright } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
function Footer() {
  return (
      <Styled.FooterContainer>
        <Styled.FooterContainerInfo>
          <Styled.FooterContainerInfoItems>
            <div>
              <img src={logo} alt="Logo"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dui vel orci condimentum pretium. Curabitur sodales hendrerit velit.</p>
          </Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoItems>
            <Styled.FooterContainerInfoTitle>Sobre a Fashion Store</Styled.FooterContainerInfoTitle>
            <Styled.FooterContainerInfoList>
              <Styled.FooterContainerInfoListItem>
                <p>Pessoas</p>
              </Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>
                <p>Produtos</p>
              </Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>
                <p>Carreira</p>
              </Styled.FooterContainerInfoListItem>
              <Styled.FooterContainerInfoListItem>
                <p>Proteção da marca</p>
              </Styled.FooterContainerInfoListItem>
            </Styled.FooterContainerInfoList>
          </Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoItems>
          <Styled.FooterContainerInfoTitle>Loja</Styled.FooterContainerInfoTitle>
          <Styled.FooterContainerInfoList>
            <Styled.FooterContainerInfoListItem>
              <p>Coleção Homens</p>
            </Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>
              <p>Coleção Mulheres</p>
            </Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>
              <p>Coleção Crianças</p>
            </Styled.FooterContainerInfoListItem>
            <Styled.FooterContainerInfoListItem>
              <p>Loja de Calçados</p>
            </Styled.FooterContainerInfoListItem>
          </Styled.FooterContainerInfoList>
        </Styled.FooterContainerInfoItems>
        </Styled.FooterContainerInfo>
        <Styled.FooterContainerCopy>Copyright <FaRegCopyright size=".7em" style={{margin: '0 5px'}}/> 2020 - Todos os direitos reservados | Gabriel Stimamiglio</Styled.FooterContainerCopy>
      </Styled.FooterContainer>
    );
}

export default Footer;