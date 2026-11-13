import { Link } from "react-router-dom";
import PageNav from "../componets/PageNav";
import App from "../App";
import AppNav from "../componets/AppNav";
function HomePage() {
  return (
    <div>
      Wordwise
      <PageNav />
      <AppNav />
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default HomePage;
