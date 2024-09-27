import React, { createContext, useState } from "react";

const PinCodeContext = createContext<{
  pinCode: string | null;
  setPinCode: (pinCode: string | null) => void;
  isSuccessPinCode: boolean | undefined;
  setIsSuccessPinCode: (isSuccessPinCode: boolean) => void;
  isVerifiedPinCode: boolean | undefined;
  setIsVerifiedPinCode: (isVerifiedPinCode: boolean) => void;
}>({
  pinCode: null,
  setPinCode: () => {},
  isSuccessPinCode: false,
  setIsSuccessPinCode: () => {},
  isVerifiedPinCode: false,
  setIsVerifiedPinCode: () => {},
});

const PinCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [pinCode, setPinCode] = useState<string | null>(null);
  const [isSuccessPinCode, setIsSuccessPinCode] = useState<boolean>(false);
  const [isVerifiedPinCode, setIsVerifiedPinCode] = useState<boolean>(false);

  return (
    <PinCodeContext.Provider
      value={{
        pinCode,
        setPinCode,
        isSuccessPinCode,
        setIsSuccessPinCode,
        isVerifiedPinCode,
        setIsVerifiedPinCode,
      }}
    >
      {children}
    </PinCodeContext.Provider>
  );
};

export { PinCodeProvider, PinCodeContext };
