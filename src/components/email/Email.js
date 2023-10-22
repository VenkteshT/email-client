import React from "react";
import "./Email.css";
import { actions } from "../../redux/emailSlice";
import { useDispatch } from "react-redux";
export default function Email({ email }) {
  // dispatch
  const dispatch = useDispatch();

  // onclick handling
  function handleClick() {
    console.log("clied");
    dispatch(actions.markAsRead({ id: email.id }));
    dispatch(actions.setFullView({ id: email.id, email: email }));
  }

  //
  return (
    <div
      className={`card ${email.favourite && "favourite"}`}
      onClick={handleClick}
    >
      <div className="character">
        <p>{email.from.name[0].toUpperCase()}</p>
      </div>
      <div className="info">
        <div className="from">{email.from.email}</div>
        <div className="subject">{email.subject}</div>
        <div className="description">
          {email.short_description.slice(0, 70)}
        </div>
        <div className="date">
          <span className="sent-date">
            {new Date(email.date).toLocaleString()}
          </span>
          <span className="isfavourite">{email.favourite && "favourite"}</span>
        </div>
      </div>
    </div>
  );
}
