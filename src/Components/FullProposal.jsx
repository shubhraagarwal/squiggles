import "./FullProposal.css";
import { useParams } from "react-router-dom";
import dummyProposals from "../dummyProposals";

function FullProposal() {
  const { index } = useParams();
  return (
    <main className="full-proposal-main">
      <section className="fullProposal">
        <div className="back">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12H20.25C20.4489 12 20.6397 12.079 20.7803 12.2197C20.921 12.3603 21 12.5511 21 12.75C21 12.9489 20.921 13.1397 20.7803 13.2803C20.6397 13.421 20.4489 13.5 20.25 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12Z"
              fill="#FFB1D2"
            />
            <path
              d="M5.56038 12.75L11.7809 18.969C11.9217 19.1098 12.0008 19.3008 12.0008 19.5C12.0008 19.6992 11.9217 19.8902 11.7809 20.031C11.64 20.1718 11.449 20.2509 11.2499 20.2509C11.0507 20.2509 10.8597 20.1718 10.7189 20.031L3.96888 13.281C3.89903 13.2113 3.84362 13.1286 3.80581 13.0375C3.768 12.9463 3.74854 12.8487 3.74854 12.75C3.74854 12.6514 3.768 12.5537 3.80581 12.4626C3.84362 12.3714 3.89903 12.2887 3.96888 12.219L10.7189 5.469C10.8597 5.32817 11.0507 5.24905 11.2499 5.24905C11.449 5.24905 11.64 5.32817 11.7809 5.469C11.9217 5.60983 12.0008 5.80084 12.0008 6C12.0008 6.19916 11.9217 6.39017 11.7809 6.531L5.56038 12.75Z"
              fill="#FFB1D2"
            />
          </svg>
          <span>Back</span>
        </div>
        <div className="">
          <article className="full-proposal">
            <div className="proposal-info">
              <div className="proposal-info-pic">
                <img src="images/squiggle-proposal-logo.png" alt="" />
                <span>Squiggle Dao</span>
              </div>
              <div className="proposal-info-status">
                <button
                  className={
                    dummyProposals[index].status === "Active"
                      ? "active-btn proposal-btn"
                      : dummyProposals[index].status === "Completed"
                      ? "completed-btn proposal-btn"
                      : "inactive-btn proposal-btn"
                  }
                >
                  {dummyProposals[index].status}
                </button>
              </div>
            </div>

            <div className="proposal-content">
              <div className="full-proposal-content-head">
                <h2>{dummyProposals[index].title}</h2>
              </div>
              <div className="full-proposal-content-desc">
                <p>{dummyProposals[index].body}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="read-more">
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="cast-vote">
          <h2>Cast your Vote</h2>
          <div className="divider-div">
            <div className="divider"></div>
          </div>
          <div className="vote-options">
            <button>Ice Cream</button>
            <button>Candy</button>
            <button className="special-btn">Vote</button>
          </div>
        </div>

        <div className="vote-giver">
          <h2>Votes</h2>
          <div className="divider-div">
            <div className="divider"></div>
          </div>

          <div className="vote-info">
            <p>0x4f6742bADB049791CD9A37ea913f2BAC38d01279</p>
            <p>10 Squiggles</p>
          </div>
          <div className="vote-info">
            <p>0x4f6742bADB049791CD9A37ea913f2BAC38d01279</p>
            <p>10 Squiggles</p>
          </div>
          <div className="vote-info">
            <p>0x4f6742bADB049791CD9A37ea913f2BAC38d01279</p>
            <p>10 Squiggles</p>
          </div>
          <div className="vote-info">
            <p>0x4f6742bADB049791CD9A37ea913f2BAC38d01279</p>
            <p>10 Squiggles</p>
          </div>

          <button className="vote-info-btn vote-info special-btn">See More</button>
        </div>
      </section>

      <section className="extra-info">
        <div className="time-limit">
            <p>Time Limit</p>
            <span>2D:14H:32M:54S</span>
        </div>

        <div className="vote-system">
            <p>Voting System</p>
            <span>Single Choice</span>
        </div>

        <div className="vote-result">
            <h3>Results</h3>
            <div className="result-info">
                <p>Ice Cream</p>
                <span>66.5%</span>
            </div>
            <div className="result-info">
                <p>Candy</p>
                <span>33.5%</span>
            </div>
        </div>
      </section>
    </main>
  );
}

export default FullProposal;
