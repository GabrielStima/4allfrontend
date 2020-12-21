import styled from 'styled-components';

export const Styled = {
    ProductDetailContainer: styled.div`
        box-sizing: border-box;
        width: 100vw;
        padding: 30px;
    `,
    ProductDetailGrid: styled.div`
        background-color: red;
        min-height: 80vh;
        display: grid;
        grid-template-rows: 60% 40%;
        grid-template-columns: 30% 70%;
    `,
    ProductDetailImage: styled.div`
        background-color: black;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    `,
    ProductDetailRelatedItems: styled.div`
        background-color: Yellow;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    `,
    ProductDetailInfo: styled.div`
        background-color: Blue;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    `,
}