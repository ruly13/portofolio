'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { CertificateItem } from '@/types/resume';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CertificateSlider = ({
  data,
}: {
  data: CertificateItem[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // Custom dots class for styling
    dotsClass: "slick-dots !bottom-[-40px]",
  };

  return (
    <div className="certificate-slider-container px-4">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4 h-full">
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    View Certificate
                  </span>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                  >
                    Details <Icon icon="heroicons:arrow-right" />
                  </Link>
                </div>
              </div>

              {/* Minimal Content Section (Visible always) */}
              <div className="p-5 flex-1 flex flex-col bg-white dark:bg-slate-800 relative z-10">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                   <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                     {item.technologies[0] || 'Certificate'}
                   </span>
                   <Icon icon="heroicons:check-badge" className="text-green-500 w-5 h-5"/>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>

      {/* Global Style Override for Slick Dots to match theme */}
      <style jsx global>{`
        .slick-dots li button:before {
          color: #94a3b8; /* Slate-400 */
          font-size: 10px;
          transition: all 0.3s;
        }
        .slick-dots li.slick-active button:before {
          color: #3b82f6; /* Blue-500 (Primary) */
          font-size: 12px;
        }
        .dark .slick-dots li button:before {
          color: #475569; /* Slate-600 */
        }
        .dark .slick-dots li.slick-active button:before {
          color: #60a5fa; /* Blue-400 */
        }
      `}</style>
    </div>
  );
};

export default CertificateSlider;
