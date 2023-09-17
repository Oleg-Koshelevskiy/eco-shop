import RatingStar from "./RatingStar";

interface RateParams {
  personalRate: number;
  loading: boolean;
  ratingHandler: (mark: number) => void;
}

const PersonalRating = ({
  personalRate,
  loading,
  ratingHandler,
}: RateParams) => {
  const stars = [1, 2, 3, 4, 5];

  const starsList = stars.map((star, i) => {
    let color: string = "";
    if (personalRate === 1 && i === 0) color = "#f87171";
    if (personalRate === 2 && i < 2) color = "#fb923c";
    if (personalRate === 3 && i < 3) color = "#facc15";
    if (personalRate === 4 && i < 4) color = "#a3e635";
    if (personalRate === 5 && i < 5) color = "#4ade80";

    return (
      <button
        className="hover:cursor-pointer hover:scale-110"
        key={i + 1}
        onClick={() => ratingHandler(i + 1)}
        disabled={loading ? true : false}
      >
        <RatingStar color={color} />
      </button>
    );
  });

  return (
    <div className="flex">
      <div className="flex">{starsList}</div>
      {loading && <div>Processing...</div>}
    </div>
  );
};

export default PersonalRating;
