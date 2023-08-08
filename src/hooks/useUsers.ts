import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useUser(userEmail: string | undefined) {
  const { data, error, isLoading } = useSWR(
    `/api/users/?email=${userEmail}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
