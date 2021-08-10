import "animate.css";
import "./n0x.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as Slice from "./N0xscapeConcept.slice";
import { RootState } from "../store";
import { useEffect } from "react";

type AppProps = Slice.N0xscapeConceptState & typeof Slice.actions;

function N0xscapeConcept(props: AppProps) {
  const {
    view,
    account,
    chainId,
    failure,
    connectClicked,
    mintRequestSubmitted,
    pageLoaded,
  } = props;

  const { handleSubmit, register, formState, reset } =
    useForm<Slice.MintFormData>({
      defaultValues: { quantity: "" },
    });

  useEffect(() => {
    pageLoaded();
  }, []);

  const ballClassName = formState.isSubmitting
    ? "ball animate__animated animate__wobble"
    : "ball";

  let formSection = null;

  if (view === "needs-provider") {
    formSection = (
      <div className="message">
        To participate, install a crypto wallet &mdash; we suggest{" "}
        <a href="https://metamask.io/" rel="noopener noreferrer">
          MetaMask.
        </a>
      </div>
    );
  }

  if (view === "disconnected") {
    formSection = (
      <button className="concept-button" onClick={connectClicked}>
        Connect to eth
      </button>
    );
  }

  if (view === "connecting") {
    formSection = (
      <div className="message">Waiting for your account to connect...</div>
    );
  }

  if (view === "ready") {
    formSection = (
      <form
        onSubmit={handleSubmit(mintRequestSubmitted)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="number"
          min="1"
          max="5"
          placeholder="how many? (1-5)"
          autoComplete="off"
          {...register("quantity")}
        />
        <button className="concept-button" type="submit">
          Mint Token 0.05ETH each
        </button>
        <div>
          <pre>
            <code style={{ color: "rgb(94,94,94)", fontSize: "small" }}>
              ACCOUNT: {account}
              <br />
              CHAIN_ID: {chainId}
              <br />
              {failure && (
                <span
                  style={{
                    backgroundColor: "var(--color-cerise)",
                    color: "whitesmoke",
                    fontWeight: "bold",
                    padding: "var(--size-100)",
                  }}
                >
                  {failure}
                </span>
              )}
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

  if (view === "success") {
    formSection = (
      <div>Check your opensea.io after your transaction completes!</div>
    );
  }
  return (
    <div className="concept-area">
      <div className="form">{formSection}</div>
    </div>
  );
}

export const N0xscapeConceptConnected = connect<
  Slice.N0xscapeConceptState,
  typeof Slice.actions,
  {},
  RootState
>(
  (state) => state["n0x-concept"],
  Slice.actions
)(N0xscapeConcept);
