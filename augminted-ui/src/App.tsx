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
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLayoutEffect } from "react";

import { EightBallConnected } from "./8ball/EightBall";
import { N0xscapeConceptConnected } from "./n0x-concept/N0xscapeConcept";

export function HomePage() {
  const [openSection, setOpenSection] = useState<string>();
  const [gt1024] = useMediaQuery("(min-width: 1024px)");

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
          <div style={{ width: "3rem" }}>
            <AugmintedLogo />
          </div>
          <div style={{ width: "3rem" }}>
            <EthLogo />
          </div>
        </div>
        <div className="title">
          <span className="mie-bold">Augminted</span>{" "}
          <span className="mie-light">Labs</span>
        </div>

        <div className="header-decoration">
          <HeaderDecoration />
        </div>
      </header>
      <main>
        <Wristband
          isOpen={openSection === "about"}
          onClick={handleWristbandClicked("about")}
          color="cerise"
          kind="Info"
          title="About"
          subtitle="Augminted Labs information"
          translate={gt1024 ? 1 : 0}
          code="000001"
          contentAreaColor="black"
        >
          <div className="about-area readable">
            <div className="mie-bold my-300">Our collective</div>
            <div>
              <p>Decentraliaztion doesn't have to mean alienation.</p>
              <p>
                Augminted Labs is a collective of artists, engineers, and
                analysts helping businesses and community members launch their
                own web3 projects.
              </p>
              <p>
                The distributed web is more than just contracts and tokens
                &mdash; it's art and design, it's attracting an audience, it's a
                vibrant product launch. Whether you need a little help crafting
                a pitch deck, or a complete end-to-end implementation, we've got
                the people and passion to dream impossible dreams and make web3
                visions reality.
              </p>
              <p>
                <a
                  className="underline"
                  href="#contact"
                  onClick={handleWristbandClicked("contact")}
                >
                  Contact us
                </a>
                , and start your Augminted journey.
              </p>
            </div>
            <div className="mie-bold my-300">We do</div>
            <div>
              <ul>
                <li>Graphic design and illustration</li>
                <li>NFTs and Solidity contracts</li>
                <li>Web design and development</li>
                <li>Community building and go-to-market</li>
              </ul>
            </div>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "team"}
          onClick={handleWristbandClicked("team")}
          color="lemon"
          kind="Info"
          title="Team"
          subtitle="ohDots, 3LLL, eelzy"
          translate={gt1024 ? 2 : 0}
          code="000002"
        >
          <div className="team-area">
            <TeamMember
              name="ohDots"
              image={dotsImage}
              title="Founder &amp; Software Engineer"
              url="https://twitter.com/ohDotss"
            >
              <p>
                <ul>
                  <li>Hip-Hop Head</li>
                  <li>Beer Enthusiast</li>
                  <li>Do a little bit of everything</li>
                </ul>
                <q>
                  Success is not final, failure is not fatal: it is the courage
                  to continue that counts.
                </q>
              </p>
            </TeamMember>
            <TeamMember
              name="3LLL"
              image={lllImage}
              title="Artist"
              url="https://twitter.com/FutureBoy3LLL"
            >
              <p>Music Producer, Illustrator and Multimedia Designer.</p>
              <p>
                Previously <em>Final Bout</em> Co-Founder and Art Director.
              </p>
              <p>
                Led design, social media and manufacturing of products line.
                Over 10 years of professional illustration and design work.
              </p>
            </TeamMember>
            <TeamMember
              name="eelzy"
              image={eelzyImage}
              title="Software Engineer"
              url="https://twitter.com/eelzy___"
            >
              <div>
                <p>
                  An emoji-brained eel that wants you to eat your vegetables and
                  read Marx.
                </p>
                <p>
                  A decade of professional software engineering experience,
                  specializing in front-end dev.
                </p>
              </div>
            </TeamMember>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "contact"}
          onClick={handleWristbandClicked("contact")}
          color="cerise"
          kind="Info"
          title="Contact"
          subtitle="Augminted Labs"
          translate={gt1024 ? 1 : 0}
          code="000003"
        >
          <div className="contact-area no-wrap">
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
            <a
              href="mailto:nathan@augmintedlabs.io?subject=[Inquiry] I want to work with Augminted Labs!"
              className="contact"
            >
              <FaEnvelope style={{ fontSize: "8rem" }} />
              Email
            </a>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "n0x"}
          onClick={handleWristbandClicked("n0x")}
          color="lemon"
          kind="Project"
          title="n0xscape"
          subtitle="Concept Art and Early Support"
          translate={gt1024 ? 2 : 0}
          code="00004"
          contentAreaColor="white"
        >
          <N0xscapeConceptConnected />
        </Wristband>
        {/* <Wristband
          isOpen={openSection === "ETH"}
          onClick={handleWristbandClicked("ETH")}
          color="black"
          kind="Project"
          title="Ethereals"
          subtitle="Web3 Development"
          translate={gt1024 ? 2 : 0}
          code="00005"
          contentAreaColor="black"
        >
          <div className="project-area">
            <div className="Title">
              <span className="mie-bold">Augminted</span>
              <span className="mie-light">Labs</span>
            </div>
            <div className="mie-bold">Project Details Coming Soon</div>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "1"}
          onClick={handleWristbandClicked("1")}
          color="cerise"
          kind="Project"
          title="N0XSCAPE ALPHA"
          subtitle="Web3 Development"
          translate={gt1024 ? 3 : 0}
          code="00006"
          contentAreaColor="black"
        >
          <div className="project-area">
            <div className="Title">
              <span className="mie-bold">Augminted</span>
              <span className="mie-light">Labs</span>
            </div>
            <div className="mie-bold">Project Details Coming Soon</div>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "2"}
          onClick={handleWristbandClicked("2")}
          color="blue"
          kind="Project"
          title="Beats &amp; Houseplants"
          subtitle="Music for the soul"
          translate={gt1024 ? 1 : 0}
          code="00007"
          contentAreaColor="black"
        >
          <div className="project-area">
            <div className="Title">
              <span className="mie-bold">Augminted</span>
              <span className="mie-light">Labs</span>
            </div>
            <div className="mie-bold">Project Details Coming Soon</div>
          </div>
        </Wristband>
        <Wristband
          isOpen={openSection === "3"}
          onClick={handleWristbandClicked("3")}
          color="lemon"
          kind="Project"
          title="Magic Eight Ball"
          subtitle="Ask and Receive"
          translate={gt1024 ? 2 : 0}
          code="00008"
          contentAreaColor="black"
        >
          <EightBallConnected />
        </Wristband>
        <Wristband
          isOpen={openSection === "4"}
          onClick={handleWristbandClicked("4")}
          color="black"
          kind="Info"
          title="Careers"
          subtitle="Interested in joining the team?"
          translate={gt1024 ? 3 : 0}
          code="00009"
          contentAreaColor="black"
        >
          <div className="project-area">
            <div className="Title">
              <span className="mie-bold">Augminted</span>
              <span className="mie-light">Labs</span>
            </div>
            <div className="mie-bold">Project Details Coming Soon</div>
          </div>
        </Wristband> */}
      </main>
      <footer className="footer">
        <div>&copy; Augminted Labs</div>
        <div>For more information, please re-read this website.</div>
      </footer>
    </>
  );
}

export type WristbandProps = {
  color: "lemon" | "cerise";
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
  const [gt1024] = useMediaQuery("(min-width: 1024px)");
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen]);

  const mainEl = (
    <div className={`wristband translate-target translate-${translate}`}>
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
          <code>* {subtitle}</code>
        </div>
        <div className="mie-bold h-big">&lt;&lt; {title}</div>
      </div>
    </div>
  );

  const state = isOpen ? "open" : "closed";
  const contentAreaClassName = `content-area content-area-${state} content-area-${contentAreaColor}`;

  if (gt1024) {
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
        className={`wristband-${color}`}
      >
        {mainEl}
      </div>
      <div className={contentAreaClassName}>{children}</div>
    </section>
  );
}

type TeamMemberProps = {
  name: string;
  title: string;
  image: string;
  url: string;
} & PropsWithChildren<{}>;

function TeamMember(props: TeamMemberProps) {
  const { name, image, children, title, url } = props;
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
      <div className='my-300'>
        <div className="mie-bold team-member-name">{name}</div>
        <div className="mie-bold">&gt;&gt; {title}</div>
      </div>
      <div>{children}</div>
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
