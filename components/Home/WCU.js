"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CountUpAnimation = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count}+</span>;
};

export default function WhyChooseUs() {
  const benefits = [
    {
      index: "01",
      title: "Personalized Travel Planning",
      description: "We craft custom trips to match your unique preferences, ensuring every moment is perfect.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      )
    },
    {
      index: "02",
      title: "24/7 Customer Support",
      description: "Our dedicated team is here around the clock to assist with any travel need or emergency.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13a9 9 0 0118 0v2.25a2.25 2.25 0 01-2.25 2.25h-.75a2.25 2.25 0 01-2.25-2.25V13a3 3 0 00-6 0v2.25a2.25 2.25 0 01-2.25 2.25h-.75A2.25 2.25 0 013 15.25V13z" />
        </svg>
      )
    },
    {
      index: "03",
      title: "Experienced Local Guides",
      description: "Explore destinations with our seasoned local guides who provide deep, authentic insights.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0V3m0 18c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 18c-4.97 0-9-4.03-9-9s4.03-9 9-9M3.75 12h16.5" />
        </svg>
      )
    },
    {
      index: "04",
      title: "Affordable Pricing",
      description: "Get the best deals for your dream destinations without breaking the bank or sacrificing quality.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l4.318-4.318a2.25 2.25 0 000-3.182L11.16 3.659A2.25 2.25 0 009.568 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      )
    },
    {
      index: "05",
      title: "Quality Service Guaranteed",
      description: "We ensure every trip is filled with exceptional experiences and world-class hospitality.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      index: "06",
      title: "Exclusive Destinations",
      description: "Discover off-the-beaten-path locations only available to travelers with Infinite Journeys.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative py-16 md:py-24">
      {/* Premium Minimal Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-slate-200/50 via-slate-300 to-slate-200/50" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-slate-200/50 via-slate-300 to-slate-200/50" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-slate-200/50 via-slate-300 to-slate-200/50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Modern Asymmetric Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
          
          {/* Left Column: Premium Brand Panel (Sticky) */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
                Why Infinite Journeys
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Crafting Unforgettable Experiences
              </h2>
              <div className="w-16 h-[3px] bg-blue-600 mt-4 rounded-full" />
            </div>
            
            <p className="text-base text-slate-500 font-light leading-relaxed">
              We curate immersive journeys tailored to your curiosity, matching luxury service with authentic discovery. Every detail is meticulously shaped by travel experts.
            </p>

            {/* Decorative Compass Outline Seal */}
            <div className="pt-6 hidden lg:block opacity-20">
              <svg className="w-32 h-32 text-slate-400 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8m-6-6l4 4m0 0l4-4m-4 4v8" />
              </svg>
            </div>
          </div>

          {/* Right Column: 2/3 Grid Area (Benefits Grid & Stats Dashboard) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Unified, Structured Stats Dashboard Widget */}
            <div className="border border-slate-200/60 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100/80 overflow-hidden">
              {[
                { number: 1000, label: "Happy Travelers" },
                { number: 50, label: "Countries" },
                { number: 150, label: "Expert Guides" },
                { number: 500, label: "Tours Completed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="p-6 text-center hover:bg-slate-50/40 transition-all duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                    <CountUpAnimation target={stat.number} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-400 font-semibold tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Structured Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/70 hover:border-blue-600/30 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundImage: "radial-gradient(#e2e8f0 1.2px, transparent 1.2px)",
                    backgroundSize: "20px 20px"
                  }}
                >
                  {/* Sleek Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200/60 group-hover:bg-blue-600 transition-colors duration-300" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      {/* Premium Double Ring Icon Wrapper */}
                      <div className="p-1 rounded-2xl border border-slate-150/80 bg-slate-50/20 shadow-inner">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          {benefit.icon}
                        </div>
                      </div>
                      
                      {/* Sleek light mono index tag */}
                      <span className="font-mono text-xs font-bold text-slate-300 tracking-widest group-hover:text-blue-500/60 transition-colors duration-300">
                        {benefit.index}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Minimal arrow action link that rises on hover */}
                  <div className="flex items-center space-x-1 text-xs font-bold text-blue-600 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-6 cursor-pointer">
                    <span>Learn more</span>
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
