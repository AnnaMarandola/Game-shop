import React from "react";
import { List } from "../../components";

const SideMenu = ({ loadCategory, category }) => {
  const links = [
    "Jeux de cartes",
    "Escape Box",
    "Kids",
    "En famille/Entre amis",
  ];

  return (
    <div className="sidebar">
      <ul className="category">
        {links.map((link, index) => {
          return (
            <div>
              <hr/>
              <li
                className={category === index && "active"}
                key={index}
                onClick={() => loadCategory(index)}
              >
                {link}
              </li>
              <hr/>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export const Home = (props) => {
  const { isFiltering, filtered, list, category, loadCategory } = props;
  return (
    <div className="container">
      <div className="row">
        <SideMenu loadCategory={loadCategory} category={category} />
        <div className="col-sm">
          <div className="row">
            <List
              data={isFiltering ? filtered : list[category]}
              category={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
