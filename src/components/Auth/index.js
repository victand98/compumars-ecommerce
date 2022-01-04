import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { useRouter } from "next/router";
import { currentRole } from "lib/features/auth/authSlice";
import { hasAccess, hasPermission } from "lib/helpers/utils";

export const Auth = ({ children, roles }) => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { loggedIn, currentRole } = auth;

  useEffect(() => {
    if (!loggedIn)
      router.replace({
        pathname: "/ingresar",
        query: { returnUrl: router.asPath },
      });
    else if (!hasAccess(currentRole.role, roles)) {
      router.replace({
        pathname: "/no-permitido",
      });
    }
  }, [loggedIn, roles]);

  if (!loggedIn || !hasAccess(currentRole.role, roles)) return null;
  return children;
};

export const AuthorizationProvider = ({ children }) => {
  const auth = useAppSelector((state) => state.auth);
  const { loggedIn, loading } = auth;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(currentRole());
    }
  }, []);

  // TODO:Create a Full Screen Loading component
  if (loading) return null;
  return children;
};

export const WithPermissions = ({ children, action, resource }) => {
  const currentRole = useAppSelector((state) => state.auth.currentRole);

  if (hasPermission(currentRole.resources, action, resource)) return children;
  return null;
};
