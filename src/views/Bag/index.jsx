import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductInTheBag, finalizePurchase } from "../../redux";
import ModalComponent from "../../components/Modal";
import emptyCart from "../../assets/img/emptyCart.svg";
import { FiX } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Styled } from "./styles";

function Bag({ props }) {
  const products = useSelector((state) => state.bag.products);
  const amount = useSelector((state) => state.bag.amount);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  const totalDiscountAmount = useSelector(
    (state) => state.bag.totalDiscountAmount
  );

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <ModalComponent
        isOpen={open}
        toggleModal={toggleModal}
        title={"Compra finalizada com sucesso"}
        text={"Parabens pela compra"}
        withOption={[
          {
            buttonColor: "#173957",
            onClick: () => history.push("/"),
            text: "Continuar comprando",
          },
        ]}
      />
      {products.length === 0 ? (
        <Styled.BagContainer>
          <h1>Não encontramos nenhum item porque não voltamos as compras?</h1>
          <Styled.EmptyCartImage alt="Carrinho vazio" src={emptyCart} />
          <Styled.EmptyCartButtonContainer>
            <Styled.EmptyCartButton onClick={() => history.push("/")}>
              Voltar para home
            </Styled.EmptyCartButton>
          </Styled.EmptyCartButtonContainer>
        </Styled.BagContainer>
      ) : (
        <Styled.BagContainer>
          <Styled.BagContainerWithProducts>
            <h1>Sua sacola</h1>
            <hr />
            <Styled.BagGrid>
              <Styled.BagProductsContainer>
                {products.map((element, index) => (
                  <Styled.BagProducts key={index}>
                    <Styled.BagImageContainer>
                      <Styled.BagImage image={element.image} />
                    </Styled.BagImageContainer>
                    <Styled.BagInfoContainer>
                      <Styled.BagTitle>{element.title}</Styled.BagTitle>
                      {!!element.oldPrice && (
                        <Styled.BagOldPrice>
                          R$ {element.oldPrice}
                        </Styled.BagOldPrice>
                      )}
                      <Styled.BagPrice>R$ {element.price}</Styled.BagPrice>
                      <Styled.BagDescription>
                        {element.description}
                      </Styled.BagDescription>
                    </Styled.BagInfoContainer>
                    <Styled.BagOptionsContainer>
                      <Styled.BagRemoveItem
                        onClick={() =>
                          dispatch(
                            removeProductInTheBag({
                              product: element,
                              totalDiscountAmount,
                              amount,
                            })
                          )
                        }
                      >
                        <FiX />
                      </Styled.BagRemoveItem>
                    </Styled.BagOptionsContainer>
                  </Styled.BagProducts>
                ))}
              </Styled.BagProductsContainer>
              <Styled.BagResumeContainer>
                <Styled.BagResume>
                  <Styled.BagResumeTitle>
                    Resumo da Compra
                  </Styled.BagResumeTitle>
                  {products.map((element, index) => (
                    <Styled.BagResumeProduct key={index}>
                      R$ {element.price}
                    </Styled.BagResumeProduct>
                  ))}
                  <h5>Valor de desconto: R$ {totalDiscountAmount}</h5>
                  <hr />
                  <Styled.BagResumeTotalValue>
                    Total: <span>R$ {amount}</span>
                  </Styled.BagResumeTotalValue>
                </Styled.BagResume>
                <Styled.BagPurchaseButton
                  onClick={() => {
                    toggleModal();
                    dispatch(finalizePurchase());
                  }}
                >
                  Finalizar compra
                </Styled.BagPurchaseButton>
              </Styled.BagResumeContainer>
            </Styled.BagGrid>
          </Styled.BagContainerWithProducts>
        </Styled.BagContainer>
      )}
    </>
  );
}

export default Bag;
