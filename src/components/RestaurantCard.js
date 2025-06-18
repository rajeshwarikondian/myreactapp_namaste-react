import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //{resName,cuisine}
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
  const { deliveryTime } = sla;

  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
