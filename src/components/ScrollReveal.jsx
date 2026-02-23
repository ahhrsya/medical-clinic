import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({
    children,
    scrollContainerRef,
    pinRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    wordAnimationEnd = 'bottom bottom',
    start = 'top top',
    end = '+=100%',
    as: Component = 'h2' // Allow polymorphic elements, default to h2
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const processTextNode = (textStr, indexPrefix) => {
            return textStr.split(/(\s+)/).map((word, index) => {
                if (word.match(/^\s+$/)) return word;
                return (
                    <span className="inline-block word align-middle" key={`${indexPrefix}-${index}`}>
                        {word}
                    </span>
                );
            });
        };

        if (typeof children === 'string') {
            return processTextNode(children, 'text');
        }

        if (Array.isArray(children)) {
            return children.map((child, i) => {
                if (typeof child === 'string') {
                    return processTextNode(child, `txt-${i}`);
                }
                return (
                    <span className="inline-block word icon-word align-middle mx-2 md:mx-4" key={`node-${i}`}>
                        {child}
                    </span>
                );
            });
        }

        return children;
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        gsap.fromTo(
            el,
            { transformOrigin: '0% 50%', rotate: baseRotation },
            {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: pinRef?.current || el,
                    pin: !!pinRef,
                    scroller,
                    start: start,
                    end: end,
                    scrub: true
                }
            }
        );

        const wordElements = el.querySelectorAll('.word:not(.icon-word)');
        const iconElements = el.querySelectorAll('.icon-word');

        gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: 'opacity' },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: pinRef?.current || el,
                    scroller,
                    start: start,
                    end: end,
                    scrub: true
                }
            }
        );

        if (enableBlur) {
            gsap.fromTo(
                wordElements,
                { filter: `blur(${blurStrength}px)` },
                {
                    ease: 'none',
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: pinRef?.current || el,
                        scroller,
                        start: start,
                        end: end,
                        scrub: true
                    }
                }
            );
        }

        // Independent pop-in animations for icons
        iconElements.forEach((icon, i) => {
            gsap.fromTo(
                icon,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: 'back.out(2)',
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: icon,
                        scroller,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [scrollContainerRef, pinRef, enableBlur, baseRotation, baseOpacity, blurStrength, start, end]);

    return (
        <Component ref={containerRef} className={containerClassName}>
            <span className={textClassName}>{splitText}</span>
        </Component>
    );
};
