import dummyProposals from "../dummyProposals";
import "./Proposal.css";
import { Link } from "react-router-dom";

function Proposal() {
  return (
    <section>
      {dummyProposals.map((proposalEl, index) => (
        <Link className="link" to={"proposal" + "/" + index}>
          <article className="proposal">
            <div className="proposal-info">
              <div className="proposal-info-pic">
                <img src="images/squiggle-proposal-logo.png" alt="" />
                <span>Squiggle Dao</span>
              </div>
              <div className="proposal-info-status">
                <button
                  className={
                    proposalEl.status === "Active"
                      ? "active-btn proposal-btn"
                      : proposalEl.status === "Completed"
                      ? "completed-btn proposal-btn"
                      : "inactive-btn proposal-btn"
                  }
                >
                  {proposalEl.status}
                </button>
              </div>
            </div>

            <div className="proposal-content">
              <div className="proposal-content-head">
                <h2>{proposalEl.title}</h2>
              </div>
              <div className="proposal-content-desc">
                <p>{proposalEl.body}</p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Proposal;
