import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import hero1Img from '../assets/hero-1.jpg';
import hero2Img from '../assets/hero-2.jpg';
import hero3Img from '../assets/hero-3.jpg';
import aboutImg from '../assets/about.jpg';
import section3Img from '../assets/section-3.jpg';
import doctor1Img from '../assets/doctor-1.jpg';
import doctor2Img from '../assets/doctor-2.jpg';
import doctor3Img from '../assets/doctor-3.jpg';
import doctor4Img from '../assets/doctor-4.jpg';
import community1Img from '../assets/community-1.jpg';
import community2Img from '../assets/community-2.jpg';
import community3Img from '../assets/community-3.jpg';
import community4Img from '../assets/community-4.jpg';

export const Landing = () => {
    const philosophySectionRef = useRef(null);
    const expertsCarouselRef = useRef(null);
    const testimonialsRef = useRef(null);
    const communityCardsRef = useRef(null);
    const discoverSectionRef = useRef(null);
    const [isTestimonialsHovered, setIsTestimonialsHovered] = useState(false);
    const [activeSpecialty, setActiveSpecialty] = useState(0);
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    const heroSlides = [hero1Img, hero2Img, hero3Img];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    useEffect(() => {
        if (!communityCardsRef.current) return;
        const cards = communityCardsRef.current.querySelectorAll('.community-card');

        cards.forEach((card, index) => {
            // High staggered start positions for aggressive overlap effect
            const yStart = index % 2 === 0 ? 350 : 500;

            gsap.fromTo(
                card,
                {
                    y: yStart,
                    opacity: 0
                },
                {
                    y: -200, // Pull them way up to overlap the sticky header
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: communityCardsRef.current, // Use the container as the scrub trigger 
                        start: "top 80%",
                        end: "top -10%", // Continue animating until container reaches past top
                        scrub: 1.5, // Smoother scrub
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === communityCardsRef.current) t.kill();
            });
        };
    }, []);

    const specialtiesData = [
        {
            title: "Longevity",
            image: aboutImg,
            description: "Advanced diagnostics and preventative genomics designed to extend your healthspan. Our protocols anticipate future needs."
        },
        {
            title: "Aesthetics",
            image: doctor2Img,
            description: "Refine your natural beauty with world-class, non-invasive procedures tailored to your unique anatomical structure."
        },
        {
            title: "Concierge",
            image: section3Img,
            description: "Unmatched 24/7 medical access. We manage your health globally, ensuring peace of mind wherever you are."
        },
        {
            title: "Diagnostics",
            image: doctor4Img,
            description: "State-of-the-art imaging and biomarker analysis to detect the invisible and treat the preventable."
        },
        {
            title: "Preventative Care",
            image: doctor3Img,
            description: "Proactive, holistic regimens focusing on total body optimization and hormonal balance."
        }
    ];

    const scrollExperts = (direction) => {
        if (expertsCarouselRef.current) {
            const scrollAmount = 450; // card w-[420px] + gap-8 [32px]
            expertsCarouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Discover Section GSAP text animations removed as per request (text stays static while images scroll)

    const testimonialsData = [
        {
            quote: "Being able to access a specialist without waiting weeks has been a game-changer. Saha Medical's service is absolutely top-notch.",
            name: "Daniel Kardashian",
            location: "Los Angeles, CA",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkyNRRMNagTr1Cr9jCveI_OzWjN2iWGCqeglIEsLwlUlrm25s8iiLaS3SLQYxumeS5tg8LLGJFv54LbCWdf2UnKaLYtUVTrYAs4UmO8PKiVHFN75wWcARIMlvW0OWVhzU5Nb24vzhmOSSABMy13l35XH2vj2ANSdl0Z7VgdkhcTdvrbPs0xIz09mzTkj6gqmjlRiqih29XoyDPlyWrJXUG8HC8ujnmBdAk7VDNubIKWUCVz8ZIWc-2F8lUnXlYYag3aFysytbJtLQ"
        },
        {
            quote: "The personalized longevity protocols make me feel more in control of my future. Truly a lifesaver in every sense.",
            name: "Megan Fox",
            location: "Washington, NY",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjNc-wRRfpaovjug2v99Ycu9S5uSNSReXh4Hci9gBfGmnYg4LE1a1DXuFfHHRe-XOwssycSAIZo2nLZoOcY1LeWGjqBZkU9NdDlHo1_k__GDo17juW5LAtcSzmvGzWOXtitmpuiWCOStfyyhPCfFNrvVG1jptXoEe7Bu6Hcw5cmkaA2kM6f3SsNnAcIeKR3ZGUJRk7G21n9XDQnX_BBE37oFnkQqjaVvXEfZCw4tM6lbEOFgICBTBWAhCP19i9cNW7rlOtVHqetoY"
        },
        {
            quote: "Exceptional quality across the board. The discretion and proficiency here will save you both time and worry.",
            name: "Jessica Mercedes",
            location: "CEO @ Scars can",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd5z1hq5PnsDUSniuqRWx2dikXBF7bxisEzyJf9nkQDbKc9bT2Ctbqfhj-evzpSXSEEqBBHhxTwNBxjR4OXausMqVt5JiFwmkwmqvObUNpa33AxGOLuDSQloyr-MB0l1gvzt3MiIGp6qDX-6JvsHJWDAbe1NFcBMApJl_dAS934a-910EG8hTe9c4ZNp1acveR2w6EJ8fLicynx0_yjEQfS9VkFI7kfsXlvFbZDIVMOYFhKZ6o5Lus-KT8MvyMfVIxY_jWDNvL-xw"
        },
        {
            quote: "I've never experienced medical attention with this degree of precision. It feels like having a private research institute dedicated solely to me.",
            name: "Alexandra Sterling",
            location: "London, UK",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbzoirvAE6tKBRDVx0Tfl-VBM9hE23WVg_9PndZ5tod4UO0_5B_NfHke-zkGb5IMKgYMzaVXOFW3nuiS5EFqjHDv000VQJbwhQb8BScNN5TQCIJAojgSTfQ2JCSNPxx5ma2v0Y7fnLYMOxyCt3kKU3dyggQ9lgouGZYlAeP-IVxb4E19shUAHf7dzgrUTj7HdauZmC5402Z7qD7Fgn0LeC7UNm4bUP2NLfNwI0qhmf_Lna-0OefqKY1-OS-mdTERv7TwI88IhaMbQ"
        },
        {
            quote: "From the first consultation, the frictionless concierge experience completely changed my perspective on preventative healthcare.",
            name: "Julian Hargrove",
            location: "Dubai, UAE",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2kfYV84N9qWrbj5Mkyz81DOZSCjbVW9C_I7u8iv5yihRbccdM6cLTksjKWmxtK9lBHS185QhTkPjO5XjR29FzC3LThXrfnrY6-KBtO9hjMq6Ckt_fqo0mw2Wzlcb6d4TI8v6HG-hcIsKRzXn_q0yON178JO4VWN_Y-JJpfgpKsZBDd2F2ffFrP26YUKSyQMWkQ31tuUw_NIy8ETGuXvbeRtaAszPQlg8IgqT2s_KFKLZAJNbfg3OmB_YyiuyKrlggY_-zjukGro"
        },
        {
            quote: "The seamless integration of world-class experts into a unified, actionable health strategy is unparalleled. Breathtaking service.",
            name: "Elena Rostova",
            location: "Geneva, CH",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtMaenr1pEd7mz66asqnPlfz-18K06fXkuuW0uSk7UJQb0uQPOdx1P3CWHGPBGrc5iKWHzzleMCGI73xdOiEndZhNj9AG9kSGXYDzNDFXEE55nFlASRo0Y9DgVHhjJmt-WV7VWTsCwcZ0lG78jPQLbwBde_v1giQDRZs3WsF2wpDdOoiBcdI5fqp_7tzHZZfBu3gOt-k_4zN-cH-M2CZID33Fv035DbfUu2Uld7gbE37X4yCzN_Qg8vMbIQ8E5K7uR0FxI4DLotw4"
        }
    ];

    return (
        <>
            <div className="relative min-h-screen flex flex-col">
                <div className="absolute inset-0 z-0 bg-black">
                    {heroSlides.map((slide, index) => (
                        <img
                            key={index}
                            alt={`Luxury Medical Facility ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${currentHeroSlide === index ? 'opacity-80' : 'opacity-0'}`}
                            src={slide}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute top-6 left-0 right-0 z-[100] px-4 md:px-8">
                    <nav className="max-w-[1280px] mx-auto bg-white rounded-full py-2.5 pl-8 pr-2 flex justify-between items-center shadow-lg">
                        <div className="flex items-center">
                            <span className="text-[22px] font-semibold text-[#294cbe] tracking-tight flex items-start gap-0.5">
                                Saha Medical
                                <span className="text-slate-400 text-[10px] font-normal mt-1 border border-slate-300 rounded-full w-3 h-3 flex items-center justify-center">R</span>
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium text-slate-500">
                            <a className="hover:text-slate-900 transition-colors" href="#">About</a>
                            <a className="hover:text-slate-900 transition-colors" href="#">Specialties</a>
                            <a className="hover:text-slate-900 transition-colors" href="#">Our Experts</a>
                            <a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
                        </div>
                        <div className="flex items-center">
                            <a className="bg-[#294cbe] text-white px-6 py-2.5 text-[13px] font-medium tracking-wide hover:bg-[#1a348c] transition-all rounded-full flex items-center gap-2" href="#booking">
                                Schedule Visit <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </a>
                        </div>
                    </nav>
                </div>
                <header className="relative flex-grow flex items-center z-10">
                    <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full pb-20">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] mb-8 text-white">
                                Exquisite healthcare,<br />redefined for you.
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-normal mb-12 max-w-xl leading-relaxed">
                                Immediate access to world-class specialists in an environment of absolute tranquility and bespoke medical excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <a className="bg-white text-primary px-10 py-4 rounded-full text-base font-medium tracking-wide transition-all shadow-xl hover:bg-slate-100 flex items-center gap-2" href="#booking">
                                    Free Consultation <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                                <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-base font-medium tracking-wide transition-all hover:bg-white/20 flex items-center gap-2" href="#">
                                    Contact Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Floating Socials and Slider Controls */}
                    <div className="absolute bottom-10 right-8 lg:bottom-16 lg:right-16 flex flex-col items-end gap-12 z-[100] text-white">
                        {/* Social Icons Stack */}
                        <div className="flex flex-col gap-4">
                            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-all backdrop-blur-sm">
                                <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-all backdrop-blur-sm">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-all backdrop-blur-sm">
                                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>

                        {/* Slider Progress Info */}
                        <div className="flex items-center gap-4 text-white">
                            <span className="text-sm font-medium tracking-widest relative z-10 mr-1">
                                0{currentHeroSlide + 1} / 0{heroSlides.length}
                            </span>
                            <div className="flex items-center gap-2">
                                {heroSlides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-[2px] rounded-full overflow-hidden bg-white/40 transition-all duration-500 ${currentHeroSlide === i ? 'w-10' : 'w-4'}`}
                                    >
                                        {currentHeroSlide === i && (
                                            <div
                                                className="h-full bg-white"
                                                style={{ animation: 'fillProgress 5s linear forwards' }}
                                            ></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <section ref={philosophySectionRef} className="py-32 lg:py-48 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="mb-20">
                        <span className="text-accent text-xs font-normal tracking-[0.3em] uppercase block mb-4">Our Philosophy</span>
                        <ScrollReveal
                            as="h2"
                            baseRotation={2}
                            blurStrength={8}
                            containerClassName="max-w-5xl"
                            textClassName="font-sans text-5xl md:text-6xl lg:text-7xl font-normal text-primary leading-[1.1] tracking-tight inline-block"
                            start="top 90%"
                            end="bottom 40%"
                        >
                            {'True luxury is the absence of friction. '}
                            <span className="inline-flex items-center justify-center w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-emerald-500 rounded-full text-white shadow-xl align-middle transform -translate-y-2 lg:-translate-y-3">
                                <span className="material-symbols-outlined text-[32px] md:text-[40px]">workspace_premium</span>
                            </span>
                            {' We strip away the unnecessary, '}
                            <span className="inline-flex items-center justify-center w-[80px] h-[50px] md:w-[100px] md:h-[60px] bg-blue-600 rounded-full text-white shadow-xl align-middle transform -translate-y-2 lg:-translate-y-3">
                                <span className="material-symbols-outlined text-[28px] md:text-[36px]">filter_alt</span>
                            </span>
                            {' leaving only clarity, precision, '}
                            <span className="inline-flex items-center justify-center w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-rose-500 rounded-[20px] md:rounded-[24px] text-white shadow-xl align-middle transform -translate-y-2 lg:-translate-y-3 rotate-6">
                                <span className="material-symbols-outlined text-[32px] md:text-[40px]">favorite</span>
                            </span>
                            {' and profound care.'}
                        </ScrollReveal>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 items-end">
                        <div className="w-full lg:w-3/4">
                            <div className="rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl">
                                <img alt="World-class medical team in a luxury clinical setting" className="w-full h-full object-cover" src={aboutImg} />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 pb-4">
                            <div className="max-w-xs">
                                <p className="text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
                                    The Art of Subtraction. Saha Medical was born from a vision to simplify healthcare and make it seamless for the world's most discerning individuals. By removing administrative complexity, we return your most valuable asset: time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 lg:py-48 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-24">
                        <span className="text-accent text-sm font-normal tracking-[0.4em] uppercase block mb-6">Core Specialties</span>
                        <h2 className="text-5xl lg:text-7xl font-normal text-primary tracking-tight">Our Specialties</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                        <div className="flex-1 w-full lg:w-auto order-2 lg:order-1 flex justify-center lg:justify-end">
                            <ul className="space-y-8 text-xl lg:text-2xl font-normal text-primary w-full max-w-xs lg:text-right">
                                {specialtiesData.map((item, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => setActiveSpecialty(index)}
                                        className={`flex items-center lg:justify-end gap-4 cursor-pointer transition-colors ${activeSpecialty === index ? 'text-primary' : 'text-slate-300 hover:text-slate-400'}`}
                                    >
                                        {activeSpecialty === index && <span className="w-2 h-2 rounded-full bg-primary hidden lg:inline-block"></span>}
                                        <span className="tracking-tight">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-[1.5] order-1 lg:order-2 w-full max-w-[600px]">
                            <div className="aspect-[3.5/4.5] w-full rounded-[40px] overflow-hidden shadow-2xl relative">
                                {specialtiesData.map((item, index) => (
                                    <img
                                        key={index}
                                        alt={item.title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSpecialty === index ? 'opacity-100 relative' : 'opacity-0'}`}
                                        src={item.image}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full lg:w-auto order-3 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[160px]">
                            <div className="max-w-xs transition-opacity duration-500" key={activeSpecialty}>
                                <p className="text-lg text-slate-600 font-normal leading-relaxed mb-10">
                                    {specialtiesData[activeSpecialty].description}
                                </p>
                                <a className="inline-block border border-primary text-primary rounded-full px-10 py-4 text-sm font-normal tracking-widest uppercase hover:bg-primary hover:text-white transition-all" href="#">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 lg:py-48 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="max-w-xl">
                                <h2 className="text-5xl lg:text-7xl font-normal tracking-tight text-primary mb-10 leading-[1.05]">
                                    Reimagining the<br />
                                    Concierge Standard
                                </h2>
                                <p className="text-xl text-slate-600 font-normal leading-relaxed mb-16">
                                    We don't just treat symptoms; we curate vitality. Our approach combines cutting-edge longevity science with the hospitality of a world-class resort.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                                    <div className="group">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-accent/20">
                                            <span className="material-symbols-outlined text-4xl text-accent font-light">schedule</span>
                                        </div>
                                        <h3 className="text-2xl font-normal text-primary mb-3">24/7 Elite Access</h3>
                                        <p className="text-base text-slate-500 font-normal leading-relaxed">Unrestricted access to world-class specialists, any time, anywhere.</p>
                                    </div>
                                    <div className="group">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-accent/20">
                                            <span className="material-symbols-outlined text-4xl text-accent font-light">vital_signs</span>
                                        </div>
                                        <h3 className="text-2xl font-normal text-primary mb-3">Bespoke Wellness</h3>
                                        <p className="text-base text-slate-500 font-normal leading-relaxed">Genomic-based protocols tailored exclusively to your biology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl">
                                <img alt="Luxury Care" className="w-full h-full object-cover" src={section3Img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 lg:py-48 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-normal text-primary tracking-tight leading-[1.1]">Our Experts</h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => scrollExperts('left')} className="w-14 h-14 rounded-full border border-hero-blue text-hero-blue flex items-center justify-center hover:bg-hero-blue hover:text-white transition-all">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button onClick={() => scrollExperts('right')} className="w-14 h-14 rounded-full border border-hero-blue text-hero-blue flex items-center justify-center hover:bg-hero-blue hover:text-white transition-all">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div ref={expertsCarouselRef} className="flex overflow-x-auto gap-8 pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory -mx-8 px-8 lg:-mx-16 lg:px-16">
                        <div className="flex-none w-[340px] md:w-[420px] h-[550px] relative group rounded-[40px] overflow-hidden snap-start shadow-xl">
                            {/* Base full image */}
                            <img alt="Dr. Tariq Al-Fayed" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={doctor1Img} />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            {/* Name label at bottom (default view) */}
                            <div className="absolute bottom-10 left-10 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. Tariq Al-Fayed</h3>
                                <p className="text-white/90 font-medium drop-shadow-md">Senior Cardiologist</p>
                            </div>
                            {/* Hover Details Overlay */}
                            <div className="absolute inset-0 bg-card-grey p-10 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <img alt="Dr. Tariq Al-Fayed" className="w-full h-full object-cover" src={doctor1Img} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">Dr. Tariq Al-Fayed</h3>
                                <p className="text-lg text-slate-500 mb-6 font-normal transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">Senior Cardiologist</p>
                                <p className="text-base text-slate-600 leading-relaxed mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    World-renowned specialist with over 20 years of experience in preventative cardiovascular medicine and longevity science.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 mt-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">March 28</span>
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">Cardiology</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-none w-[340px] md:w-[420px] h-[550px] relative group rounded-[40px] overflow-hidden snap-start shadow-xl">
                            {/* Base full image */}
                            <img alt="Dr. Yasmin Mansour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={doctor2Img} />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            {/* Name label at bottom (default view) */}
                            <div className="absolute bottom-10 left-10 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. Yasmin Mansour</h3>
                                <p className="text-white/90 font-medium drop-shadow-md">Neurology Director</p>
                            </div>
                            {/* Hover Details Overlay */}
                            <div className="absolute inset-0 bg-card-grey p-10 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <img alt="Dr. Yasmin Mansour" className="w-full h-full object-cover" src={doctor2Img} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">Dr. Yasmin Mansour</h3>
                                <p className="text-lg text-slate-500 mb-6 font-normal transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">Neurology Director</p>
                                <p className="text-base text-slate-600 leading-relaxed mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    Pioneer in neuro-regenerative therapies and cognitive optimization, specializing in early detection and prevention protocols.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 mt-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">April 02</span>
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">Neurology</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-none w-[340px] md:w-[420px] h-[550px] relative group rounded-[40px] overflow-hidden snap-start shadow-xl">
                            {/* Base full image */}
                            <img alt="Dr. Kareem Hassan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={doctor3Img} />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            {/* Name label at bottom (default view) */}
                            <div className="absolute bottom-10 left-10 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. Kareem Hassan</h3>
                                <p className="text-white/90 font-medium drop-shadow-md">Integrative Medicine</p>
                            </div>
                            {/* Hover Details Overlay */}
                            <div className="absolute inset-0 bg-card-grey p-10 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <img alt="Dr. Kareem Hassan" className="w-full h-full object-cover" src={doctor3Img} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">Dr. Kareem Hassan</h3>
                                <p className="text-lg text-slate-500 mb-6 font-normal transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">Integrative Medicine</p>
                                <p className="text-base text-slate-600 leading-relaxed mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    Expert in holistic wellness and hormonal optimization, focusing on personalized biological protocols for high-performance individuals.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 mt-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">March 25</span>
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">Integrative</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-none w-[340px] md:w-[420px] h-[550px] relative group rounded-[40px] overflow-hidden snap-start shadow-xl">
                            {/* Base full image */}
                            <img alt="Dr. Layla Rahman" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={doctor4Img} />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            {/* Name label at bottom (default view) */}
                            <div className="absolute bottom-10 left-10 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">Dr. Layla Rahman</h3>
                                <p className="text-white/90 font-medium drop-shadow-md">Genetic Specialist</p>
                            </div>
                            {/* Hover Details Overlay */}
                            <div className="absolute inset-0 bg-card-grey p-10 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <img alt="Dr. Layla Rahman" className="w-full h-full object-cover" src={doctor4Img} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">Dr. Layla Rahman</h3>
                                <p className="text-lg text-slate-500 mb-6 font-normal transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">Genetic Specialist</p>
                                <p className="text-base text-slate-600 leading-relaxed mb-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    Leading the frontier of genomic diagnostics and CRISPR-based preventative assessments for generational health planning.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 mt-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">April 10</span>
                                    <span className="bg-pill-blue text-text-pill-blue px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider">Genomics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 lg:py-48 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <h2 className="text-5xl md:text-6xl font-normal text-primary mb-20 tracking-tight">What Our Clients Say</h2>

                    <div className="relative flex overflow-hidden group -mx-8 px-8 lg:-mx-16 lg:px-16">
                        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 pb-12">
                            {/* Render Array Twice for Infinite Looping Marquee */}
                            {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                                <div key={idx} className="flex-none w-[380px] md:w-[450px] bg-card-grey rounded-[32px] p-12 flex flex-col justify-between min-h-[500px] hover:-translate-y-2 transition-transform duration-300">
                                    <p className="text-3xl md:text-4xl font-normal text-primary leading-tight tracking-tight">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center gap-5 mt-10">
                                        <img alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border border-white shadow-sm" src={testimonial.image} />
                                        <div>
                                            <h4 className="text-lg font-normal text-primary">{testimonial.name}</h4>
                                            <p className="text-sm font-normal text-slate-500">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={discoverSectionRef} className="relative w-full bg-white text-[#11181C] min-h-[250vh] font-sans tracking-tight border-t border-neutral-100">
                {/* Sticky Center Text - Ensure CTA remains centered exactly in sticky frame */}
                <div className="sticky top-0 h-screen overflow-hidden w-full flex flex-col justify-center items-center z-20 pointer-events-none">
                    <div className="relative w-full max-w-xl text-center px-4">

                        {/* CTA Text Block */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto w-full">
                            <h3 className="text-secondary text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#1A2530]">START YOUR JOURNEY</h3>
                            <h2 className="text-5xl md:text-[64px] lg:text-[64px] font-medium text-primary tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
                                Your Health Is Your<br />Greatest Legacy
                            </h2>
                            <p className="text-[#4A5D53] text-lg lg:text-xl max-w-[600px] mx-auto mb-12 leading-relaxed font-normal">
                                Protect what matters most. Join an elite community dedicated to proactive health, long-term vitality, and a future without medical friction.
                            </p>
                            <a href="#book" className="flex items-center bg-[#0F172A] text-white px-10 py-4 hover:bg-black transition-colors rounded-full group text-base font-medium tracking-wide shadow-lg hover:shadow-xl">
                                Book Your Private Session
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scrolling Images Container */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
                    <div className="max-w-[1440px] mx-auto h-full relative">

                        {/* Image 1 (Left High) */}
                        <div className="absolute top-[5vh] left-[2%] md:left-[5%] w-[35%] md:w-[25%] lg:w-[20%] flex flex-col">
                            <div className="w-full aspect-[3/4] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={community1Img} alt="Patient Care" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                        {/* Image 2 (Right High) */}
                        <div className="absolute top-[25vh] right-[2%] md:right-[5%] w-[30%] md:w-[22%] lg:w-[18%] flex flex-col">
                            <div className="w-full aspect-[4/5] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={community3Img} alt="Family Health" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                        {/* Image 3 (Left Mid) */}
                        <div className="absolute top-[80vh] left-[8%] md:left-[12%] w-[40%] md:w-[28%] lg:w-[22%] flex flex-col">
                            <div className="w-full aspect-[3/5] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={doctor2Img} alt="Doctor Consultation" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                        {/* Image 4 (Right Mid) */}
                        <div className="absolute top-[110vh] right-[6%] md:right-[10%] w-[35%] md:w-[26%] lg:w-[20%] flex flex-col">
                            <div className="w-full aspect-[1/1] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={doctor1Img} alt="Specialist" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                        {/* Image 5 (Left Low) */}
                        <div className="absolute top-[150vh] left-[4%] md:left-[8%] w-[30%] md:w-[24%] lg:w-[18%] flex flex-col">
                            <div className="w-full aspect-[4/3] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={community2Img} alt="Team" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                        {/* Image 6 (Right Low) */}
                        <div className="absolute top-[180vh] right-[8%] md:right-[12%] w-[45%] md:w-[32%] lg:w-[26%] flex flex-col">
                            <div className="w-full aspect-[3/4] bg-slate-100 rounded-none overflow-hidden border border-white/10 shadow-sm">
                                <img src={doctor4Img} alt="Research" className="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-primary pt-24 pb-12 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center group hover:bg-slate-900/60 transition-all">
                            <span className="material-symbols-outlined text-accent text-3xl mb-4">location_on</span>
                            <h4 className="text-white text-lg font-normal mb-2">Clinic Address</h4>
                            <p className="text-white/60 text-sm leading-relaxed">DIFC, Gate Village 5,<br />Dubai, United Arab Emirates</p>
                        </div>
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center group hover:bg-slate-900/60 transition-all">
                            <span className="material-symbols-outlined text-accent text-3xl mb-4">call</span>
                            <h4 className="text-white text-lg font-normal mb-2">Phone Number</h4>
                            <p className="text-white/60 text-sm leading-relaxed">+971 4 000 0000<br />+971 50 000 0000</p>
                        </div>
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center group hover:bg-slate-900/60 transition-all">
                            <span className="material-symbols-outlined text-accent text-3xl mb-4">mail</span>
                            <h4 className="text-white text-lg font-normal mb-2">Email Address</h4>
                            <p className="text-white/60 text-sm leading-relaxed">concierge@vvipclinic.com<br />medical@vvipclinic.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 relative z-10">
                        <div className="lg:col-span-4">
                            <h3 className="text-white text-3xl font-normal mb-8">Sign up to Newsletter!</h3>
                            <div className="relative max-w-sm">
                                <input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors" placeholder="Enter Email..." type="email" />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors">
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                                <div>
                                    <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Pages</h5>
                                    <ul className="space-y-4">
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Home</a></li>
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Services</a></li>
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Company</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Specialties</h5>
                                    <ul className="space-y-4">
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Longevity</a></li>
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Aesthetics</a></li>
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Diagnostics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Utility</h5>
                                    <ul className="space-y-4">
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">Privacy Policy</a></li>
                                        <li><a className="text-white/50 hover:text-white text-sm transition-colors" href="#">License</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                        <p className="text-white/30 text-xs font-normal tracking-wide">
                            © Copyright 2024 | Saha Medical Medical Group | UAE &amp; Global
                        </p>
                        <p className="text-white/30 text-xs font-normal tracking-wide">
                            Designed &amp; Developed By <span className="text-white/60">Saha Medical Creative</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
