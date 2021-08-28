import "./n0x.css";
import { useForm } from "react-hook-form";
import * as Slice from "../App.slice";
import { useEffect } from "react";
import A1 from "../images/a1.png";
import A2 from "../images/a2.png";
import A3 from "../images/a3.png";
import A4 from "../images/a4.png";
import A5 from "../images/a5.png";
import A6 from "../images/a6.png";
import A7 from "../images/a7.png";

export type N0xscapeConceptProps = Slice.HomePageState & typeof Slice.actions;

export function N0xscapeConcept(props: N0xscapeConceptProps) {
  const {
    view,
    account,
    chainId,
    failure,
    connectClicked,
    mintRequestSubmitted,
    pageLoaded,
  } = props;

  const { handleSubmit, register } = useForm<Slice.MintFormData>({
    defaultValues: { quantity: "" },
  });

  useEffect(() => {
    pageLoaded();
  }, [pageLoaded]);

  let formSection = null;

  if (view === "sold-out") {
    formSection = (
      <button className="concept-button" disabled>
        Sold out
      </button>
    );
  }

  if (view === "needs-provider") {
    formSection = (
      <div className="concept-message">
        To participate, install a crypto wallet &mdash; we suggest{" "}
        <a
          className="link"
          href="https://metamask.io/"
          rel="noopener noreferrer"
        >
          MetaMask.
        </a>
      </div>
    );
  }

  if (view === "disconnected") {
    formSection = (
      <button className="concept-button" onClick={connectClicked}>
        Connect to wallet
      </button>
    );
  }

  if (view === "connecting") {
    formSection = (
      <div className="concept-message">
        Waiting for your account to connect...
      </div>
    );
  }

  if (view === "ready") {
    formSection = (
      <form
        onSubmit={handleSubmit(mintRequestSubmitted)}
        className="flex-column gap300"
      >
        <input
          type="number"
          min="1"
          max="5"
          placeholder="how many? (1-5)"
          autoComplete="off"
          {...register("quantity", { required: true })}
        />
        <button className="concept-button" type="submit">
          Mint Token 0.05ETH each
        </button>
        <div className="darkgrey flex-column gap200 monospace font-size-small">
          <div>ACCOUNT: {account}</div>
          <div>CHAIN_ID: {chainId}</div>
          {failure && <div className="bg-cerise white p100">{failure}</div>}
        </div>
      </form>
    );
  }

  if (view === "submitting") {
    formSection = (
      <div className="concept-message">
        Waiting for the transaction to complete...
      </div>
    );
  }

  if (view === "success") {
    formSection = (
      <div>
        <div>Success!</div>
        <div>
          Check out your{" "}
          <a className="link" href="https://opensea.io/account">
            opensea.io
          </a>{" "}
          account!
        </div>
      </div>
    );
  }
  return (
    <div className="concept-area">
      <div className="concept-blurb">
        <img className="concept-lead-image" src={A1} alt="" />
        <div className="concept-text">
          <div className="mie-bold heading-margin">
            What are N0XSCAPE Concept Art Cards?
          </div>
          <p>
            N0XSCAPE is a play-to-earn NFT game that exists on the Ethereum
            blockchain.
          </p>
          <p>
            Each card acts as a mint pass for the N0XSCAPE alpha drop, member
            perks in our Discord, and some fun surprises later on. N0XSCAPE
            Concept Art Cards consist of 5 generations of development from
            multiple artists and highlights our journey to our current art
            style.
          </p>
        </div>
      </div>
      <div className="concept-form heading-margin">{formSection}</div>
      <div className="extra-pics">
        <img src={A2} alt="" />
        <img src={A3} alt="" />
        <img src={A4} alt="" />
        <img src={A5} alt="" />
        <img src={A6} alt="" />
        <img src={A7} alt="" />
      </div>
    </div>
  );
}
