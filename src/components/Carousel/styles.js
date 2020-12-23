import styled from "styled-components";

export const Styled = {
  CarouselContainer: styled.div``,
  CarouselItem: styled.div`
    width: 100vw;
    height: 400px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
  `,
};
