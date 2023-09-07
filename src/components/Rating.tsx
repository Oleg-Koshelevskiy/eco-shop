import { Mark } from "@/types";
import RatingStar from "./RatingStar";

const Rating = ({ rating }: Mark) => {
  const stars = [1, 2, 3, 4, 5];

  const starsList = stars.map((star, i) => {
    let color: string = "";
    if (rating === 1 && i === 0) color = "#f87171";
    if (rating === 2 && i < 2) color = "#fb923c";
    if (rating === 3 && i < 3) color = "#facc15";
    if (rating === 4 && i < 4) color = "#a3e635";
    if (rating === 5 && i < 5) color = "#4ade80";

    return (
      <div className="hover:cursor-pointer hover:scale-110">
        <RatingStar color={color} />
      </div>
    );
  });

  return <div className="flex">{starsList}</div>;
};

export default Rating;
