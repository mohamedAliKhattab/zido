import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { Modal } from "antd";

type CalendlyProps = {
  setTogglePopup: (status: boolean) => void;
  togglePopup: boolean;
};
const Calendly = ({ togglePopup, setTogglePopup }: CalendlyProps) => {
  const [rootDoc, setRootDoc] = useState<HTMLElement>();
  const [calKey, setCalKey] = useState<number>(1);

  useEffect(() => {
    if (document.getElementById("__next"))
      setRootDoc(document.getElementById("__next") as HTMLElement);
  }, []);
  useEffect(() => {
    setCalKey(calKey + 1);
  }, [rootDoc, togglePopup, setTogglePopup]);
  return (
    <>
      <Modal
        rootClassName="calendly-modal"
        width={1075}
        footer=""
        title=""
        onCancel={() => setTogglePopup(false)}
        open={togglePopup}
        centered
        className="mx-2"
      >
        <div className="calendly-container">
          <div key={calKey} className="relative z-10 bg-white">
            {rootDoc && togglePopup && (
              <InlineWidget url="https://calendly.com/maqraa-test/30min" />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Calendly;
