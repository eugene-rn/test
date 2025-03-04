import { NavLink } from "react-router";
import { cocktails } from "../../models";
import styles from "./styles.module.css";

const CocktailsList = () => {
  return (
    <div className={styles.list}>
      {cocktails.map((el) => (
        <NavLink
          to={`/${el.code}`}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};

export default CocktailsList;
