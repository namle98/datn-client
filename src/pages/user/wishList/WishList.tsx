import UserNav from "../../../components/userNav/userNav";
import "./styles.scss";

function WishList() {
  return (
    <div className="wish-list-page">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <UserNav />
          </div>
          <div className="col">
            <div className="content">WishList</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;