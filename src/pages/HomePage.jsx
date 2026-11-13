import { Link } from "react-router-dom";
import PageNav from "../componets/PageNav";

function HomePage() {
  return (
    <div>
      Wordwise
      <PageNav />
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default HomePage;
