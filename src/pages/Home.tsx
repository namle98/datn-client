import React from "react";
import Jumbotron from "../components/cards/jumbotron";
import NewArrivals from "../components/home/newArrivals";
import BestSellers from "../components/home/bestSellers";
import CategoryList from "../components/category/categoryList";
import SubCategoryList from "../components/subCategory/subCategoryList";
import Banner from "../components/banner/banner";
import "./styles.scss";

function Home() {
  return (
    <div className="home-page-user">
      <div className="container">
        <div className="jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron
            text={["Latest Products", "New Arrivals", "Best Sellers"]}
          />
        </div>

        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          New Arrivals
        </h4>
        <NewArrivals />

        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Best Sellers
        </h4>
        <BestSellers />
        <Banner />

        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Categories
        </h4>
        <CategoryList />

        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Sub Categories
        </h4>
        <SubCategoryList />

        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
