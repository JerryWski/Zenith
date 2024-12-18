
import Lottie, {type LottieRefCurrentProps} from 'lottie-react';
import logoanime from '../assets/logosek.json';
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
          rootMargin: '0px 0px -300px 0px',
          threshold: 0.5
        }
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
        className='w-[450px] h-[450px] xl:w-[700px] xl:h-[700px]'
      >
        <Lottie 
          lottieRef={logoRef}
          animationData={logoanime}
          autoplay={false}
          loop={false}
          onComplete={() => {
            
            logoRef.current?.goToAndStop(45, true);
          }}
        />
      </div>
    );
  };
  

export default LogoAnime;
