import styled from 'styled-components';

export const Styled = {
    Section: styled.div`
        width: 100vw;
    `,
    SectionTitle: styled.h1`
        font-weight: 300; 
        margin-bottom: 10px;
    `,
    SectionDivider: styled.hr`
        width: 97%;
        margin: 0;
    `,
    SectionItems:styled.div`
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 97%;
        box-sizing: border-box;
    `,
    SectionTitleContainer:styled.div`
        display: flex;
        justify-content: space-between;
        width: 97%;
    `,
    SectionGoSection: styled.div`
        margin: 0;
        font-size: 1em;
        display: flex;
        align-items: center;
        cursor: pointer;
    `
}