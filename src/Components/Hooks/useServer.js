import { useQuery } from "@tanstack/react-query";
import { getSingleBlog } from "./getApi";

const useServer = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    ["single_blog", id],
    () => getSingleBlog(id)
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useServer;
