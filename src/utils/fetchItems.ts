"use client";

export const fetchItems = async (page: number, userId: string | null) => {
  console.log(userId, "test");
  const res = await fetch(
    `/api/orders/${userId ? `filtered/?id=${userId}` : ""}`,
    { cache: "no-store" }
  );
  const rawData = await res.json();
  const data = rawData.reverse();
  const orders = data.slice((page - 1) * 4, page * 4);

  return orders;
};
