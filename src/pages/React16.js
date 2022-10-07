import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ErroBoundarySection from "../components/ErrorBoundary/ErrorBoundarySection";
import PortalSection from "../components/Portal/PortalSection";

const React16 = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ErrorBoundary>
        <ErroBoundarySection />
      </ErrorBoundary>

      <PortalSection />
    </div>
  );
};

export default React16;
