import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

export const Styled = {
    HeaderContainer: styled.div`
        width: 100vw;
        height: 60px;
        background-color: #173957;
        display: grid;
        grid-template-columns: 7% 84% 7%;
    `,
    HeaderSubContainer: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start' };
        grid-column: ${props => props.gridColumn };
    `,
    HeaderLogo: styled.div`
        justify-self: start;
        margin: 0 15px;
        width: 90px;
        height: 40px;
        background-image:url(${logo});
        background-repeat: no-repeat;
        background-size: contain;
    `,
    HeaderMenu: styled.ul`
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        aling-items: center;
    `,
    HeaderMenuItem: styled.li`
        margin: 0 20px;
        cursor: pointer;
        color: #FFFFFF;
        &:hover{
            text-decoration: underline;
        }
    `,
    HeaderIcons: styled.div`
        display: flex;
    `,
    HeaderIcon: styled.div`
        color: #FFFFFF;
        margin: auto 15px;
        cursor: pointer;
    `,
}