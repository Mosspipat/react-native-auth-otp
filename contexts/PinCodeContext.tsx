import React, { createContext, useState } from "react";

const PinCodeContext = createContext<{
  pinCode: string | null;
  setPinCode: (pinCode: string | null) => void;
  isSuccessPinCode: boolean | undefined;
  setIsSuccessPinCode: (isSuccessPinCode: boolean) => void;
}>({
  pinCode: null,
  setPinCode: () => {},
  isSuccessPinCode: false,
  setIsSuccessPinCode: () => {},
});

const PinCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [pinCode, setPinCode] = useState<string | null>(null);
  const [isSuccessPinCode, setIsSuccessPinCode] = useState<boolean>(false);

  return (
    <PinCodeContext.Provider
      value={{ pinCode, setPinCode, isSuccessPinCode, setIsSuccessPinCode }}
    >
      {children}
    </PinCodeContext.Provider>
  );
};

export { PinCodeProvider, PinCodeContext };
