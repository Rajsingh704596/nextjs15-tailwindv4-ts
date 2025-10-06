import { Grid } from "./BentoCard-Grid";
import DarkModePage from "./Card";
import { Form } from "./Form";

import { Navbar } from "./Navbar";
import { SVGComponent } from "./svg-animation";
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
      <div>
        <Form />
      </div>
      <div className="mx-auto my-20 flex h-screen max-w-4xl flex-col items-center">
        <SVGComponent />
      </div>
    </>
  );
};

export default page;
