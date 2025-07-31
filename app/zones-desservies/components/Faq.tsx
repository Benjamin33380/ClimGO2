'use client';

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ questions }: { questions: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <FaqEntry key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function FaqEntry({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-[#000000] rounded-lg p-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <h3 className="text-xl font-semibold text-[#000000] text-center">{question}</h3>
      {open && (
        <p className="text-gray-800 mt-2 leading-relaxed text-center transition duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
}