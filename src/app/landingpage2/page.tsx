import { Grid } from "./BentoCard-Grid";
import DarkModePage from "./Card";

import { Navbar } from "./Navbar";
import { TransformCard3D } from "./TransformCard3D";

const page = () => {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
        <DarkModePage />
      </div>
      <div className="relative">
        <Grid />
      </div>
      <div className="mx-auto flex h-screen max-w-5xl items-center">
        <TransformCard3D />
      </div>
    </>
  );
};

export default page;
