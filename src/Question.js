import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ data }) => {
  const { title, info } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus />
            )}
          </button>
        </header>
        {isOpen ? <p>{info}</p> : null}
      </article>
    </>
  );
};

export default Question;
