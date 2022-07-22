import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = ({ title, menus, cart, setCart }) => {
  const reducingString = (string) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      if (result.length < 55) {
        result = result + string[i];
      } else {
        if (string[i] === " ") {
          return result;
        } else {
          result = result + string[i];
        }
      }
    }
    return result;
  };
  return (
    <section>
      <h2>{title}</h2>
      <div className="menus">
        {menus.map((menu) => {
          return (
            <div
              className="menu-item"
              key={menu.id}
              onClick={() => {
                const newTab = [...cart];
                // Si le panier a un élément, je regarde si le plat est déjà présent sinon je l'ajoute avec quantité 1
                if (newTab.length > 0) {
                  let isPresent = false;
                  for (let i = 0; i < newTab.length; i++) {
                    if (menu.id === newTab[i].id) {
                      isPresent = true;
                    }
                  }
                  if (!isPresent) {
                    menu.quantity = 1;
                    newTab.push(menu);
                    setCart(newTab);
                  } else {
                    menu.quantity++;
                    setCart(newTab);
                  }
                } else {
                  menu.quantity = 1;
                  newTab.push(menu);
                  setCart(newTab);
                }
              }}
            >
              <div className="menu-info">
                <h3>{menu.title}</h3>
                <p className="menu-description">
                  {reducingString(menu.description)}
                </p>
                <div className="price-popular">
                  <p className="menu-price">{menu.price.replace(".", ",")} €</p>
                  {menu.popular && (
                    <span>
                      <FontAwesomeIcon icon="star" />
                      Populaire
                    </span>
                  )}
                </div>
              </div>
              <div className="menu-item-img">
                {menu.picture && <img src={menu.picture} alt={menu.title} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
