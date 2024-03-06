'use client';
import { useState } from 'react';
import Down from "@/app/components/icons/down";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center flex justify-between items-center">
      <h4>{question}</h4>
      <Down onClick={toggleAnswerVisibility} />
      {isAnswerVisible && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;