// Function that checks if the current user has access to the page.
export const hasAccess = (currentRole, roles = []) =>
  roles.some((role) => role.slug === currentRole.slug);

// Function that checks if the current user has permission to access a certain component.
export const hasPermission = (userResources = [], action, resource) => {
  const foundResource = userResources.find(
    (userResource) => userResource.slug === resource
  );
  if (foundResource) return foundResource.roles[0][action];
  return false;
};

export const canRenderItem = (userResources = [], resource) =>
  !resource ||
  userResources.some((userResource) => userResource.slug === resource);
