import  "./cube.css"

const Cube = () => {
  return (
    <div>
        <h1 className="text-center text-2xl text-shadow-fuchsia-700 text-shadow-sm tracking-wide">Tailwind backface visibility and backface hidden utility class example</h1>
     
  
  

{/*  <!-- Example 1: Rotating Cube --> */}
<div className="flex gap-28 justify-center mt-20">

  {/* <!-- Cube with backface-hidden --> */}
  <div className="animate-spin-slow relative size-40 [transform-style:preserve-3d]">
    <div className="absolute inset-0 translate-z-20 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">1</div>
    <div className="absolute inset-0 -translate-z-20 rotate-y-180 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">2</div>
    <div className="absolute inset-0 translate-x-20 rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">3</div>
    <div className="absolute inset-0 -translate-x-20 -rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">4</div>
    <div className="absolute inset-0 -translate-y-20 rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">5</div>
    <div className="absolute inset-0 translate-y-20 -rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">6</div>
  </div>

  {/* <!-- Cube with backface-visible --> */}
  <div className="animate-spin-slow relative size-40 [transform-style:preserve-3d]">
    <div className="absolute inset-0 translate-z-20 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">1</div>
    <div className="absolute inset-0 -translate-z-20 rotate-y-180 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">2</div>
    <div className="absolute inset-0 translate-x-20 rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">3</div>
    <div className="absolute inset-0 -translate-x-20 -rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">4</div>
    <div className="absolute inset-0 -translate-y-20 rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">5</div>
    <div className="absolute inset-0 translate-y-20 -rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">6</div>
  </div>

</div>

{/* // <!-- Example 2: Rotating Cube --> */}
<div className="flex gap-28 justify-center mt-40">

  {/* <!-- Cube with backface-hidden --> */}
  <div className="animate-spin-slow relative size-40 [transform-style:preserve-3d]">
    <div className="absolute inset-1 translate-z-20 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">1</div>
    <div className="absolute inset-1 -translate-z-20 rotate-y-180 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">2</div>
    <div className="absolute inset-1 translate-x-20 rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">3</div>
    <div className="absolute inset-1 -translate-x-20 -rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">4</div>
    <div className="absolute inset-1 -translate-y-20 rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">5</div>
    <div className="absolute inset-1 translate-y-20 -rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-hidden">6</div>
  </div>

  {/* <!-- Cube with backface-visible --> */}
  <div className="animate-spin-slow relative size-40 [transform-style:preserve-3d]">
    <div className="absolute inset-1 translate-z-20 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">1</div>
    <div className="absolute inset-1 -translate-z-20 rotate-y-180 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">2</div>
    <div className="absolute inset-1 translate-x-20 rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">3</div>
    <div className="absolute inset-1 -translate-x-20 -rotate-y-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">4</div>
    <div className="absolute inset-1 -translate-y-20 rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">5</div>
    <div className="absolute inset-1 translate-y-20 -rotate-x-90 bg-sky-300/75 flex items-center justify-center text-2xl backface-visible">6</div>
  </div>

</div>

</div>
  )
}

export default Cube