import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PromotionalBanner from "../components/PromotionalBanner";
import ServiceCategories from "../components/ServiceCategories";
import FinancialProducts from "../components/FinancialProducts";
import BottomNavigation from "../components/BottomNavigation";

const HomeScreen = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white pb-20">
        <div className="flex-1 px-4 pt-4">
          <Header />
          <SearchBar />
          <PromotionalBanner />
          <ServiceCategories />
          <FinancialProducts />
        </div>
        <BottomNavigation activeTab="inicio" />
      </div>
    </>
  );
};

export default HomeScreen;
