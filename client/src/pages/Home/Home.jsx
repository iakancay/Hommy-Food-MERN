import React from "react";
import ChefsSlider from "../../components/chefsSlider/ChefsSlider";
import Banner from "../../components/Banner";
import SearchField from "../../components/SearchField";
import CuisineListButtons from "../../components/CuisineListButtons/index";
import CategoryListCards from "../../components/CategoryListCards/index";
import "./style.css";

const Home = () => {
  return (
    <div className="home-main-container">
      <Banner />
      <div className="home-search-container">
        <SearchField />
      </div>
      <CuisineListButtons />
      <CategoryListCards />
      <ChefsSlider />
    </div>
  );
};

export default Home;
