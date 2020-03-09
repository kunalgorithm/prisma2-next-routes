import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Logo from "../components/Logo";

export default () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <Head title="Home" />
      <Nav />
      <Logo />
    </div>
  );
};
