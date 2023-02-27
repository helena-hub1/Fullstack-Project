import { useSelector } from "react-redux";
import React from "react";

import { RootState } from "../../../redux/store";
import WishItem from "../wishItem/WishItem";
import "./WishList.css";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  return (
    <div className="wish-container">
      {wishList.map((product, id) => (
        <WishItem product={product} key={id} />
      ))}
    </div>
  );
}
