import { Platform } from "../types/interfaces";
import useFetchData from "./useFetchData";

function useFetchPlatforms() {
  const { data, errors, isLoading } = useFetchData<Platform>(
    "/platforms/lists/parents"
  );
  return { platforms: data, errors, isLoading };
}

export default useFetchPlatforms;
