import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/home-page";
import MainLayout from "../layouts/main-layout";
import { CocktailsList, RedirectToCocktail } from "../entities/cocktail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout sidebar={<CocktailsList />} />}>
          <Route index element={<RedirectToCocktail />} />
          <Route path="/:cocktailCode" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
