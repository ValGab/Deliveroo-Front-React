const Section = ({ title, data }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="menus">
        {data.map((element, index) => {
          return (
            <div className="menu-item" key={index}>
              <div className="menu-info">
                <h3>{element.title}</h3>
                <p className="menu-description">{element.description}</p>
                <p className="price">{element.price}</p>
              </div>
              <div className="menu-item-img">
                {element.picture && (
                  <img src={element.picture} alt={element.title} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
