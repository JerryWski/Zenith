import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import monitor from '../assets/monitoring.json';
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
      className='w-[250px] h-[250px] sm:w-[375px] lg:w-[300px] lg:h-[172px] xl:w-[387px] xl:h-[285px] absolute bottom-[-40px] sm:bottom-[80px] xl:bottom-[52px] left-10'
    >
      <Lottie
        lottieRef={logoRef}
        animationData={monitor}
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
