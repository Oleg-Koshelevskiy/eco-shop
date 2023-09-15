"use client";
import { useState, useEffect } from "react";
import RatingStar from "./RatingStar";

interface RateParams {
  userEmail: string;
  productId: string;
  rating: number;
  votes: number;
}

interface Rating {
  productId: string;
  rating: number;
}

let ratingList: [] | Rating[] = [];

const PersonalRating = ({
  userEmail,
  productId,
  rating,
  votes,
}: RateParams) => {
  const [personalRate, setPersonalRate] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStars = async () => {
      const response = await fetch(`/api/users/?email=${userEmail}`);
      const data = await response.json();

      ratingList = data[0]?.rating;
      const foundProduct = data[0]?.rating.filter(
        (item: Rating) => item.productId === productId
      );

      if (foundProduct.length === 0) setPersonalRate(0);
      else setPersonalRate(foundProduct[0].rating);
    };
    getStars();
    const getProduct = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      console.log(data);
    };
    if (productId) getProduct();
  }, []);

  const stars = [1, 2, 3, 4, 5];

  const ratingHandler = async (mark: number) => {
    let ratingFields;
    setLoading(true);
    const filteredRating = ratingList.filter(
      (item: Rating) => item.productId !== productId
    );
    console.log(personalRate);
    if (personalRate !== 0) {
      ratingFields = {
        rating: (votes * rating - personalRate + mark) / votes,
        votes: votes,
      };
    } else if (votes === 0) {
      ratingFields = {
        rating: mark,
        votes: 1,
      };
    } else {
      console.log(rating, mark, votes);
      ratingFields = {
        rating: (votes * rating + mark) / (votes + 1),
        votes: votes + 1,
      };
    }

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
    console.log(ratingFields);
    try {
      await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(ratingFields),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setPersonalRate(mark);
  };
  console.log(personalRate);

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
      {loading && <div>Saving...</div>}
    </div>
  );
};

export default PersonalRating;
