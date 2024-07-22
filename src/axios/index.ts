import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_AMENITIES_BASE_URL;
const API_KEY = process.env.REACT_APP_AMENITIES_API_KEY;

export const fetchProviders = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/emr-api/non-patient/providers`,
    {
      headers: {
        "x-amenity-api-key": API_KEY!,
      },
      params: {
        latitude: 29,
        longitude: -95,
        maxRadius: 1000,
        pagingRowOffset: 0,
        topNumRows: 10,
      },
    }
  );

  return response.data.response.matches;
};

export const fetchProviderDetails = async (providerId: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/emr-api/non-patient/provider`,
    {
      headers: {
        "x-amenity-api-key": API_KEY!,
      },
      params: {
        providerId,
      },
    }
  );
  return response.data.response;
};
