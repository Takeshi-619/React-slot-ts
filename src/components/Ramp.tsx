import React from "react";

const Ramp = ({ open }: { open: boolean }) => {
  return (
    <>
      {open ? (
        <div>
          <img src="/img/gogo10.png" alt="" />
        </div>
      ) : null}
    </>
  );
};

export default Ramp;
