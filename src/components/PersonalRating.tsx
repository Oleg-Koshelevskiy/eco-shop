"use client";
import { useState, useEffect } from "react";
import RatingStar from "./RatingStar";

interface RateParams {
  userEmail: string;
  productId: string;
}

interface Rating {
  productId: string;
  rating: number;
}

let ratingList: [] | Rating[] = [];

const PersonalRating = ({ userEmail, productId }: RateParams) => {
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStars = async () => {
      const response = await fetch(`/api/users/?email=${userEmail}`);
      const data = await response.json();
      // console.log(data);
      ratingList = data[0]?.rating;
      const foundProduct = data[0]?.rating.filter(
        (item: Rating) => item.productId === productId
      );

      if (foundProduct.length === 0) setRate(0);
      else setRate(foundProduct[0].rating);
    };
    const getProduct = async () => {
      console.log(productId);
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      console.log(data);
    };
    getStars();
    getProduct();
  }, []);

  const stars = [1, 2, 3, 4, 5];

  const ratingHandler = async (mark: number) => {
    setLoading(true);
    const filteredRating = ratingList.filter(
      (item: Rating) => item.productId !== productId
    );
    console.log(filteredRating);
    try {
      await fetch(`/api/users/?email=${userEmail}`, {
        method: "PATCH",
        body: JSON.stringify({
          rating: [...filteredRating, { productId: productId, rating: mark }],
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
        disabled={loading ? true : false}
      >
        <RatingStar color={color} />
      </button>
    );
  });

  return (
    <div className="flex">
      <div className="flex">{starsList}</div>
      {loading && <div>Saving...</div>}
    </div>
  );
};

export default PersonalRating;
