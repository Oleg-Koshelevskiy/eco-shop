"use client";
import { useState } from "react";
import RatingStar from "./RatingStar";

const PersonalRating = () => {
  const [rate, setRate] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const ratingHandler = (mark: number) => {
    setRate(mark);
  };
  console.log(rate);

  const starsList = stars.map((star, i) => {
    let color: string = "";
    if (rate === 1 && i === 0) color = "#f87171";
    if (rate === 2 && i < 2) color = "#fb923c";
    if (rate === 3 && i < 3) color = "#facc15";
    if (rate === 4 && i < 4) color = "#a3e635";
    if (rate === 5 && i < 5) color = "#4ade80";

    return (
      <button
        className="hover:cursor-pointer hover:scale-110"
        key={i + 1}
        onClick={() => ratingHandler(i + 1)}
        // disabled
      >
        <RatingStar color={color} />
      </button>
    );
  });

  return <div className="flex">{starsList}</div>;
};

export default PersonalRating;
