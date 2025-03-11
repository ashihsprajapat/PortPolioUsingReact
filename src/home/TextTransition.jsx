import React, { useState, useEffect } from "react";

const TextTransition = () => {
    const descriptions = [
        "Web Developer.",
        "Problem Solver.",
        "MERN Stack Developer.",
        "Compatitive Programmer .",
        "currently learning Java Full stack Dev."
    ];

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [increasing, setIncreasing] = useState(true);

    useEffect(() => {
        const text = descriptions[currentIndex];
        const interval = setInterval(() => {
            if (increasing) {
                setCurrentCharIndex(prev => {
                    if (prev < text.length) {
                        return prev + 1;
                    } else {
                        setIncreasing(false);
                        return prev;
                    }
                });
            } else {
                setCurrentCharIndex(prev => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        setIncreasing(true);
                        setCurrentIndex(prev => (prev + 1) % descriptions.length); // Loop back to first description
                        return prev;
                    }
                });
            }
        }, 100); // Delay for each character change, adjust for speed

        return () => clearInterval(interval);
    }, [currentIndex, increasing, descriptions]);

    useEffect(() => {
        setCurrentText(descriptions[currentIndex].slice(0, currentCharIndex));
    }, [currentCharIndex, currentIndex]);

    return (
        <div>
            <span style={{color:"purple"}}>
            {currentText}|

            </span>
        </div>
    );
};

export default TextTransition;
