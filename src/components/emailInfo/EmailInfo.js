import React, { useState } from "react";
import "./emailinfo.css";
import { actions } from "../../redux/emailSlice";
import { useDispatch } from "react-redux";
export default function EmailInfo({ email }) {
  // dispatch
  const dispatch = useDispatch();

  // state
  const [toggle, setToggle] = useState(email.favourite);

  // onclick handling
  function handleClick(id) {
    dispatch(actions.markAsFavourite({ id }));
    setToggle((p) => !p);
  }

  //
  return (
    <div className="email-info-container">
      <div className="email-info">
        <div className="header">
          <div className="character">
            <p>{email.from.name[0].toUpperCase()}</p>
          </div>
          <div className="details">
            <div className="name">{email.from.name}</div>
            <div className="date">{new Date(email.date).toLocaleString()}</div>
          </div>

          <button onClick={() => handleClick(email.id)} className="btn-mark">
            Mark as favourite
          </button>
        </div>
        <div className="body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugit
          molestias officia voluptatum natus minima illum veniam consectetur nam
          eum error quia corrupti, earum dolore voluptate animi, porro quibusdam
          minus neque atque deleniti reprehenderit tenetur quae voluptas!
          Tempora quibusdam, veniam alias, assumenda laborum neque atque eos at
          laboriosam nemo eligendi blanditiis. Molestias iure facilis deleniti
          saepe eveniet voluptate nemo voluptas officiis ut atque id in
          <br />
          repudiandae quas quibusdam aliquid eius illo reiciendis temporibus
          unde cupiditate, facere iusto. Numquam ullam consequuntur iste eius
          voluptatem assumenda voluptates, sint doloremque optio culpa
          asperiores molestias doloribus aut praesentium quibusdam, molestiae
          quaerat porro? Minus iste non in, recusandae, mollitia fuga atque
          nobis modi blanditiis voluptas pariatur quibusdam incidunt? Alias quo
          quia dolore consequatur laborum aliquid at obcaecati nemo labore ut,
          minus ex, odit veniam sed, provident perferendis tempora ducimus
          <br />
          repellendus molestiae harum eos. Inventore harum voluptates
          voluptatibus, nemo tenetur ratione tempora. Enim, vitae ipsam illo
          cupiditate eum quis consectetur nihil nemo, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit sed quo voluptatibus enim
          numquam sit non asperiores, porro a aspernatur cupiditate, minus
          distinctio ut! Architecto odio inventore consequuntur nulla cum
          <br />
          perspiciatis obcaecati tempora, culpa dolores eligendi necessitatibus,
          voluptates, dolore facilis! Nobis est voluptates corporis assumenda
          quidem rem numquam quasi qui.
        </div>
      </div>
    </div>
  );
}
