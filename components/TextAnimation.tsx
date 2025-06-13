import React, { useState, useEffect } from 'react';
import styles from './TextAnimation.module.css';

const phrases = [
  "Were Meant to Find",
  "Will Lead to Success",
  "Can Make a Difference",
  "Create Tomorrow's Future"
];

const TextAnimation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 600);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.staticText}>You</div>
      <div className={`${styles.animatedText} ${isVisible ? styles.visible : styles.hidden}`}>
        {phrases[currentIndex]}
      </div>
    </div>
  );
};

export default TextAnimation;
