'use client';
import Header from "../components/layout/Header";
import FAQItem from "@/app/components/layout/FAQItem";
import { useEffect, useState } from 'react';
import axios from 'axios';


const FAQPage = () => {
    console.log('here');
    const [faqs, setFAQs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/faqs'); 
                console.log(response);// Change the URL to match your backend API endpoint
                setFAQs(response.data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFAQs();
    }, []);

    return (
        <>
            <Header />
            <h1 className="text-center text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            <h2 className="text-center text-4xl font-bold mb-8">data</h2>
            <h3 className="text-center text-4xl font-bold mb-8">this is insane</h3>
            <div className="max-w-4xl mx-auto py-4">
                <div className="grid grid-cols-1 gap-4">
                    {faqs.map(({ question, answer }) => ( // Destructure question and answer directly
                        <FAQItem
                            key={question} // Use question as key assuming it's unique
                            question={question}
                            answer={answer}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQPage;