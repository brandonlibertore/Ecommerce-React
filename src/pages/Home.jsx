import React from 'react'
import Landing from "../components/Landing";
import Highlight from "../components/Highlight";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
        <Landing/>
        <Highlight/>
        <Featured/>
        <Discounted/>
        <Explore/>
    </>
  )
}
