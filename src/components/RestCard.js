import {RESTLOGOURL} from "../utils/constants";

const RestCard = (props) =>{
    // const {resName,cuisine,stars,delivery} = props
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        areaName,
        cuisines,
        costForTwo,
        avgRating
    } = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            src={RESTLOGOURL+
            cloudinaryImageId} 
            alt="food card" 
            />
            <div className="description">
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}
export default RestCard;