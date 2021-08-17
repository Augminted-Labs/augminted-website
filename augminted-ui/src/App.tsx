import React, {
  CSSProperties,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import "./util-styles.css";
import "./App.css";
import {
  AugmintedLogo,
  EthLogo,
  WristbandTape,
  HeaderDecoration,
} from "./Icons";
import { useMediaQuery } from "./utils";
import dotsImage from "./images/Cool-Cat-3985---no-background.png";
import lllImage from "./images/Cool-Cat-5049---no-background.png";
import eelzyImage from "./images/Cool-Cat-7722---no-background.png";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLayoutEffect } from "react";
import { N0xscapeConceptConnected } from "./n0x-concept/N0xscapeConcept";
import { classNames } from "./utils";

type SectionId = undefined | "n0xscape" | "about" | "team" | "contact";

interface NavBarProps {
  activeSection: SectionId;
  onClick(id: SectionId): void;
}

function NavBar(props: NavBarProps) {
  const { activeSection, onClick } = props;

  function handleClick(id: SectionId) {
    return () => onClick(id);
  }

  function linkClassName(id: SectionId) {
    return id === activeSection ? "active-nav-link" : "";
  }

  return (
    <nav className="nav none md:flex-row justify-center">
      <a
        href="#n0xscape"
        className={linkClassName("n0xscape")}
        onClick={handleClick("n0xscape")}
      >
        N0XSCAPE
      </a>
      <a
        href="#about"
        className={linkClassName("about")}
        onClick={handleClick("about")}
      >
        About
      </a>
      <a
        href="#team"
        className={linkClassName("team")}
        onClick={handleClick("team")}
      >
        Team
      </a>
      <a
        href="#contact"
        className={linkClassName("contact")}
        onClick={handleClick("contact")}
      >
        Contact
      </a>
    </nav>
  );
}

export function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>();
  const [gt1024] = useMediaQuery("(min-width: 1024px)");

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      const headerHeight =
        document.querySelector(".header")?.getBoundingClientRect().height || 0;

      const root = document.querySelector<HTMLElement>(":root")!;
      root?.style.setProperty("--js-header-height", `${headerHeight}px`);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  function handleWristbandClicked(id: SectionId) {
    return () => {
      if (activeSection === id) {
        setActiveSection(undefined);
        return;
      }

      setActiveSection(id);
    };
  }

  return (
    <>
      <header className="header bg-lemon flex-column justify-center items-center">
        <a
          href="#home"
          onClick={handleWristbandClicked(undefined)}
          className="flex-column md:flex-row justify-around p200 gap200 items-center font-size-big w100"
        >
          <div className="flex-row gap200">
            <AugmintedLogo style={{ width: "3rem" }} />
            <EthLogo style={{ width: "3rem" }} />
          </div>
          <div className="flex-row items-baseline no-wrap gap50 font-size-title">
            <span className="mie-bold">Augminted</span>{" "}
            <span className="mie-light">Labs</span>
          </div>
          <HeaderDecoration
            className="none md:block"
            style={{ minWidth: "10rem", width: "10rem" }}
          />
        </a>
        <NavBar
          activeSection={activeSection}
          onClick={(x) => handleWristbandClicked(x)()}
        />
      </header>
      <main>
        <Wristband
          isOpen={activeSection === "n0xscape"}
          onClick={handleWristbandClicked("n0xscape")}
          color="cerise"
          kind="Project"
          title="n0xscape"
          subtitle="Concept Art and Early Support"
          translate={gt1024 ? 1 : 0}
          code="00001"
          contentAreaColor="white"
        >
          <N0xscapeConceptConnected />
        </Wristband>
        <Wristband
          isOpen={activeSection === "about"}
          onClick={handleWristbandClicked("about")}
          color="lemon"
          kind="Info"
          title="About"
          subtitle="Augminted Labs information"
          translate={gt1024 ? 2 : 0}
          code="00002"
          contentAreaColor="black"
        >
          <div className="flex-column items-center gap300">
            <div className="mie-bold heading-margin">Our collective</div>
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
                  className="link"
                  href="#contact"
                  onClick={handleWristbandClicked("contact")}
                >
                  Contact us
                </a>
                , and start your Augminted journey.
              </p>
            </div>
            <div className="mie-bold heading-margin">We do</div>
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
          isOpen={activeSection === "team"}
          onClick={handleWristbandClicked("team")}
          color="cerise"
          kind="Info"
          title="Team"
          subtitle="ohDots, 3LLL, eelzy"
          translate={gt1024 ? 1 : 0}
          code="00003"
        >
          <div className="flex-column md:flex-row justify-center gap300">
            <TeamMember
              name="ohDots"
              image={dotsImage}
              title="Founder &amp; Software Engineer"
              url="https://twitter.com/ohDotss"
            >
              <div>
                <ul>
                  <li>Hip-Hop Head</li>
                  <li>Beer Enthusiast</li>
                  <li>Do a little bit of everything</li>
                </ul>
                <q>
                  Success is not final, failure is not fatal: it is the courage
                  to continue that counts.
                </q>
              </div>
            </TeamMember>
            <Divider />
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
            <Divider />
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
          isOpen={activeSection === "contact"}
          onClick={handleWristbandClicked("contact")}
          color="lemon"
          kind="Info"
          title="Contact"
          subtitle="Augminted Labs"
          translate={gt1024 ? 2 : 0}
          code="00004"
        >
          <div className="flex-column justify-center text-center">
            <div className="flex-row justify-center">
              <a
                href="https://twitter.com/augminted"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-column items-center gap100 p300"
              >
                <FaTwitter className="contact-icon" />
              </a>
              <a
                href="https://github.com/Augminted-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-column items-center gap100 p300"
              >
                <FaGithub className="contact-icon" />
              </a>
              <a
                href="mailto:nathan@augmintedlabs.io?subject=[Inquiry] I want to work with Augminted Labs!"
                className="flex-column items-center gap100 p300"
              >
                <FaEnvelope className="contact-icon" />
              </a>
            </div>
            <div className="mie-bold contact-label">
              To contact us directly - click through
            </div>
          </div>
        </Wristband>
      </main>
      <footer className="darkgrey text-center p400">
        &copy; Augminted Labs
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

  const mainElStyle: CSSProperties = gt1024 ? { minWidth: "55rem" } : {};

  const mainEl = (
    <div
      className={`flex-row pointer select-none translate-target translate-${translate}`}
      style={mainElStyle}
    >
      <div
        className="none md:flex-row bg-white black items-center justify-between"
        style={{ width: "10rem" }}
      >
        <div style={{ maxWidth: "7rem" }}>
          <WristbandTape />
        </div>
        <span className="wristband-code">{code}</span>
      </div>
      <div className="p100 flex-none">
        <div className="flex-column gap100 md:flex-row md:items-center">
          <div className="mie-bold">
            {kind} : {title} *
          </div>
          <span>{subtitle}</span>
        </div>
        <div className="mie-bold font-size-big">&lt;&lt; {title}</div>
      </div>
    </div>
  );

  const state = isOpen ? "open" : "closed";
  const contentAreaClassName = classNames(
    `content-area content-area-${state} flex-row justify-center`,
    {
      "bg-black white": contentAreaColor === "black",
      "bg-white black": contentAreaColor === "white",
    }
  );
  const wristbandClassName = classNames(`bg-${color}`, "black", {
    "active-wristband": isOpen,
    "flex-row": gt1024,
    "wristband-container": gt1024,
    "translate-reset": gt1024,
  });

  if (gt1024) {
    return (
      <section ref={ref}>
        <div
          tabIndex={0}
          onClick={onClick}
          onKeyDown={filterEnterKey(onClick)}
          className={wristbandClassName}
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
        onKeyDown={filterEnterKey(onClick)}
        className={wristbandClassName}
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

  const [gt1024] = useMediaQuery("(min-width: 1024px)");
  const style: CSSProperties = gt1024
    ? { maxWidth: "16rem" }
    : { maxWidth: "24rem" };
  return (
    <div className="p400 flex-column flex-none" style={style}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-column gap100"
      >
        <img src={image} alt="" className="team-img bg-lemon p300" />
        <div className="heading-margin flex-column gap400">
          <div className="mie-bold team-member-name">{name}</div>
          <div className="mie-bold">&gt;&gt; {title}</div>
        </div>
      </a>
      <div>{children}</div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="none md:block bg-white"
      style={{
        height: "100%",
        width: "1px",
      }}
    />
  );
}

function filterEnterKey(f: Function) {
  return (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      f(e);
    }
  };
}
