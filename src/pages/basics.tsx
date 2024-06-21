import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>MUSKY BALZAC</title>

        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Freeman&display=swap" rel="stylesheet"/>        
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&family=Sriracha&display=swap" rel="stylesheet"/>
        <meta
        
        name="description"
          content="Basic Functionality"
        />

      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
