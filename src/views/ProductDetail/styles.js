import styled from 'styled-components';

export const Styled = {
    ProductDetailContainer: styled.div`
        box-sizing: border-box;
        width: 100vw;
        padding: 30px;
    `,
    ProductDetailGrid: styled.div`
        min-height: 120vh;
        display: grid;
        grid-template-rows: 60% 40%;
        grid-template-columns: 30% 70%;
    `,
    ProductDetailImage: styled.div`
        background-image: url(${props => props.image});
        background-repeat: no-repeat;
        background-size: contain;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    `,
    ProductDetailRelatedItems: styled.div`
        margin: 2rem 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    `,
    ProductDetailInfo: styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 3rem;
    `,
    ProductDetailDescription: styled.p`
        font-size: 1.3rem;
    `,
    ProductDetailSizes: styled.div`
        display: flex;
        justify-content: center;
        margin: 4rem 0;
    `,
    ProductDetailSizeItems: styled.p`
        font-size: 1.3rem;
        width: 30px;
        heigth: 30px;
        border-radius: 50%;
        box-shadow: 1px 2px 5px #989898;
        text-align: center;
        margin: 0 1rem;
        padding: 1rem;
        cursor: pointer;
        &:hover{
            color: #ffffff;
            background-color: #989898;
        }
    `,
    ProductDetailOldPrice: styled.p`
        color: #989898;
        text-decoration: line-through;
        font-size: 1.5rem;
        margin: 1rem 0;
    `,
    ProductDetailPrice: styled.p`
        font-size: 2rem;
        margin: 1rem 0;
        font-weight: 600;
    `,
    ProductDetailButtonContainer: styled.div`
        display: flex;
        justify-content: center;
        margin-top: 4rem;
        box-sizing: border-box;
    `,
    ProductDetailButton: styled.button`
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 1px 2px 5px #989898;
        padding: 1rem;
        width: 40%;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 1rem;
        &:hover{
            background-color: #173957;
            color: #ffffff;
        }
    `,
}