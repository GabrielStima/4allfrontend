import styled from 'styled-components';

export const Styled = {
    FilterContainer:styled.div`
        box-shadow: 3px 2px 8px #989898;
        width: 100%;
        height: 398px;
        border-radius: 8px;
        padding: 0 1rem;
        box-sizing: border-box;
    `,
    FilterTitleContainer:styled.div`
        display: flex;
        box-sizing: border-box;
        align-items: center;
        border-bottom: 1px solid #989898;
    `,
    FilterTitle:styled.h3`
        padding: 0 1rem;
        margin: 1rem 0 1rem 0;
    `,
    FilterInfoContainer:styled.div`
        box-sizing: border-box;
        padding: 20px 0;
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
    FilterSelectContainer:styled.div``,
    FilterButtonContainer:styled.div`
        display:flex;
        justify-content: flex-end;
    `,
    FilterSelect:styled.select`
        width: 100%;
        height: 35px;
        background-color: #919191;
        color: #ffffff;
        font-size: 14px;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 0 .4rem;
        option {
            color: black;
            background-color: #ffffff;
            display: flex;
            white-space: pre;
            padding: 12px;
            &:hover{
                background-color: #919191;
            }
            &:disabled{
                background-color: #a1a1a1;
                color: #4c4c4c;
            }
        }
    `,
    FilterButton:styled.button`
        outline: none;
        box-sizing: border-box;
        height: 40px;
        width: 100px;
        border-radius: 3px;
        border: none;
        box-sh8adow: 1px 2px 8px #989898;
        cursor: pointer;
        &:hover{
            color: white;
            background-color: #919191;          
        }    
    `,
};