import Categories from "./Categories";

const Content = ({ categories, cart, setCart }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          // Si la catégorie a des plats, je l'affiche dans le return
          category.meals.length > 0 && (
            <Categories
              key={index}
              title={category.name}
              menus={category.meals}
              cart={cart}
              setCart={setCart}
            />
          )
        );
      })}
    </div>
  );
};

export default Content;
