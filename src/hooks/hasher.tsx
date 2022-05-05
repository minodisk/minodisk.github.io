import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ReadonlyDeep } from "type-fest";
import xxhash, { XXHashAPI } from "xxhash-wasm";

const HasherContext = createContext<
  ReadonlyDeep<{ hasher: XXHashAPI | undefined }>
>({
  hasher: undefined,
});

export const HasherContextProvider = (props: { children: ReactNode }) => {
  const [hasher, setHasher] = useState<XXHashAPI | undefined>();
  useEffect(() => {
    (async () => {
      setHasher(await xxhash());
    })();
  }, []);
  return <HasherContext.Provider value={{ hasher }} {...props} />;
};

export const useHasher = () => useContext(HasherContext);
