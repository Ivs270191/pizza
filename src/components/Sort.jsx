import React, { useEffect, useRef, useState } from "react";
import { GrDescend, GrAscend } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setSelectedType } from "../redux/slices/filters";

const Sort = (props) => {
  const [visible, setVisible] = useState(false);
  const list = [
    { name: "популярности", prop: "rating" },
    { name: "цене", prop: "price" },
    { name: "алфавиту", prop: "title" },
  ];
  const [selected, setSelected] = useState(0);
  const sortRef = useRef();

  const dispatch = useDispatch();
  const onSelected = (obj, i) => {
    setSelected(i);
    setVisible(!visible);
    dispatch(setSelectedType(obj.prop));
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!sortRef.current.contains(e.target)) {
        setVisible(false);
        console.log ('ouside')
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []); //функционал для скрытия поп-ап при клике вне дива

  return (
    <>
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          {props.ascDesc ? (
            <GrDescend
              className="sort__adc"
              onClick={() => props.setAscDesc(!props.ascDesc)}
            />
          ) : (
            <GrAscend
              className="sort__adc"
              onClick={() => props.setAscDesc(!props.ascDesc)}
            />
          )}
          <b>Сортировка по:</b>
          <span onClick={() => setVisible(!visible)}>
            {list[selected].name}
          </span>
        </div>
        {visible && (
          <div className="sort__popup">
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onSelected(obj, i)}
                  className={selected === i ? "active" : ""}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sort;
