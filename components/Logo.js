import React, { useEffect, useState } from "react";
import Link from "next/link";

export default ({ white = false }) => {
  return (
    <Link href="/">
      <a>
        <div>
          <img
            src={white ? "/dinner_club_white.png" : "/DinnerClub.png"}
            alt="Dinner Club Logo"
          ></img>

          <style jsx>{`
            display: flex;
            justify-content: center;
            img {
              margin: 1rem;
              height: 60px;
            }
          `}</style>
        </div>
      </a>
    </Link>
  );
};
