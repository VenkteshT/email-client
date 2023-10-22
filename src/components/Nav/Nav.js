import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { actions, stateSelector } from "../../redux/emailSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Nav() {
  // dispatch
  const dispatch = useDispatch();

  // state destructuring
  const { page } = useSelector(stateSelector);

  // onclick handling
  function handleClick(page) {
    dispatch(actions.setPage({ page }));
    dispatch(actions.cancelFullView());
    if (page === "read") {
      dispatch(actions.setReadEmails());
    } else if (page === "unread") {
      dispatch(actions.setUnReadEamils());
    } else if (page === "favourites") {
      dispatch(actions.setFavouriteEamils());
    }
  }

  //
  return (
    <div className="nav">
      <span className="nav-title">Filter By:</span>
      <ul className="navbar">
        <li
          className={`nav-item ${page.all && "all"}`}
          onClick={() => handleClick("all")}
        >
          All
        </li>
        <li
          onClick={() => handleClick("unread")}
          className={`nav-item ${page.unread && "unread"}`}
        >
          Unread
        </li>
        <li
          onClick={() => handleClick("read")}
          className={`nav-item ${page.read && "read"}`}
        >
          Read
        </li>
        <li
          onClick={() => handleClick("favourites")}
          className={`nav-item ${page.favourites && "favourites"}`}
        >
          Favourites
        </li>
      </ul>
    </div>
  );
}
