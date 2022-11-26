import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/Homepage";
import JobApplicationSentPage from "./pages/JobApplicationSentPage";
import JobListContextProvider from "./context/JobListContextProvider";
import CreateJobApplicationPage from "./pages/CreateJobApplicationPage";
import Header from "./components/Header/Header";
import DetailJobApplicationPage from "./pages/DetailJobApplicationPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <GlobalStyles styles={{ body: { paddingTop: "56px" } }} />
      <JobListContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lamaran-terkirim" element={<JobApplicationSentPage />} />
          <Route
            path="/buat-lowongan-pekerjaan"
            element={<CreateJobApplicationPage />}
          />
          <Route
            path="/lowongan/detail/:id"
            element={<DetailJobApplicationPage />}
          />
        </Routes>
      </JobListContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
