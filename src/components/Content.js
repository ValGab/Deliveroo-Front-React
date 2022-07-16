import Section from "./Section";

const Content = ({ data }) => {
  return (
    <main className="container">
      {data.map((element, index) => {
        return (
          <Section key={index} title={element.name} data={element.meals} />
        );
      })}
    </main>
  );
};

export default Content;
