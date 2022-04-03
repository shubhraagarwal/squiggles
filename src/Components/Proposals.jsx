import "./Proposals.css";
import Proposal from "./Proposal";

function Proposals() {
  return (
    <section className="proposals">
      <div>
        <h1>Proposals</h1>
        <Proposal />
      </div>

      <article className="own-squiggle">
        <div className="own-squiggle-head">
          <h2>Own a Squiggle?</h2>
        </div>
        <div className="divider-parent">
          <div className="divider"></div>
        </div>

        <div className="own-squiggle-desc">
          <p>If you own a squiggle you can cast a vote in Dao’s Proposals</p>
        </div>

        <div className="own-squiggle-btn">
          <button className="wallet-btn active-btn">
            Connect Wallet to Vote
          </button>
        </div>
      </article>
    </section>
  );
}

export default Proposals;
