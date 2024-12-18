import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import autoprocess from '../assets/auto.json';
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
      className='w-[80%] sm:w-[50%] lg:w-[100%] xl:w-[387px] mt-[61px] lg:mt-0 object-contain lg:relative'
    >
      <Lottie
        lottieRef={logoRef}
        animationData={autoprocess}
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
