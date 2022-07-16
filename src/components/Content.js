import Section from "./Section";

const Content = ({ categories }) => {
  return (
    <main className="container">
      {categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Section key={index} title={category.name} menus={category.meals} />
          )
        );
      })}
    </main>
  );
};

export default Content;
