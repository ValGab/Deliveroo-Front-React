import Section from "./Section";

const Content = ({ categories, cart, setCart }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Section
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
