import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h2 className=" bg-cyan-400">This is About Page</h2>
      <div className=" flex gap-4 justify-center my-4 ">
        <Link className=" btn btn-primary bg-cyan-500 p-2 rounded-lg" href="about/history">History</Link>
        <Link className=" btn btn-primary bg-emerald-500 p-2 rounded-lg" href="about/mission">Mission</Link>
      </div>
    </div>
  );
};

export default AboutPage;
