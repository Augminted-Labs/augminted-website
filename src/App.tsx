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

export function HomePage() {
  const [openSection, setOpenSection] = useState<number>();
  const [gt880] = useMediaQuery("(min-width: 880px)");

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
        <div style={{ maxWidth: "13rem" }}>
          <HeaderDecoration />
        </div>
      </header>
      <main>
        <Wristband
          isOpen={openSection === 0}
          onClick={() => setOpenSection(0)}
          color="cerise"
          kind="Project"
          title="Magic 8 Ball"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 1 : 0}
          code="TBD"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === 1}
          onClick={() => setOpenSection(1)}
          color="lemon"
          kind="Project"
          title="Ethereals"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 2 : 0}
          code="TBD"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === 2}
          onClick={() => setOpenSection(2)}
          color="cerise"
          kind="Project"
          title="N0xscape"
          subtitle="Web3 Development for Official Release Date"
          translate={gt880 ? 1 : 0}
          code="TBD"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === 3}
          onClick={() => setOpenSection(3)}
          color="black"
          kind="Info"
          title="About"
          subtitle="Augminted Labs information"
          translate={gt880 ? 2 : 0}
          code="TBD"
        >
          <Placeholder />
        </Wristband>
        <Wristband
          isOpen={openSection === 4}
          onClick={() => setOpenSection(4)}
          color="cerise"
          kind="Info"
          title="Team"
          subtitle="ohDots, 3LLL, eelzy"
          translate={gt880 ? 1 : 0}
          code="TBD"
        >
          <div className="team-area">
            <TeamMember
              name="ohDots"
              image={dotsImage}
              blurb="blah"
              title="Title"
            />
            <TeamMember
              name="3LLL"
              image={lllImage}
              blurb="blah"
              title="Title"
            />
            <TeamMember
              name="eelzy"
              image={eelzyImage}
              blurb="blah"
              title="Title"
            />
          </div>
        </Wristband>
      </main>
      <footer></footer>
    </>
  );
}

export type WristbandProps = {
  color: "lemon" | "cerise" | "blue" | "black";
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

  function handleClick() {
    // ref.current?.scrollTo({behavior: 'smooth'});
    onClick();
  }

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

  const contentAreaClassName = isOpen
    ? "content-area content-area-open"
    : "content-area";

  if (gt575) {
    return (
      <section ref={ref}>
        <div
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={withEnter(handleClick)}
          className={`wristband-${color} translate-reset`}
          style={{
            height: "85px",
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
        onClick={handleClick}
        onKeyDown={withEnter(handleClick)}
        className={`wristband-${color}`}
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
}

function TeamMember(props: TeamMemberProps) {
  const { name, image, blurb, title } = props;
  return (
    <div className='team-member'>
      <img
        src={image}
        style={{ backgroundColor: "var(--color-lemon)", maxWidth: "12rem" }}
      />
      <div className="mie-bold team-member-name">{name}</div>
      <div className="mie-bold">&gt;&gt; {title}</div>
      <div>{blurb}</div>
    </div>
  );
}

function Placeholder() {
  return (
    <div
      style={{ padding: "1rem", color: "white", minHeight: "20rem" }}
      className="mie-bold"
    >
      Some content will go here...
    </div>
  );
}

function withEnter(f: Function) {
  return (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      f();
    }
  };
}
