import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useOrders(userId: string | undefined) {
  const { data, error, isLoading } = useSWR(
    `/api/orders/${userId ? `filtered/?id=${userId}` : ""}`,
    fetcher
  );

  return {
    orders: data,
    isLoading,
    isError: error,
  };
}
