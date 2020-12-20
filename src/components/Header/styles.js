import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

export const Styled = {
    HeaderContainer: styled.div`
        width: 100vw;
        height: 60px;
        background-color: #173957;
        display: grid;
        grid-template-columns: 7% 84% 9%;
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
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    HeaderMenuItem: styled.li`
        box-sizing: border-box;
        margin: 0 20px;
        cursor: pointer;
        padding: 10px;
        color: #FFFFFF;
        &:hover{
            color: #173957;
            background-color: #ffffff;
            border-radius: 5px;
        }
    `,
    HeaderIcons: styled.div`
        display: flex;
    `,
    HeaderIcon: styled.div`
        color: #FFFFFF;
        width: 2.2em;
        height: 2.2em;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 10%;
        margin: auto 10px;
        cursor: pointer;
        &:hover{
            color: #173957;
            background-color: #ffffff;
        }
    `,
}