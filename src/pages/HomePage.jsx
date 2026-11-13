import { Link } from "react-router-dom";
import PageNav from "../componets/PageNav";

function HomePage() {
  return (
    <div>
      Wordwise
      <PageNav />
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default HomePage;
