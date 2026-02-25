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
                <div className="absolute top-0 left-0 right-0 z-[100] px-8 lg:px-16 pt-8">
                    <nav className="max-w-[1440px] mx-auto flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <span className="text-[22px] font-semibold text-white tracking-tight flex items-start gap-0.5">
                                Saha Medical
                                <span className="text-white/70 text-[10px] font-normal mt-1 border border-white/50 rounded-full w-3 h-3 flex items-center justify-center">R</span>
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-12 text-[14px] font-medium text-white/90">
                            <a className="hover:text-white transition-colors" href="#">About</a>
                            <a className="hover:text-white transition-colors" href="#">Specialties</a>
                            <a className="hover:text-white transition-colors" href="#">Our Experts</a>
                            <a className="hover:text-white transition-colors" href="#">Careers</a>
                        </div>
                        <div className="flex items-center">
                            <a className="bg-[#0f172a] border border-white/20 text-white px-6 py-2.5 text-[14px] font-medium tracking-wide hover:bg-black transition-all rounded-full flex items-center gap-2" href="#booking">
                                <span className="material-symbols-outlined text-[18px]">person</span> Account
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
                                <a className="bg-white text-primary px-10 py-4 rounded-full text-base font-medium tracking-wide transition-all shadow-xl hover:bg-slate-100 flex items-center" href="#booking">
                                    Book your visit
                                </a>
                                <a className="bg-transparent border border-white text-white px-10 py-4 rounded-full text-base font-medium tracking-wide transition-all hover:bg-white/10 flex items-center" href="#">
                                    Discover more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-8 lg:left-16 text-white/80 hidden md:flex items-center gap-4 text-sm tracking-[0.2em] uppercase">
                        <span className="w-12 h-[1px] bg-white/40"></span>
                        Scroll Down
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

            <section ref={philosophySectionRef} className="py-24 lg:py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16 mb-20">
                    <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-8 text-[#1A2530]">ABOUT US</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-primary leading-[1.1] tracking-tight max-w-5xl">
                        Premium healthcare should be effortless. We<br className="hidden lg:block" /> remove the friction, leaving only clarity, precision,<br className="hidden lg:block" /> and profound care.
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:w-[60%] pl-0">
                        <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                            <img alt="Doctor consultation" className="w-full h-full object-cover" src={community1Img} />
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] px-8 lg:px-0 lg:pr-16 flex justify-start">
                        <div className="max-w-sm">
                            <p className="text-lg text-[#4A5D53] font-normal leading-relaxed">
                                Our clinics combine advanced technology with an atmosphere of tranquility. We believe that true wellbeing starts the moment you walk through our doors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-6 text-[#1A2530]">WHAT WE DO</span>
                        <h2 className="text-4xl lg:text-5xl font-normal text-primary tracking-tight mb-6">Our Specialties</h2>
                        <p className="text-[#4A5D53] text-lg max-w-2xl mx-auto">
                            We bring together leading professionals from every medical discipline to provide your family a cohesive, deeply personalized care plan.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-16">
                        <div className="w-full md:w-1/4 flex flex-col pt-0 lg:pt-20 border-t border-slate-100 md:border-t-0 md:border-l pl-0 md:pl-8">
                            <ul className="space-y-8 text-xl lg:text-2xl font-normal text-primary w-full mt-8 md:mt-0">
                                {specialtiesData.map((item, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => setActiveSpecialty(index)}
                                        className={`flex items-center gap-4 cursor-pointer transition-all ${activeSpecialty === index ? 'text-[#0F172A] font-medium' : 'text-[#94A3B8] hover:text-[#475569]'}`}
                                    >
                                        {activeSpecialty === index && <span className="w-2.5 h-2.5 bg-[#0F172A] shrink-0"></span>}
                                        <span className="tracking-tight">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-2/4 max-w-[500px] mx-auto">
                            <div className="aspect-[4/5] w-full overflow-hidden shadow-xl relative bg-slate-100">
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
                        <div className="w-full md:w-1/4 flex flex-col items-start pt-0 lg:pt-20">
                            <div className="transition-opacity duration-500" key={activeSpecialty}>
                                <p className="text-lg text-[#4A5D53] font-normal leading-relaxed mb-8">
                                    {specialtiesData[activeSpecialty].description}
                                </p>
                                <a className="inline-block border border-[#0F172A] text-[#0F172A] px-8 py-3 text-sm font-medium hover:bg-[#0F172A] hover:text-white transition-colors uppercase tracking-wider" href="#">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-[#F8F9FA]">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="max-w-xl">
                                <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-6 text-[#1A2530]">CONCIERGE DOCTORS</span>
                                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-primary mb-8 leading-[1.1]">
                                    Reimagining the<br />
                                    Concierge Standard
                                </h2>
                                <p className="text-lg text-[#4A5D53] font-normal leading-relaxed mb-16 max-w-lg">
                                    We don't just treat symptoms; we curate vitality. Our approach combines cutting-edge longevity science with the hospitality of a world-class resort.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    <div className="group">
                                        <div className="w-12 h-12 bg-[#1A2530] flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-xl text-white font-light">schedule</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">24/7 Elite Access</h3>
                                        <p className="text-[#4A5D53] text-[15px] font-normal leading-relaxed">Unrestricted access to world-class specialists, any time, anywhere.</p>
                                    </div>
                                    <div className="group">
                                        <div className="w-12 h-12 bg-[#1A2530] flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-xl text-white font-light">vital_signs</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">Bespoke Wellness</h3>
                                        <p className="text-[#4A5D53] text-[15px] font-normal leading-relaxed">Genomic-based protocols tailored exclusively to your biology.</p>
                                    </div>
                                    <div className="group">
                                        <div className="w-12 h-12 bg-[#1A2530] flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-xl text-white font-light">group</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">Your Care Medical Team</h3>
                                        <p className="text-[#4A5D53] text-[15px] font-normal leading-relaxed">A dedicated team of experts constantly monitoring your health.</p>
                                    </div>
                                    <div className="group">
                                        <div className="w-12 h-12 bg-[#1A2530] flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-xl text-white font-light">shield_plus</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">Preventative Care</h3>
                                        <p className="text-[#4A5D53] text-[15px] font-normal leading-relaxed">Proactive measures to stop illnesses before they start.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-end">
                            <div className="w-full lg:max-w-md aspect-[3/4] bg-slate-100 overflow-hidden shadow-xl">
                                <img alt="Luxury Care Provider" className="w-full h-full object-cover" src={doctor1Img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-6 text-[#1A2530]">OUR DOCTORS</span>
                        <h2 className="text-4xl lg:text-5xl font-normal text-primary tracking-tight mb-6">Meet Our Specialists</h2>
                        <p className="text-[#4A5D53] text-lg max-w-2xl mx-auto">
                            Read the backgrounds and expertise of our medical minds, hand-picked from the most prestigious medical institutions worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative group w-full aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[600px] bg-slate-100 overflow-hidden shadow-sm">
                            <img alt="Dr. Tariq Al-Fayed" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" src={doctor1Img} />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Dr. Tariq Al-Fayed</h3>
                                <p className="text-white/80 text-sm font-normal">Senior Cardiologist</p>
                            </div>
                        </div>

                        <div className="relative group w-full aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[600px] bg-slate-100 overflow-hidden shadow-sm">
                            <img alt="Dr. Yasmin Mansour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" src={doctor2Img} />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Dr. Yasmin Mansour</h3>
                                <p className="text-white/80 text-sm font-normal">Neurology Director</p>
                            </div>
                        </div>

                        <div className="relative group w-full aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[600px] bg-slate-100 overflow-hidden shadow-sm">
                            <img alt="Dr. Kareem Hassan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" src={doctor3Img} />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Dr. Kareem Hassan</h3>
                                <p className="text-white/80 text-sm font-normal">Integrative Medicine</p>
                            </div>
                        </div>

                        <div className="relative group w-full aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[600px] bg-slate-100 overflow-hidden shadow-sm">
                            <img alt="Dr. Layla Rahman" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" src={doctor4Img} />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Dr. Layla Rahman</h3>
                                <p className="text-white/80 text-sm font-normal">Genetic Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-[#F8F9FA] overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center mb-16">
                    <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-6 text-[#1A2530]">TESTIMONIALS</span>
                    <h2 className="text-4xl lg:text-5xl font-normal text-primary tracking-tight">What Our Patients Say</h2>
                </div>

                <div className="relative flex overflow-hidden group">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 pb-12 px-6">
                        {/* Render Array Twice for Infinite Looping Marquee */}
                        {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                            <div key={idx} className="flex-none w-[350px] md:w-[420px] bg-white border border-slate-100 shadow-sm p-10 flex flex-col justify-between min-h-[380px] hover:shadow-md transition-shadow duration-300">
                                <div className="mb-8">
                                    <div className="flex text-[#0F172A] mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                                        ))}
                                    </div>
                                    <p className="text-lg font-normal text-[#4A5D53] leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-[#0F172A]">{testimonial.name}</h4>
                                    <p className="text-sm font-normal text-slate-500">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
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

            <footer className="bg-[#0F172A] pt-24 pb-12 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                        <div className="max-w-md">
                            <span className="text-2xl font-semibold text-white tracking-tight flex items-start gap-0.5 mb-6">
                                Saha Medical
                                <span className="text-white/70 text-[10px] font-normal mt-1 border border-white/50 w-3 h-3 flex items-center justify-center">R</span>
                            </span>
                            <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
                                Premium healthcare should be effortless.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 w-full md:w-auto">
                            <div>
                                <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">Address</h4>
                                <p className="text-white/60 text-sm leading-relaxed">DIFC, Gate Village 5,<br />Dubai, UAE</p>
                            </div>
                            <div>
                                <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">Phone</h4>
                                <p className="text-white/60 text-sm leading-relaxed">+971 4 000 0000<br />+971 50 000 0000</p>
                            </div>
                            <div>
                                <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">Email</h4>
                                <p className="text-white/60 text-sm leading-relaxed">concierge@saha.com<br />medical@saha.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-16 mb-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            <div>
                                <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Pages</h5>
                                <ul className="space-y-4">
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Home</a></li>
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Services</a></li>
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Company</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Specialties</h5>
                                <ul className="space-y-4">
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Longevity</a></li>
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Aesthetics</a></li>
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Diagnostics</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Utility</h5>
                                <ul className="space-y-4">
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Privacy Policy</a></li>
                                    <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">License</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Newsletter</h5>
                                <p className="text-white/60 text-sm mb-6 leading-relaxed">Subscribe to our newsletter for the latest medical insights.</p>
                                <div className="relative">
                                    <input className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm" placeholder="Enter Email" type="email" />
                                    <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-white/40 text-xs font-normal tracking-wide">
                            © Copyright 2024 | Saha Medical Group | UAE &amp; Global
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-normal tracking-wider uppercase">Instagram</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-normal tracking-wider uppercase">LinkedIn</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-normal tracking-wider uppercase">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
