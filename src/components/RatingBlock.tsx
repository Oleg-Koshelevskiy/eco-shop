"use client";

import { Mark } from "@/types";
import Rating from "./Rating";
import { useSession } from "next-auth/react";
import PersonalRating from "./PersonalRating";
import { useEffect, useState } from "react";

// interface RateParams {
//   userEmail: string;
//   productId: string;
// }

interface Rating {
  productId: string;
  rating: number;
}

let ratingList: [] | Rating[] = [];

const RatingBlock = ({ productId }: Mark) => {
  const { data: session, status } = useSession();
  const [personalRate, setPersonalRate] = useState(0);
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (status === "authenticated") {
      const getStars = async () => {
        const response = await fetch(
          `/api/users/?email=${session?.user.email}`
        );
        const data = await response.json();

        ratingList = data[0]?.rating;
        const foundProduct = data[0]?.rating.filter(
          (item: Rating) => item.productId === productId
        );

        if (foundProduct?.length === 0) {
          setPersonalRate(0);
        } else setPersonalRate(foundProduct[0].rating);
      };
      getStars();
    }
    const getProduct = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      setRating(data.rating);
      setVotes(data.votes);
    };
    if (productId) getProduct();
    setLoading(false);
  }, [personalRate, status]);

  const ratingHandler = async (mark: number) => {
    setLoading(true);
    let ratingFields;
    const filteredRating = ratingList.filter(
      (item: Rating) => item.productId !== productId
    );

    if (votes === 0 && personalRate === 0) {
      ratingFields = {
        rating: mark,
        votes: 1,
      };
    } else if (votes !== 0 && personalRate === 0) {
      ratingFields = {
        rating: (votes * rating + mark) / (votes + 1),
        votes: votes + 1,
      };
    } else {
      ratingFields = {
        rating: (votes * rating - personalRate + mark) / votes,
        votes: votes,
      };
    }
    try {
      await fetch(`/api/users/?email=${session?.user.email}`, {
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
    setPersonalRate(mark);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>Average:</div>
        <Rating rating={rating} votes={votes} />
      </div>
      {status === "authenticated" && (
        <div className="flex flex-col">
          <div>Personal:</div>
          <PersonalRating
            personalRate={personalRate}
            loading={loading}
            ratingHandler={ratingHandler}
          />
        </div>
      )}
    </div>
  );
};

export default RatingBlock;
