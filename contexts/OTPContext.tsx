import React, { createContext, useState } from "react";

const OTPContext = createContext<{
  otp: Array<string> | null;
  setOtp: (otp: Array<string>) => void;
  isSuccessOTPCode: boolean | undefined;
  setIsSuccessOTPCode: (isSuccessOTPCode: boolean) => void;
}>({
  otp: ["", "", "", "", "", ""],
  setOtp: () => {},
  isSuccessOTPCode: false,
  setIsSuccessOTPCode: () => {},
});

export const OTPProvider = ({ children }: { children: React.ReactNode }) => {
  const [otp, setOtp] = useState<Array<string>>(["", "", "", "", "", ""]);
  const [isSuccessOTPCode, setIsSuccessOTPCode] = useState<boolean>(false);

  return (
    <OTPContext.Provider
      value={{ otp, setOtp, isSuccessOTPCode, setIsSuccessOTPCode }}
    >
      {children}
    </OTPContext.Provider>
  );
};

export default OTPContext;
