import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      
      // Call the onComplete callback after fade out
      setTimeout(() => {
        onComplete();
      }, 1000); // Wait for fade out animation
      
    }, 2000); // 2 seconds for splash animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#4A4139] flex flex-col items-center justify-center transition-opacity duration-1000 ${animationComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="animate-pulse mb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
            <rect width="100" height="100" fill="#FDB50B" />
            <text
              x="50"
              y="65"
              fontSize="40"
              fontFamily="Space Grotesk"
              fill="#4A4139"
              textAnchor="middle"
              fontWeight="bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              TIM
            </text>
          </svg>
        </div>
        <div className="font-['Space_Grotesk'] text-sm md:text-base text-[#FDF7EC] mt-4 text-center">
          <span className="inline-block">Sick Photos Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;