import React, { PropsWithChildren, useRef, useState } from "react";
import "./App.css";
import {
  AugmintedLogo,
  EthLogo,
  WristbandTape,
  HeaderDecoration,
} from "./Icons";
import { useMediaQuery } from "./util";
import dotsImage from "./images/Cool-Cat-3985---no-background.png";
import lllImage from "./images/Cool-Cat-5049---no-background.png";
import eelzyImage from "./images/Cool-Cat-7722---no-background.png";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useLayoutEffect } from "react";

export function HomePage() {
  const [openSection, setOpenSection] = useState<string>();
  const [gt880] = useMediaQuery("(min-width: 880px)");

  function handleWristbandClicked(id: string) {
    return () => {
      if (openSection === id) {
        setOpenSection(undefined);
        return;
      }

      setOpenSection(id);
    };
  }

  return (
    <>
      <header className="header">
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ maxWidth: "3rem" }}>
            <AugmintedLogo />
          </div>
          <div style={{ maxWidth: "3rem" }}>
            <EthLogo />
          </div>
        </div>
        <div className="title">
          <span className="mie-bold">Augminted</span>{" "}
          <span className="mie-light">Labs</span>
        </div>

        <HeaderDecoration />
      </header>
      <main>
        {/* <Wristband
          isOpen={openSection === "m8b"}
          onClick={handleWristbandClicked("m8b")}
          color="cerise"
          kind="Project"
          title="Magic 8 Ball"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 1 : 0}
          code="00001"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === "ethereals"}
          onClick={handleWristbandClicked("ethereals")}
          color="lemon"
          kind="Project"
          title="Ethereals"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 2 : 0}
          code="00001"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === "n0x"}
          onClick={handleWristbandClicked("n0x")}
          color="cerise"
          kind="Project"
          title="N0xscape"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 1 : 0}
          code="00001"
        >
          <Placeholder />
        </Wristband> */}
        <Wristband
          isOpen={openSection === "about"}
          onClick={handleWristbandClicked("about")}
          color="black"
          kind="Info"
          title="About"
          subtitle="Augminted Labs information"
          translate={gt880 ? 2 : 0}
          code="000001"
          contentAreaColor="white"
        >
          <div className="about-area">
            <div className="title">
              <span className="mie-bold">Augminted</span>{" "}
              <span className="mie-light">Labs</span>
            </div>
            <div>
              Decentraliaztion doesn't have to mean alienation. We aim to
              produce fun, useful content for the web3 community.
            </div>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "team"}
          onClick={handleWristbandClicked("team")}
          color="cerise"
          kind="Info"
          title="Team"
          subtitle="ohDots, 3LLL, eelzy"
          translate={gt880 ? 1 : 0}
          code="000002"
        >
          <div className="team-area">
            <TeamMember
              name="ohDots"
              image={dotsImage}
              blurb=""
              title="Founder &amp; Software Engineer"
              url="https://twitter.com/ohDotss"
            />
            <TeamMember
              name="3LLL"
              image={lllImage}
              blurb=""
              title="Artist"
              url="https://twitter.com/FutureBoy3LLL"
            />
            <TeamMember
              name="eelzy"
              image={eelzyImage}
              blurb=""
              title="Software Engineer"
              url="https://twitter.com/eelzy___"
            />
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "contact"}
          onClick={handleWristbandClicked("contact")}
          color="blue"
          kind="Info"
          title="Contact"
          subtitle="Augminted Labs"
          translate={gt880 ? 2 : 0}
          code="000003"
        >
          <div className="contact-area">
            <a
              href="https://twitter.com/augminted"
              target="_blank"
              rel="noopener noreferrer"
              className="contact"
            >
              <FaTwitter style={{ fontSize: "8rem" }} />
              @augminted
            </a>
            <a
              href="https://github.com/Augminted-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="contact"
            >
              <FaGithub style={{ fontSize: "8rem" }} />
              Augminted-Labs
            </a>
          </div>
        </Wristband>
      </main>
      <footer></footer>
    </>
  );
}

export type WristbandProps = {
  color: "lemon" | "cerise" | "blue" | "black";
  contentAreaColor?: "black" | "white";
  kind: string;
  title: string;
  subtitle: string;
  code: string;
  translate: number;
  isOpen: boolean;
  onClick(): void;
} & PropsWithChildren<{}>;

export function Wristband(props: WristbandProps) {
  const {
    color,
    contentAreaColor = "black",
    kind,
    title,
    subtitle,
    translate,
    code,
    children,
    isOpen,
    onClick,
  } = props;
  const [gt575] = useMediaQuery("(min-width: 575px)");
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: ref.current?.getBoundingClientRect().top || 0,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  const mainEl = (
    <div className={`wristband no-wrap translate-${translate}`}>
      <div className="wristband-glue">
        <div style={{ maxWidth: "7rem" }}>
          <WristbandTape />
        </div>
        <code className="wristband-code">{code}</code>
      </div>
      <div className={`wristband-body`}>
        <div className="wristband-heading">
          <div className="mie-bold wristband-heading-title">
            {kind} : {title}
          </div>
          <code className="wristband-heading-subtitle">* {subtitle}</code>
        </div>
        <div className="mie-bold wristband-main-title">&lt;&lt; {title}</div>
      </div>
    </div>
  );

  const state = isOpen ? "open" : "closed";
  const contentAreaClassName = `content-area content-area-${state} content-area-${contentAreaColor}`;

  if (gt575) {
    return (
      <section ref={ref}>
        <div
          tabIndex={0}
          onClick={onClick}
          onKeyDown={withEnter(onClick)}
          className={`wristband-container wristband-${color} translate-reset`}
          style={{
            display: "flex",
          }}
        >
          {mainEl}
          {mainEl}
          {mainEl}
        </div>
        <div className={contentAreaClassName}>{children}</div>
      </section>
    );
  }

  return (
    <section ref={ref}>
      <div
        tabIndex={0}
        onClick={onClick}
        onKeyDown={withEnter(onClick)}
        className={`wristband-${color} translate-reset`}
      >
        {mainEl}
      </div>
      <div className={contentAreaClassName}>{children}</div>
    </section>
  );
}

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  blurb: string;
  url: string;
}

function TeamMember(props: TeamMemberProps) {
  const { name, image, blurb, title, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="team-member"
      style={{
        maxWidth: "20rem",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          backgroundColor: "var(--color-lemon)",
          padding: "1rem",
          paddingLeft: "0.5rem",
        }}
      />
      <div className="mie-bold team-member-name">{name}</div>
      <div className="mie-bold">&gt;&gt; {title}</div>
      <div>{blurb}</div>
    </a>
  );
}

function withEnter(f: Function) {
  return (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      f(e);
    }
  };
}
