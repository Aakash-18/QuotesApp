import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const activeClassName = classes.active;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav></nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#88dfdf",
                  }
                : { color: "white" }
            }
            exact
            to="/quotes"
          >
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#88dfdf",
                  }
                : { color: "white" }
            }
            exact
            to="/new-quote"
          >
            newQuote
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
