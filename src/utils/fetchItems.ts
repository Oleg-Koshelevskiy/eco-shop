"use client";

export const fetchItems = async (page: number, userId: string | null) => {
  const res = await fetch(
    `/api/orders/${userId ? `filtered/?id=${userId}` : ""}`
  );
  const data = await res.json();
  const orders = data.slice((page - 1) * 2, page * 2);

  return orders;
};
