const Restaurant = ({ data }) => {
  return (
    <div className="restaurant-infos container">
      <div className="restaurant-text">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <img src={data.restaurant.picture} alt={data.restaurant.name} />
    </div>
  );
};

export default Restaurant;
