import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Rating } from "@mui/material";

interface HomeCardProps {
  providerId: string;
  specialties: [string];
  wholeName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
  rating: number;
}

const HomeCard: React.FC<HomeCardProps> = ({
  wholeName,
  specialties,
  line1,
  city,
  state,
  zip,
  providerId,
  rating,
}) => {
  const navigate = useNavigate();
  const speciality = useMemo(() => {
    return specialties.join(" , ");
  }, [specialties]);

  function handleRedirect() {
    navigate(`/provider/${providerId}`);
  }

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "100%", // full width on extra-small screens
          sm: "80%", // 80% width on small screens
          md: "60%", // 60% width on medium screens
          lg: "50%", // 50% width on large screens
          xl: "70%", // 40% width on extra-large screens
        },
        maxWidth: "700px", // ensure it doesn't get too wide
        borderRadius: "8px",
        boxShadow: "3px 2px 8px grey",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "6px 4px 16px gray",
        },
        border: "3px solid sky",
        backgroundColor: "#42a5f5",
      }}
      onClick={() => handleRedirect()}
    >
      <Box mt={2}>
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "monospace",
            fontSize: {
              xs: "1.2rem", // smaller font on extra-small screens
              sm: "1.75rem", // slightly larger font on small screens
              md: "2rem", // default font size on medium screens and above
            },
          }}
          mb={2}
          variant="h3"
          color="white"
        >
          {wholeName}
        </Typography>
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: {
              xs: "1rem", // smaller font on extra-small screens
              sm: "1.25rem", // slightly larger font on small screens
              md: "1.5rem", // default font size on medium screens and above
            },
          }}
          variant="h5"
          color="white"
        >
          {speciality}
        </Typography>
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontFamily: "monospace",
            textOverflow: "ellipsis",
            padding: "8px 0",
            lineHeight: "1.5",
            fontSize: {
              xs: "0.875rem", // smaller font on extra-small screens
              sm: "1rem", // slightly larger font on small screens
              md: "1.125rem", // default font size on medium screens and above
            },
          }}
          variant="h6"
          color="white"
        >
          <span style={{ display: "block" }}>
            <span style={{ fontWeight: 500 }}>{line1}</span>,
            <span style={{ marginLeft: "16px" }}>{city}</span>
            <span style={{ marginLeft: "16px" }}>{state}</span>
            <span style={{ marginLeft: "16px" }}>{zip}</span>
          </span>
        </Typography>

        <Rating value={rating} />
      </Box>
    </Box>
  );
};

export default HomeCard;
