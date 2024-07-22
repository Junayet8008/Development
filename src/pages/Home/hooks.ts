import { useQuery } from "react-query";
import { fetchProviders } from "../../axios"; // Adjust import based on your actual API file
import { Provider } from "../../types"; // Import the Provider type

export const useFetchProviderLists = () => {
  return useQuery<Provider[], Error>(["providers"], fetchProviders);
};
