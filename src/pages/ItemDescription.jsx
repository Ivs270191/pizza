import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const ItemDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.pizzaSlice);

  console.log(id, items);
  const getPizzas = async () => {
    dispatch(fetchPizzas(`items/${id}`));
  };
  useEffect(() => {
    getPizzas();
  }, []);
  return (
    <>
      <div className="pizza-block">
        <img className="pizza-block__image" src={items.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{items.title}</h4>
        <div className="pizza-block__selector"></div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{items.price} грн</div>
        </div>
      </div>
    </>
  );
};

export default ItemDescription;
