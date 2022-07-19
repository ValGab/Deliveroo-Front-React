const Cart = ({ cart, setCart }) => {
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal = subTotal + Number(cart[i].price * cart[i].quantity);
  }

  return (
    <div className="cart-container">
      <div className="cart">
        {cart.length > 0 ? (
          <div className="cart-info">
            <button className="validate">Valider mon panier</button>
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
                      {(element.price * element.quantity).toFixed(2)} €
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="cart-result">
              <div className="subtotal">
                <span>Sous-total</span>
                <span>{subTotal.toFixed(2)} €</span>
              </div>
              <div className="service">
                <span>Frais de livraison</span>
                <span>2.50 €</span>
              </div>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{(subTotal + 2.5).toFixed(2)} €</span>
            </div>
          </div>
        ) : (
          <p>Panier vide</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
