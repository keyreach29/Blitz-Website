import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

function MovingImage({ imageUrl, speed = 5, direction = 'right' }) {
  const [position, setPosition] = useState(0);
  const imageRef = useRef(null);
  const animationFrameId = useRef(null);
  const containerWidth = useRef(window.innerWidth);
  const containerHeight = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      containerWidth.current = window.innerWidth;
      containerHeight.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (imageRef.current) {
        const imageWidth = imageRef.current.offsetWidth;
        const imageHeight = imageRef.current.offsetHeight;

        setPosition((prevPosition) => {
          let newPosition = prevPosition;

          switch (direction) {
            case 'right':
              newPosition += speed;
              if (newPosition > containerWidth.current) newPosition = -imageWidth;
              break;
            case 'left':
              newPosition -= speed;
              if (newPosition < -imageWidth) newPosition = containerWidth.current;
              break;
            case 'down':
              newPosition += speed;
              if (newPosition > containerHeight.current) newPosition = -imageHeight;
              break;
            case 'up':
              newPosition -= speed;
              if (newPosition < -imageHeight) newPosition = containerHeight.current;
              break;
            default:
              break;
          }

          return newPosition;
        });
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [speed, direction]);

  const style = {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    maxWidth: '100vw',
    maxHeight: '100vh',
    objectFit: 'contain',
    ...(direction === 'right' || direction === 'left'
      ? { left: `${position}px`, top: '50%', transform: 'translateY(-50%)' }
      : { top: `${position}px`, left: '50%', transform: 'translateX(-50%)' }),
  };

  return <img ref={imageRef} src={imageUrl} alt="" style={style} />;
}

function MovingImages() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <MovingImage imageUrl={image1} speed={2} direction="right" />
      <MovingImage imageUrl={image2} speed={3} direction="down" />
      <MovingImage imageUrl={image3} speed={4} direction="left" />
      <MovingImage imageUrl={image4} speed={5} direction="up" />
    </div>
  );
}

export default MovingImages;