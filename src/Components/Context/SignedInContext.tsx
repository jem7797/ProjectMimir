import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SignedInContext {
  signedInUser: [string | null, string | null];
  setSignedInUser: Dispatch<SetStateAction<[string | null, string | null]>>;
}

const defaultUser: SignedInContext = {
    signedInUser: [null, null],
    setSignedInUser: () => {},
};

const SignedInContext = createContext<SignedInContext>(defaultUser);

export const useSignedIn = () => {
  const context = useContext(SignedInContext);

  if (!context) {
    throw new Error("error with sign in context");
  }
  return context;
};

export const SignedInProvider = ({ children }: { children: ReactNode }) => {
    const [signedInUser, setSignedInUser] = useState<[string | null, string | null]>([null, null]);

    return (
        <SignedInContext.Provider value={{signedInUser, setSignedInUser}}>
            {children}
        </SignedInContext.Provider>
    )
};

export default SignedInContext;
