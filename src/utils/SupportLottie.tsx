import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import suport from '../assets/support.json';
import { useEffect, useRef, useState } from 'react';

const LogoAnime: React.FC = () => {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -200px 0px',
        threshold: 0.5,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && logoRef.current) {
      logoRef.current.play();
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className='w-[80%] h-[70%] sm:w-[520px] sm:h-[280px] lg:w-[80%] lg:h-[50%] absolute bottom-[-40px] left-[25%]'
    >
      <Lottie
        lottieRef={logoRef}
        animationData={suport}
        autoplay={false}
        loop={false}
        onComplete={() => {
          console.log('ypui');
          logoRef.current?.goToAndPlay(55, true);
        }}
      />
    </div>
  );
};

export default LogoAnime;
