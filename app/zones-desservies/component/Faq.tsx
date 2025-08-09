'use client';

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ questions }: { questions: FaqItem[] }) {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {questions.map((item, index) => (
        <FaqEntry key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function FaqEntry({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-[#03144a] pr-4 leading-relaxed">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-6 h-6 text-[#03144a] transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-700 leading-relaxed text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}