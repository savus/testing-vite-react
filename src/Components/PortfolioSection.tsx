import { createContext, useState } from "react";
import "../css/portfolio-section.css";
import { Images } from "../Images";
import { FilterLink } from "./FilterLink";
import { PortfolioFilterNav } from "./PortfolioFilterNav";
import type { TFilterContext, TFilterLink, TPortfolioCard } from "../types";
import { PortfolioCard } from "./PortfolioCard";
import { Shared } from "../utils/shared";
import { useActiveContext } from "./Providers/ActiveStateProvider";

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
  const { activeNavLink } = useActiveContext();
  const [activeFilterLink, setActiveFilterLink] = useState<TFilterLink>("none");
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (value: string) => {
    setActiveFilterLink("none");
    setSearchInput(value);
  };

  const onClickHandler = (stateName: TFilterLink) => {
    setActiveFilterLink(stateName);
    setSearchInput("");
  };

  const filteredCards = portfolioCards.filter((card) => {
    const shouldShowCard = () => {
      if (searchInput.length === 0 && activeFilterLink === "none") return true;
      else if (searchInput === "all" || activeFilterLink === "all") return true;
      else if (searchInput === card.filter || activeFilterLink === card.filter)
        return true;
      else return false;
    };
    return shouldShowCard();
  });

  return (
    <section
      className={`portfolio-section container slide ${Shared.shouldElementBeActive(
        activeNavLink,
        "gallery"
      )}`}
    >
      <h2>Portfolio</h2>
      <div className="search-container">
        <label htmlFor="search">
          <input
            type="text"
            placeholder="search"
            id="search"
            value={searchInput}
            onChange={({ target: { value } }) => onChangeHandler(value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <PortfolioFilterNav>
          <FilterLink
            text={"All Work"}
            activeLinkName="all"
            activeFilterLink={activeFilterLink}
            onClick={() => onClickHandler("all")}
          />
          <FilterLink
            text={"Web Development"}
            activeLinkName="web"
            activeFilterLink={activeFilterLink}
            onClick={() => onClickHandler("web")}
          />
          <FilterLink
            text={"App Development"}
            activeLinkName="app"
            activeFilterLink={activeFilterLink}
            onClick={() => onClickHandler("app")}
          />
          <FilterLink
            text={"Ui Design"}
            activeLinkName="ui"
            activeFilterLink={activeFilterLink}
            onClick={() => onClickHandler("ui")}
          />
        </PortfolioFilterNav>
      </div>
      <div className="portfolio-grid">
        {filteredCards.map((card, index) => (
          <PortfolioCard key={index} cardData={card} />
        ))}
      </div>
    </section>
  );
};
