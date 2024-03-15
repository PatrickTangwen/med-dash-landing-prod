import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/AboutHero.js";
import Features from "components/features/AboutFeatures.js";
import Papa from "papaparse";
import { VitalClient, VitalEnvironment } from '@tryvital/vital-node';
import  {SleepGetRawRequest} from '@tryvital/vital-node/api/resources/sleep';
const allowedExtensions = ["csv"];
const App = () => {};




const dsc180 = () => {
  return (
  <AnimationRevealPage>
    <Hero />
    <Features />
  </AnimationRevealPage>
  );
}

export default App;
