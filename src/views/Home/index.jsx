import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSections } from "../../redux";

import { Styled } from "./styles";
import Carousel from "../../components/Carousel";
import Section from "../../components/Section";

function Home() {
  const sections = useSelector((state) => state.home.sections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  return (
    <Styled.HomeContainer>
      <Carousel />
      <Styled.HomeSections>
        {sections.map((element, index) => (
          <Section section={element} key={index} />
        ))}
      </Styled.HomeSections>
    </Styled.HomeContainer>
  );
}

export default Home;
