import { Navigate } from "react-router";
import { cocktails } from "../../models";

const RedirectToCocktail = () => {
  return <Navigate to={`/${cocktails[0].code}`} />;
};

export default RedirectToCocktail;
