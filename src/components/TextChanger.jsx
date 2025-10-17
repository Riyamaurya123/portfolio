import React, { useEffect, useState } from "react";

const TextChanger = () => {
  const text = [" Full Stack Developer", "  Frontend Developer"];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(text[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
        if (endValue >= text[index].length) {
          setIsForward(false);
        }
      } else {
        setEndValue((prev) => prev - 1);
        if (endValue <= 1) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, text]);

  return <div className="transition ease duration-300"> {currentText}</div>;
};

export default TextChanger;
