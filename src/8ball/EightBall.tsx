import "./8ball.css";
import "animate.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as Slice from "./EightBall.slice";
import { RootState } from "../store";
import EightBallImage from "./8ball-500px.png";
import EightBallBackImage from "./8ball-back-500px.png";
import EightBallTriImage from "./8ball-tri-500px.png";
import { useEffect } from "react";

type AppProps = Slice.EightBallState & typeof Slice.actions;

function EightBall(props: AppProps) {
  const {
    view,
    answer,
    account,
    chainId,
    failure,
    connectClicked,
    ballReset,
    questionSubmitted,
    pageLoaded,
  } = props;

  const { handleSubmit, register, formState, reset } =
    useForm<Slice.BallFormData>({
      defaultValues: { question: "" },
    });

  useEffect(() => {
    pageLoaded();
  }, []);

  const ballClassName = formState.isSubmitting
    ? "ball animate__animated animate__wobble"
    : "ball";

  const answerClassName = answer
    ? "answer animate__animated animate__fadeIn animate__slow  animate__delay-1s"
    : "answer";

  let formSection = null;

  if (view === "needs-provider") {
    formSection = (
      <div className="message">
        To use the Magic Eight Ball, install a crypto wallet &mdash; we suggest{" "}
        <a href="https://metamask.io/" rel="noopener noreferrer">
          MetaMask.
        </a>
      </div>
    );
  }

  if (view === "disconnected") {
    formSection = (
      <button className="button" onClick={connectClicked}>
        Connect to eth
      </button>
    );
  }

  if (view === "connecting") {
    formSection = (
      <div className="message">Waiting for your account to connect...</div>
    );
  }

  if (view === "question") {
    formSection = (
      <form
        onSubmit={handleSubmit(questionSubmitted)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="write your question here"
          {...register("question")}
        />
        <button className="button" type="submit">
          Ask Question
        </button>
        <div>
          <pre>
            <code style={{ color: "rgb(94,94,94)", fontSize: "small" }}>
              ACCOUNT: {account}
              <br />
              CHAIN_ID: {chainId}
              <br />
              {failure}
            </code>
          </pre>
        </div>
      </form>
    );
  }

  if (view === "submitting") {
    formSection = (
      <div className="message">Waiting for the transaction to complete...</div>
    );
  }

  if (view === "answer") {
    formSection = (
      <button
        className="button"
        onClick={() => {
          reset();
          ballReset();
        }}
      >
        Try again
      </button>
    );
  }

  const eightBallBackEl = view === "answer" && (
    <>
      <img
        src={EightBallBackImage}
        alt=""
        className="ball-texture-back animate__animated animate__fadeIn animate__fast"
      />{" "}
      <img
        src={EightBallTriImage}
        alt=""
        className="ball-texture-back animate__animated animate__fadeIn animate__slow  animate__delay-1s"
      />
    </>
  );

  return (
    <div className="eight-ball-area">
      <div className="form">{formSection}</div>
      <div className="stage">
        <div className={ballClassName}>
          <img src={EightBallImage} alt="" className="ball-texture" />
          {eightBallBackEl}
          <div className="answer-surface">
            <div className={answerClassName}>{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const EightBallConnected = connect<
  Slice.EightBallState,
  typeof Slice.actions,
  {},
  RootState
>(
  (state) => state["8ball"],
  Slice.actions
)(EightBall);
