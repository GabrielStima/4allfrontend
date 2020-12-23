import styled from 'styled-components';

export const Styled = {
    BagContainer:styled.div`
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    EmptyCartImage: styled.img`
        width: 40%;
        heigth: 40%;
        margin: 20px 0;
    `,
    EmptyCartButtonContainer: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
    `,
    EmptyCartButton: styled.div`
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
        text-align: center;
        font-weight: 300;
        background-color: ${props => props.buttonColor};
        &:hover{
            color: #ffffff;
            background-color:#989898;
        }
    `,
    BagContainerWithProducts:styled.div`
        width: 80%;
        margin-top: 3rem;
        h1{
            margin:.5rem 0;
        }
    `,
    BagGrid:styled.div`
        display: grid;
        grid-template-columns: 80% 20%;
    `,
    BagProductsContainer: styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
    `,
    BagProducts: styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 1rem;
        padding: 1rem 0;
        border-radius: 3px;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        border-top: 1px solid #989898;
        border-bottom:  1px solid #989898;
    `,
    BagImageContainer:styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
    `,
    BagImage:styled.div`
        background-image: url(${props => props.image});
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height: 100%;
        box-sizing: border-box;
    `,
    BagInfoContainer:styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        box-sizing: border-box;
        padding: 0 2rem
    `,
    BagTitle:styled.h3``,
    BagPrice:styled.h2``,
    BagOldPrice:styled.h3`
        color: #989898;
        text-decoration: line-through;
    `,
    BagDescription:styled.p``,
    BagOptionsContainer:styled.div`
        display: flex;
        justify-content: flex-end;
    `,
    BagRemoveItem:styled.span`
        cursor: pointer;
    `,
    BagResumeContainer:styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
    `,
    BagResume:styled.div`
        margin: 1rem;
        background-color: #c5c5c5;
        border-radius: 3px;
        padding: 1rem;
        box-shadow: 1px 2px 8px #989898;
    `,
    BagResumeTitle:styled.h3`
        text-align: center;
        margin: .5rem 0 2rem 0;
    `,
    BagResumeProduct:styled.p`
        text-align: end;
        margin-bottom: 1rem;
    `,
    BagResumeTotalValue: styled.h3`
        display: flex;
        justify-content: space-between;
    `,
};

