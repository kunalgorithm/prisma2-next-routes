import React from "react";
import Link from "next/link";

const links = [
  { href: "/users", label: "Users" },
  { href: "https://github.com/on-deck/dinnerclub", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <img src="https://assets.website-files.com/5df3223cbe804bf9518502ba/5df330e9d6a5f94c19c78fe5_Artboard-p-500.png"></img>

    <div className="container">
      <h1 className="logo-text">On Deck</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>

    {links.map(({ key, href, label }) => (
      <Link href={href} key={href}>
        <a>{label}</a>
      </Link>
    ))}

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      h1.logo-text {
        box-sizing: border-box;
        display: inline-block;
        float: right;
        font-family: Montserrat, sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 44px;
        margin: 5px 0 0;
      }
      display: flex;
      .container {
        max-width: 940px;
        position: relative;
        z-index: 1000;
      }
      img {
        border-width: 0;
        box-sizing: border-box;
        clear: none;
        display: inline-block;
        float: left;
        height: 50px;
        margin-right: 10px;
        max-width: 100%;
        vertical-align: middle;
        width: 50px;
      }
      nav {
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.09);
        box-sizing: border-box;
        height: 90px;
        left: 0;
        opacity: 1;
        padding-top: 20px;
        position: fixed;
        right: 0;
        top: 0;
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        z-index: 1000;
      }
    `}</style>
  </nav>
);

export default () => null;
