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
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
  },
  {
    img: Images.Image1,
    popupText: "Web Development",
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
          <PortfolioCard image={card.img} popupText={card.popupText} />
        ))}
      </div>
    </section>
  );
};
