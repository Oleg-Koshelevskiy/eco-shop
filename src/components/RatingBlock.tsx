"use client";

import { Mark } from "@/types";
import Rating from "./Rating";
import { useSession } from "next-auth/react";

const RatingBlock = ({ rating }: Mark) => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex flex-col">
        <div>Average:</div>
        <Rating rating={rating} />
      </div>
      {session?.user && (
        <div className="flex flex-col">
          <div>Personal:</div>
          <Rating rating={rating} />
        </div>
      )}
    </div>
  );
};

export default RatingBlock;
