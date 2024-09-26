import React from "react";
import { PinCodeProvider } from "./PinCodeContext";
import { OTPProvider } from "./OTPContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PinCodeProvider>
      <OTPProvider>{children}</OTPProvider>
    </PinCodeProvider>
  );
};

export default AppProvider;
