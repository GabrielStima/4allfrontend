import styled from "styled-components";

export const Styled = {
    FooterContainer: styled.div`
        width: 100vw;
        height: 200px;
    `,
    FooterContainerInfo: styled.div`
        width: 80%;
        padding: 10px 10% 10px 10%;
        height: 80%;
        background-color: #173957;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        font-weight: 300;
    `,
    FooterContainerInfoItems: styled.div`
        width: 400px;
        height: 100%;
    `,
    FooterContainerCopy: styled.div`
        width: 100vw;
        height: 20%;
        display: flex;
        font-size: .8em;
        justify-content: center;
        background-color: #1F3344;
        align-items: center;
        color: #ffffff;
        font-weight: 300;
    `,
    FooterContainerInfoTitle: styled.p`
        font-size: 1.1em;
    `,
    FooterContainerInfoList: styled.ul`
        list-style: none;
        padding: 0;
    `,
    FooterContainerInfoListItem: styled.li`
        font-size: .9em;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    `,
}