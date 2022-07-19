import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ title, menus, cart, setCart }) => {
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
                menu.quantity = 1;
                newTab.push(menu);
                setCart(newTab);
              }}
            >
              <div className="menu-info">
                <h3>{menu.title}</h3>
                <p className="menu-description">{menu.description}</p>
                <div className="price-popular">
                  <p className="menu-price">{menu.price} €</p>
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

export default Section;
