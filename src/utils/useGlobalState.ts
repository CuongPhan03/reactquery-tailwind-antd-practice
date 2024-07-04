import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';

function useGlobalState<T>(key: QueryKey, initial?: T) : [T , (value: T)=> void] {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: key,
    queryFn: () => initial,
  });
  return [
    // state
    data as T,
    // setState
    (value: T) => {queryClient.setQueryData(key, value)}
  ];
};

export default useGlobalState;
