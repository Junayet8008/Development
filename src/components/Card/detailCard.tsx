import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Grid,
  Card,
  CardActionArea,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

interface DetailCardProps {
  photoUrl?: string;
  starRatingAverage: number;
  starRatingCount: number;
  insurances: [string];
  specialties: [string];
  wholeName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
  distance: number;
  phone: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  photoUrl,
  starRatingAverage,
  starRatingCount,
  insurances,
  specialties,
  wholeName,
  line1,
  city,
  state,
  zip,
  distance,
  phone,
}) => {
  const [imageError, setImageError] = useState(false);

  const speciality = useMemo(() => specialties.join(", "), [specialties]);
  const insuranceItem = useMemo(() => insurances.join(", "), [insurances]);
  const formattedRating = starRatingAverage.toFixed(1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        width: {
          xs: "90%", // Adjusted for smaller screens
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "90%",
        },
        maxWidth: "1400px",
        borderRadius: "8px",
        boxShadow: "3px 2px 8px grey",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "6px 4px 16px gray",
        },
        border: "3px solid sky",
        backgroundColor: "#4fc3f7",
        margin: "auto", // Center the card
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              {photoUrl && !imageError ? (
                <Box
                  component="img"
                  src={photoUrl}
                  alt={wholeName}
                  sx={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <Avatar
                  sx={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    fontSize: "5rem",
                  }}
                >
                  <PersonIcon />
                </Avatar>
              )}
            </CardActionArea>
          </Card>
          <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="customized-1"
              value={starRatingAverage}
              max={1}
              readOnly
              sx={{ fontSize: "3rem", color: "#ffb74d", marginRight: "5px" }}
            />
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
                color: "#388e3c",
              }}
              margin={2}
            >
              {formattedRating} ({starRatingCount} Reviews)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              mt: "7vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                whiteSpace: "pre-line",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2.4rem" },
                color: "white",
              }}
              mb={2}
            >
              {speciality}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                marginBottom: "8px",
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
                color: "white",
              }}
            >
              {line1}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                marginBottom: "8px",
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
                color: "white",
              }}
            >
              Distance: {distance} miles
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                marginBottom: "8px",
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
                color: "white",
              }}
            >
              {city}, {state} {zip}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "monospace",
                fontSize: { xs: "0.875rem", sm: "1.25rem", md: "1.5rem" },
                color: "white",
                marginTop: "24px",
              }}
            >
              {phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "monospace",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              color: "#388e3c",
            }}
            mb={2}
          >
            Insurance Accepted
          </Typography>
          <Typography
            sx={{
              whiteSpace: "pre-line",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.5rem" },
              color: "white",
            }}
          >
            {insuranceItem}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailCard;
