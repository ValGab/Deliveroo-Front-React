import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);

  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal = subTotal + Number(cart[i].price * cart[i].quantity);
  }

  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity = totalQuantity + Number(cart[i].quantity);
  }

  return (
    <div className="cart-container">
      <div className="cart">
        {cart.length > 0 ? (
          <div className="cart-info">
            <span className="close" onClick={() => setShowMiniCart(false)}>
              X
            </span>
            <button
              className="validate"
              onClick={() => {
                alert(
                  `Merci pour votre commande de ${(subTotal + 2.5)
                    .toFixed(2)
                    .replace(".", ",")} € !`
                );
              }}
            >
              Valider mon panier
            </button>
            {cart.map((element, index) => {
              return (
                <div className="cart-item" key={index}>
                  <div className="quantity">
                    <button
                      onClick={() => {
                        if (element.quantity === 1) {
                          const copy = [...cart];
                          copy.splice(index, 1);
                          setCart(copy);
                        } else {
                          const copy = [...cart];
                          copy[index].quantity--;
                          setCart(copy);
                        }
                      }}
                    >
                      -
                    </button>
                    <p>{element.quantity}</p>
                    <button
                      onClick={() => {
                        const copy = [...cart];
                        copy[index].quantity++;
                        setCart(copy);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-line">
                    <p className="cart-title">{element.title}</p>
                    <p className="cart-price">
                      {(element.price * element.quantity)
                        .toFixed(2)
                        .replace(".", ",")}{" "}
                      €
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="cart-result">
              <div className="subtotal">
                <span>Sous-total</span>
                <span>{subTotal.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="service">
                <span>Frais de livraison</span>
                <span>2,50 €</span>
              </div>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{(subTotal + 2.5).toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>
        ) : (
          <div className="cart-info">
            <button className="validate disable">Valider mon panier</button>
            <p className="empty">Votre panier est vide</p>
          </div>
        )}

        {/* ----------------------------------------



CART - MOBILE



------------------------------------------------- */}
        {!showMiniCart ? (
          <p>
            {cart.length > 0 ? (
              <button
                className="showCart"
                onClick={() => {
                  setShowMiniCart(true);
                }}
              >
                <p>{totalQuantity}</p>
                <p>Voir mon panier</p>
                <p>{(subTotal + 2.5).toFixed(2).replace(".", ",")} €</p>
              </button>
            ) : (
              <div>
                <button className="validate-mini-disable">
                  Valider mon panier
                </button>
              </div>
            )}
          </p>
        ) : (
          <>
            {cart.length > 0 ? (
              <div className="mini-cart-info">
                <span className="close" onClick={() => setShowMiniCart(false)}>
                  X
                </span>
                {/* <button className="validate">Valider mon panier</button> */}
                {cart.map((element, index) => {
                  return (
                    <div className="cart-item" key={index}>
                      <div className="quantity">
                        <button
                          onClick={() => {
                            if (element.quantity === 1) {
                              const copy = [...cart];
                              copy.splice(index, 1);
                              setCart(copy);
                            } else {
                              const copy = [...cart];
                              copy[index].quantity--;
                              setCart(copy);
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{element.quantity}</p>
                        <button
                          onClick={() => {
                            const copy = [...cart];
                            copy[index].quantity++;
                            setCart(copy);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="cart-line">
                        <p className="cart-title">{element.title}</p>
                        <p className="cart-price">
                          {(element.price * element.quantity)
                            .toFixed(2)
                            .replace(".", ",")}{" "}
                          €
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="cart-result">
                  <div className="subtotal">
                    <span>Sous-total</span>
                    <span>{subTotal.toFixed(2).replace(".", ",")} €</span>
                  </div>
                  <div className="service">
                    <span>Frais de livraison</span>
                    <span>2,50 €</span>
                  </div>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>{(subTotal + 2.5).toFixed(2).replace(".", ",")} €</span>
                </div>
              </div>
            ) : (
              <div className="mini-cart-info">
                <button className="validate disable">Valider mon panier</button>
              </div>
            )}

            {cart.length > 0 ? (
              <button
                className="validate-mini"
                onClick={() => {
                  alert(
                    `Merci pour votre commande de ${(subTotal + 2.5)
                      .toFixed(2)
                      .replace(".", ",")} € !`
                  );
                }}
              >
                <p>Valider mon panier</p>
              </button>
            ) : (
              <div>
                <button className="validate-mini-disable">
                  Valider mon panier
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
