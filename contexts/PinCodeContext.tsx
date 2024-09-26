import React, { createContext, useState } from "react";

const PinCodeContext = createContext<{
  pinCode: string | null;
  setPinCode: (pinCode: string | null) => void;
}>({
  pinCode: null,
  setPinCode: () => {},
});

const PinCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [pinCode, setPinCode] = useState<string | null>(null);

  return (
    <PinCodeContext.Provider value={{ pinCode, setPinCode }}>
      {children}
    </PinCodeContext.Provider>
  );
};

export { PinCodeProvider, PinCodeContext };
