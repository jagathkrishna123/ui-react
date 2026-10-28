import { useState } from "react";

function Appcmp() {
  const [About, setAbout] = useState(null);

  const loadAbout = async () => {
    const module = await import("./About.jsx");
    setAbout(() => module.default);
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={loadAbout}>
        Load About
      </button>

      {About && <About />}
    </div>
  );
}

export default Appcmp;