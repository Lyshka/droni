import { AboutMain } from "../components/About/AboutMain";
import { Efficient } from "../components/Efficient/Efficient";
import { Mode } from "../components/Mode/Mode";
import { Objective } from "../components/Objective/Objective";
import { Projector } from "../components/Projector/Projector";
import { Return } from "../components/Return/Return";
import { Sense } from "../components/Sense/Sense";
import { Slider } from "../components/Slider/Slider";
import { VideoShooting } from "../components/VideoShooting/VideoShooting";
import { Perfomance } from "../components/Perfomance/Perfomance";
import { Reliability } from "../components/Reliability/Reliability";
import { Accessories } from "../components/Accessories/Accessories";
import { Last } from "../components/Last";

export const Home = () => {
  return (
    <>
      <AboutMain />
      <Slider />
      <Objective />
      <Efficient />
      <Sense />
      <Projector />
      <Mode />
      <Return />
      <VideoShooting />
      <Perfomance />
      <Reliability />
      <Accessories />
      <Last />
    </>
  );
};
