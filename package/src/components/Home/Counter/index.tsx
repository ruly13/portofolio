import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const CountUpAnimation = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = React.useState(false);
  
  // Extract number from string (e.g. "10+" -> 10)
  const numericEnd = parseInt(end.replace(/\D/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.min(numericEnd, Math.floor((progress / duration) * numericEnd)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericEnd, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={` ${isColorMode
        ? 'dark:bg-darklight bg-section'
        : 'dark:bg-darkmode bg-white'
        }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-4'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={item.icon}
                alt='icon'
                width={30}
                height={30}
                unoptimized
              />
              <span className='text-5xl font-semibold text-midnight-text dark:text-white'>
                <CountUpAnimation end={item.value} />
              </span>
              <p className='text-base text-grey text-center max-w-[17.8125rem] w-full dark:text-white/50'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
