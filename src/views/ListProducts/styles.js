import styled from 'styled-components';

export const Styled = {
    ListProductsContainer:styled.div`
        box-sizing: border-box;
        padding: 0 30px;
        width: 100vw;
        display: grid;
        grid-template-columns: 20% 80%;
        .listProductGridInfoContainer{
            box-sizing: border-box;
            padding: 0 30px;
        }
    `,
    ListProductGrid:styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        .container{
            justify-self: center;
        }
    `,
    ListProductFilter:styled.div`
       width: 100%;
       box-sizing: border-box;
       padding: 110px 30px;
    `,
    ListProductGridTitle:styled.h1`
        font-weight: 300; 
        margin-bottom: 10px;
    `,
    ListProductGridDivider: styled.hr`
        width: 100%;
        margin: 0;
    `,
    
};