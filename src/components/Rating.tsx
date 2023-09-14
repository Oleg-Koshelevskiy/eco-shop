import { Rate } from "@/types";
import RatingStar from "./RatingStar";

const Rating = ({ rating, votes }: Rate) => {
  const stars = [1, 2, 3, 4, 5];
  const average = Math.round(rating);
  const starsList = stars.map((star, i) => {
    let color: string = "";
    if (average === 1 && i === 0) color = "#f87171";
    if (average === 2 && i < 2) color = "#fb923c";
    if (average === 3 && i < 3) color = "#facc15";
    if (average === 4 && i < 4) color = "#a3e635";
    if (average === 5 && i < 5) color = "#4ade80";

    return (
      <div key={star} className="hover:cursor-pointer hover:scale-110">
        <RatingStar color={color} />
      </div>
    );
  });

  return (
    <div className="flex gap-1">
      <div className="flex">{starsList}</div>
      {rating !== 0 && <div>{rating.toFixed(1)}</div>}
      {votes !== 0 && <div>Votes: {votes}</div>}
    </div>
  );
};

export default Rating;
