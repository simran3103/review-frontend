'use client';
import { useState } from 'react';
import Star from "@/app/components/icons/star"; // Import the Star component

const Review = () => {
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [accuracyRating, setAccuracyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [checkInRating, setCheckInRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to manage submission message

  const handleCleanlinessRatingChange = (rating: number) => {
    setCleanlinessRating(rating);
  };

  const handleLocationRatingChange = (rating: number) => {
    setLocationRating(rating);
  };

  const handleValueRatingChange = (rating: number) => {
    setValueRating(rating);
  };

  const handleAccuracyRatingChange = (rating: number) => {
    setAccuracyRating(rating);
  };

  const handleCommunicationRatingChange = (rating: number) => {
    setCommunicationRating(rating);
  };

  const handleCheckInRatingChange = (rating: number) => {
    setCheckInRating(rating);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, for example, by sending the data to a backend server
    console.log('Form submitted:', { cleanlinessRating, locationRating, valueRating, accuracyRating, communicationRating, checkInRating, comment });
    setSubmitted(true);
  };
  // Calculate average rating
  const averageRating = (cleanlinessRating + locationRating + valueRating + accuracyRating + communicationRating + checkInRating) / 6;
  return (
    <section className="max-w-xl mx-auto p-4 bg-slate-200 rounded-lg shadow-lg mt-8">
      <h1 className="text-center text-cyan-700 font-bold text-primary text-4xl pt-4 mb-4">Leave a review</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Cleanliness:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleCleanlinessRatingChange(index + 1)}>
                <Star filled={index < cleanlinessRating} color="gold" />
              </span>
            ))}
          </div>
        </div>

        {/* Repeat similar structure for Location, Value, Accuracy, Communication, and Check-in */}
        
        {/* Location */}
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Location:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleLocationRatingChange(index + 1)}>
                <Star filled={index < locationRating} color="gold" />
              </span>
            ))}
          </div>
        </div>

        {/* Value */}
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Value:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleValueRatingChange(index + 1)}>
                <Star filled={index < valueRating} color="gold"/>
              </span>
            ))}
          </div>
        </div>

        {/* Accuracy */}
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Accuracy:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleAccuracyRatingChange(index + 1)}>
                <Star filled={index < accuracyRating} color="gold" />
              </span>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Communication:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleCommunicationRatingChange(index + 1)}>
                <Star filled={index < communicationRating} color="gold" />
              </span>
            ))}
          </div>
        </div>

        {/* Check-in */}
        <div className="flex flex-col items-center">
          <div className="flex items-center font-semibold">
            <label>Check-in:</label>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleCheckInRatingChange(index + 1)}>
                <Star filled={index < checkInRating} color="gold"/>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 mb-4">
          <label  className="font-semibold">Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} className="border border-gray-300 rounded-lg p-2 w-full" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-primary-dark">Submit</button>
        </div>
      </form>
      {/* Submission message */}
      {submitted && <p className="text-green-500 text-center mt-4">Your response has been submitted!</p>}
      {/* Average rating display */}
      {submitted && <p className="text-center mt-2">Average Rating: {averageRating.toFixed(2)}</p>}
    </section>
  );
};

export default Review;