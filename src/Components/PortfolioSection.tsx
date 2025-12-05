import { createContext, useState } from "react";
import "../css/portfolio-section.css";
import { Images } from "../Images";
import { FilterLink } from "./FilterLink";
import { PortfolioFilterNav } from "./PortfolioFilterNav";
import type { TFilterContext, TFilterLink, TPortfolioCard } from "../types";
import { PortfolioCard } from "./PortfolioCard";

export const FilterContext = createContext({} as TFilterContext);

const portfolioCards: TPortfolioCard[] = [
  {
    img: Images.Image1,
    popupHeader: "Web Development",
    popupText: "Skate website",
    filter: "web",
  },
  {
    img: Images.Image2,
    popupHeader: "Web Development",
    popupText: "Eating Website",
    filter: "web",
  },
  {
    img: Images.Image3,
    popupHeader: "Web Development",
    popupText: "Food Website",
    filter: "web",
  },
  {
    img: Images.Image4,
    popupHeader: "App Development",
    popupText: "Game App",
    filter: "app",
  },
  {
    img: Images.Image5,
    popupHeader: "App Development",
    popupText: "Gambling App",
    filter: "app",
  },
  {
    img: Images.Image6,
    popupHeader: "App Development",
    popupText: "Money Website",
    filter: "ui",
  },
  {
    img: Images.Image7,
    popupHeader: "UI Design",
    popupText: "Fantastic Design",
    filter: "ui",
  },
  {
    img: Images.Image8,
    popupHeader: "Header",
    popupText: "Web Development",
    filter: "ui",
  },
];

export const PortfolioSection = () => {
  const [activeFilterLink, setActiveFilterLink] = useState<TFilterLink>("none");

  return (
    <section className="portfolio-section container">
      <h2>Portfolio</h2>
      <div className="search-container">
        <label htmlFor="search">
          <input type="text" placeholder="search" id="search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <PortfolioFilterNav>
          <FilterLink
            text={"All Work"}
            activeLinkName="all"
            activeFilterLink={activeFilterLink}
            onClick={() => {
              setActiveFilterLink("all");
            }}
          />
          <FilterLink
            text={"Web Development"}
            activeLinkName="web"
            activeFilterLink={activeFilterLink}
            onClick={() => {
              setActiveFilterLink("web");
            }}
          />
          <FilterLink
            text={"App Development"}
            activeLinkName="app"
            activeFilterLink={activeFilterLink}
            onClick={() => {
              setActiveFilterLink("app");
            }}
          />
          <FilterLink
            text={"Ui Design"}
            activeLinkName="ui"
            activeFilterLink={activeFilterLink}
            onClick={() => {
              setActiveFilterLink("ui");
            }}
          />
        </PortfolioFilterNav>
      </div>
      <div className="portfolio-grid">
        {portfolioCards.map((card) => (
          <PortfolioCard cardData={card} />
        ))}
      </div>
    </section>
  );
};
