import React from "react";
import { useFetchProviderLists } from "./hooks"; // Adjust the path as necessary
import HomeCard from "../../components/Card/homeCard";
import { Box } from "@mui/material";
import Loader from "../../components/Loader";
import ErrorPage from "../../components/ErrorPage";

const Home: React.FC = () => {
  const { data: providers, isLoading, error } = useFetchProviderLists();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      {providers?.map((provider) => {
        const {
          providerId,
          wholeName,
          specialties,
          locations,
          starRatingAverage,
        } = provider;
        const { address } = locations[0] || {};
        const { line1, city, state, zip } = address || {};

        return (
          <Box m={7}>
            <Box
              key={providerId}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <HomeCard
                key={providerId}
                specialties={specialties}
                line1={line1}
                city={city}
                state={state}
                zip={zip}
                providerId={providerId}
                wholeName={wholeName}
                rating={starRatingAverage}
              />
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default Home;
