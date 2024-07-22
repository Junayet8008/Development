// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProviderDetails from "./pages/Detail";
import Layout from "./components/Layout";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/provider/:id" element={<ProviderDetails />} />
          </Routes>
        </Layout>
      </Box>
    </BrowserRouter>
  );
};

export default App;
