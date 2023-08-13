import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useOrders(userEmail: string | undefined) {
  const { data, error, isLoading } = useSWR(
    `/api/orders/?email=${userEmail}`,
    fetcher
  );

  return {
    orders: data,
    isLoading,
    isError: error,
  };
}
