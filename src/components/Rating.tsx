import { Mark } from "@/types";
import RatingStar from "./RatingStar";

let color: string;

const Rating = ({ rating }: Mark) => {
  if (rating === 1) {
    color = "#f87171";
    return (
      <div className="flex">
        <RatingStar color={color} />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
    );
  }
  if (rating === 2) {
    color = "#fb923c";
    return (
      <div className="flex">
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
    );
  }
  if (rating === 3) {
    color = "#facc15";
    return (
      <div className="flex">
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar />
        <RatingStar />
      </div>
    );
  }
  if (rating === 4) {
    color = "#a3e635";
    return (
      <div className="flex">
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar />
      </div>
    );
  }
  if (rating === 5) {
    color = "#4ade80";
    return (
      <div className="flex">
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
        <RatingStar color={color} />
      </div>
    );
  }
  return (
    <div className="flex">
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
    </div>
  );
};

export default Rating;
