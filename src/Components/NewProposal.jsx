import "./NewProposal.css";
import { useState, useEffect } from "react";

function NewProposal() {
  const [InputHeadValue, setHeadInputValue] = useState("");
  const [InputDescValue, setDescInputValue] = useState("");
  const [ShowOtherBtns, setShowOtherBtns] = useState(false);
  const [ShowSubmitPrompt, setShowSubmitPrompt] = useState(false);

  const handleHeadChange = (e) => {
    setHeadInputValue(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescInputValue(e.target.value);
  };

  // function check(){
  //   if (InputHeadValue !== "" || InputDescValue !== "") {
  //     return
  //   } else {

  //   }
  // }

  function handleChangeBtn() {
    setShowOtherBtns(true);
  }

  function handleSubmitPrompt() {
    setShowSubmitPrompt(!ShowSubmitPrompt);
  }

  // function openSumbitPrompt(){

  // }

  return (
    <section className="new-proposal">
      <div className={ShowSubmitPrompt === true ? "submit-prompt" : "hide"}>
        <div className="close-btn">
          <svg
            onClick={handleSubmitPrompt}
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1.51123L1 17.5112M17 17.5112L1 1.51123L17 17.5112Z"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="select-options">
          <select name="" id="time-limit">
            <option value="">
              Time Limit
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.55864 8.925L0.563642 2.0725C-0.143858 1.26625 0.431142 4.59632e-07 1.50489 4.59632e-07H13.4949C13.7352 -0.000205574 13.9705 0.0688598 14.1725 0.198926C14.3746 0.328993 14.5349 0.514546 14.6342 0.733366C14.7335 0.952187 14.7677 1.195 14.7325 1.43272C14.6974 1.67045 14.5945 1.89301 14.4361 2.07375L8.44114 8.92375C8.32382 9.05801 8.17912 9.16562 8.01678 9.23935C7.85443 9.31308 7.67819 9.35123 7.49989 9.35123C7.32159 9.35123 7.14535 9.31308 6.98301 9.23935C6.82066 9.16562 6.67597 9.05801 6.55864 8.92375V8.925Z"
                  fill="white"
                />
              </svg>
            </option>
          </select>

          <select name="" id="time-limit">
            <option value="">
              Voting System
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.55864 8.925L0.563642 2.0725C-0.143858 1.26625 0.431142 4.59632e-07 1.50489 4.59632e-07H13.4949C13.7352 -0.000205574 13.9705 0.0688598 14.1725 0.198926C14.3746 0.328993 14.5349 0.514546 14.6342 0.733366C14.7335 0.952187 14.7677 1.195 14.7325 1.43272C14.6974 1.67045 14.5945 1.89301 14.4361 2.07375L8.44114 8.92375C8.32382 9.05801 8.17912 9.16562 8.01678 9.23935C7.85443 9.31308 7.67819 9.35123 7.49989 9.35123C7.32159 9.35123 7.14535 9.31308 6.98301 9.23935C6.82066 9.16562 6.67597 9.05801 6.55864 8.92375V8.925Z"
                  fill="white"
                />
              </svg>
            </option>
          </select>
        </div>
      </div>

      <article>
        <article className="new-proposal-info">
          <h2>New Proposal</h2>
          <p>Only authors will be able to propose new proposals. </p>
        </article>

        <article className="new-proposal-writing">
          <textarea
            value={InputHeadValue}
            onChange={handleHeadChange}
            type="text"
            name=""
            id="new-proposal-input-head"
            placeholder="Draft a Propsal..."
          />
          <textarea
            value={InputDescValue}
            onChange={handleDescChange}
            type="text"
            name=""
            id="new-proposal-input-desc"
            placeholder="Explain more about Proposal"
          />
        </article>
      </article>

      <div className="draft-control">
        <button
          className={
            ShowOtherBtns === true ? "hide" : "draft-control-btn preview-btn"
          }
        >
          Preview
        </button>

        <button
          onClick={handleSubmitPrompt}
          className={
            ShowOtherBtns === true ? "draft-control-btn preview-btn" : "hide"
          }
        >
          Edit
        </button>

        <button
          className={
            ShowOtherBtns === true ? "hide" : "draft-control-btn continue-btn"
          }
          onClick={
            InputHeadValue !== "" || InputDescValue !== ""
              ? handleChangeBtn
              : ""
          }
        >
          Continue
        </button>

        <button
          onClick={handleSubmitPrompt}
          className={
            ShowOtherBtns === true ? "draft-control-btn active-btn" : "hide"
          }
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default NewProposal;
