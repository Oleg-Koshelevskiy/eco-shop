"use client";

import { Mark } from "@/types";
import Rating from "./Rating";
import { useSession } from "next-auth/react";
import PersonalRating from "./PersonalRating";

const RatingBlock = ({ rating, productId }: Mark) => {
  const { data: session, status } = useSession();
  return (
    <div>
      <div className="flex flex-col">
        <div>Average:</div>
        <Rating rating={rating} />
      </div>
      {status === "authenticated" && (
        <div className="flex flex-col">
          <div>Personal:</div>
          <PersonalRating
            userEmail={session.user.email}
            productId={productId}
          />
        </div>
      )}
    </div>
  );
};

export default RatingBlock;
