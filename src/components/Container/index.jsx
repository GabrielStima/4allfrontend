import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Styled } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { timerCoutdown } from "../../services/timerService";
import { cancelPurchase } from "../../redux";
function Container(props) {
  const totalProducts = useSelector((state) => state.bag.totalProducts);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState();

  useEffect(() => {
    if (totalProducts === 0) {
      clearInterval(timer);
      window.localStorage.removeItem("timer");
    } else {
      setTimer(
        setInterval(() => {
          if (timerCoutdown(window.localStorage.getItem("timer"))) {
            dispatch(cancelPurchase());
          }
        }, 60000)
      );
    }
  }, [totalProducts]);

  return (
    <>
      <Header />
      <Styled.ContainerDefault>
        <props.component props={props} />
      </Styled.ContainerDefault>
      <Footer />
    </>
  );
}

export default Container;
