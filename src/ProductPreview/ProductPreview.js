import React from "react";
import classes from "./ProductPreview.module.css";
const ProductPreview = (props) => {
  const curMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  const curHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.SelectedPreviewImage} alt="black watch" />
      {props.ShowHeartBeatSection ? (
        <div className={classes.HeartBeatSection}>
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${curHour}:${curMinute}`}</p>
        </div>
      )}
    </div>
  );
};
export default ProductPreview;
