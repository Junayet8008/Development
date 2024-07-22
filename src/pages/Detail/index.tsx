import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProviderDetails } from "./hooks"; // Adjust the path as necessary
import DetailCard from "../../components/Card/detailCard";
import { Box } from "@mui/material";
import Loader from "../../components/Loader";
import ErrorPage from "../../components/ErrorPage";

const ProviderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: provider, isLoading, error } = useFetchProviderDetails(id!);
  // Ensure id is non-null with `!`

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (!provider) return null;

  const {
    photoUrl,
    wholeName,
    starRatingAverage,
    starRatingCount,
    specialties,
    insurances,
    locations,
  } = provider;

  const [location] = locations;
  const {
    address: { line1 = "", city = "", state = "", zip = "" } = {},
    distance,
    phone,
  } = location || {};

  return (
    <Box mt={15} sx={{ display: "flex", justifyContent: "center" }}>
      <DetailCard
        photoUrl={photoUrl}
        starRatingAverage={starRatingAverage}
        starRatingCount={starRatingCount}
        insurances={insurances}
        specialties={specialties}
        wholeName={wholeName}
        line1={line1}
        city={city}
        state={state}
        zip={zip}
        distance={distance}
        phone={phone}
      />
    </Box>
  );
};

export default ProviderDetails;
