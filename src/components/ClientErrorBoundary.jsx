"use client";

import { useState } from "react";
import ErrorDialog from "./ErrorDialog";

export default function ClientErrorBoundary({ children }) {
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error) => {
    setErrorMessage(error.message);
    setIsErrorOpen(true);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <ErrorDialog
        isOpen={isErrorOpen}
        setIsOpen={setIsErrorOpen}
        title="Error Loading Movies"
        message={errorMessage}
        onRetry={handleRetry}
      />
      {children}
    </>
  );
}