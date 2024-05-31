import { Link } from "react-router-dom";

function NewsLink({ to, state, children }) {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: "inherit" }}
      state={state}
    >
      {children}
    </Link>
  );
}

export default NewsLink;
