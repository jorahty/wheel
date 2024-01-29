'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Wheel = () => {
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);

  let result = '';
  const slice = Math.floor((rotation / 360) * 8);
  if (slice == 0 || slice == 7) result = '💧';
  else if (slice == 3 || slice == 4 || slice == 5) result = '🔥';
  else if (slice == 6) result = '💧🔥';

  const handleButtonClick = () => {
    // Set a high initial velocity when the button is pressed
    // setVelocity(8.43);
    // setVelocity(11.95);
    setVelocity(8.43 + (11.95 - 8.43) * Math.random());
  };

  useEffect(() => {
    const updateRotation = () => {
      // Update rotation based on velocity
      setRotation((prevRotation) => (prevRotation + velocity) % 360);

      // Gradually decrease velocity until it comes to a rest
      setVelocity((prevVelocity) => (prevVelocity > 0 ? prevVelocity - 0.1 : 0));
    };

    // Use requestAnimationFrame to update the rotation continuously
    const animationFrameId = requestAnimationFrame(updateRotation);

    // Cleanup function to cancel animation frame on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [velocity]);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ minHeight: 40, fontSize: 30 }}>{result}</div>
      <div
        id="spin"
        onClick={handleButtonClick}
        style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button>Spin</button>
        <div
          style={{
            borderTop: '10px solid #000',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            marginBottom: '10px',
          }}
        />
      </div>
      <Image
        src="/wheel.png"
        width={2048}
        height={2048}
        alt="Wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: 'min(80vw, 70vh)',
          height: 'auto',
        }}
      />
    </main>
  );
};
