import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateSelector, actions } from "./redux/emailSlice";
import Email from "./components/email/Email";
import Nav from "./components/Nav/Nav";
import EmailInfo from "./components/emailInfo/EmailInfo";
function App() {
  // dispatch
  const dispatch = useDispatch();

  // state destructing
  const {
    emails,
    page,
    readEmails,
    unReadEmails,
    favouritesEmails,
    fullView,
    curEmail,
  } = useSelector(stateSelector);

  // api fetching
  function fetchAPI() {
    const URL = `https://flipkart-email-mock.now.sh/`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => dispatch(actions.setMails({ emails: data.list })));
  }

  //
  useEffect(() => {
    // callign function on initial rendering
    fetchAPI();
    dispatch(actions.setPage({ page: "all" }));
  }, []);

  //
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <div className="sub-container">
          {/* all email list */}

          {page.all && (
            <div className="emails">
              {emails.map((el) => (
                <Email key={el.id} email={el} />
              ))}
            </div>
          )}

          {/* unread email list */}

          {page.unread && (
            <div className="emails">
              {unReadEmails.map((el) => (
                <Email key={el.id} email={el} />
              ))}
            </div>
          )}

          {/* read email list */}

          {page.read && (
            <div className="emails">
              {readEmails.map((el) => (
                <Email key={el.id} email={el} />
              ))}
            </div>
          )}

          {/* Favourite email list */}
          {page.favourites && (
            <div className="emails">
              {favouritesEmails.map((el) => (
                <Email key={el.id} email={el} />
              ))}
            </div>
          )}

          {fullView && <EmailInfo email={curEmail} />}
        </div>
      </div>
    </div>
  );
}

export default App;
