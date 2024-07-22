import { useQuery } from "react-query";
import { fetchProviderDetails } from "../../axios"; // Adjust import based on your actual API file
import { Provider } from "../../types"; // Import the Provider type

export const useFetchProviderDetails = (providerId: string) => {
  return useQuery<Provider, Error>(
    ["provider", providerId],
    () => fetchProviderDetails(providerId),
    {
      enabled: !!providerId, // Only run the query if providerId is defined
    }
  );
};
