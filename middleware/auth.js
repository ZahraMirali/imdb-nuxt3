export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  console.log("profile middleware");
  return auth.value.isAuthenticated;
});
