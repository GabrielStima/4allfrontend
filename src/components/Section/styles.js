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
    `
}