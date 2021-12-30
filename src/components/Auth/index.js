import { useEffect } from "react";
import { useAppSelector } from "lib/app/hooks";
import { useRouter } from "next/router";

export const Auth = ({ children }) => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { loggedIn } = auth;

  useEffect(() => {
    if (!loggedIn)
      router.replace({
        pathname: "/ingresar",
        query: { returnUrl: router.asPath },
      });
  }, [loggedIn]);

  if (!loggedIn) return null;
  return children;
};
