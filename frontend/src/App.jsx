import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';
import Grid from './components/Grid';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // 0. Setup Lenis Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0, 0);

    let ctx = gsap.context(() => {
        // 1. Pinned Cinematic Hero Journey
        gsap.set(".hero-img-reveal", { opacity: 0, scale: 1.1 }); 
        gsap.set(".hero-start-screen", { opacity: 1, scale: 1 });
        gsap.set(".hero-fg-content", { opacity: 0, y: 30 });

        let heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero-pin",
                start: "top top",
                end: "+=150%", // Increased overall scrub distance for slower, cinematic transitions
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: [0, 1],
                    duration: 0.5,
                    ease: "power1.inOut"
                }
            }
        });

        heroTl
            // Phase 1: Logo start screen scales up and fades into darkness
            .to(".hero-start-screen", { opacity: 0, scale: 2, duration: 1.5, ease: "power2.in" })
            // Phase 2: The model image (umerch_hero_generated) fades in and scales down
            .to(".hero-img-reveal", { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, 0.5)
            // Phase 3: The actual usable hero content (text) fades in
            .to(".hero-fg-content", { opacity: 1, y: 0, duration: 1 }, 1.8)
            // Phase 4: Added scrub distance at the end so the user can look at the model image before it unpins!
            .to({}, { duration: 1.5 });

        // 3. Horizontal Run (Desktop Only)
        let mm = gsap.matchMedia();
        
        mm.add("(min-width: 769px)", () => {
            let hTrack = document.querySelector(".horizontal-track");
            if(hTrack) {
                let hPanels = gsap.utils.toArray(".h-panel");

                let hTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".scene-3",
                        pin: true,
                        scrub: 1,
                        snap: {
                            snapTo: "labels", // Snap perfectly to the center locks
                            directional: true, // Flicking the wheel snaps to the NEXT panel
                            duration: {min: 0.4, max: 0.8},
                            delay: 0,
                            ease: "power2.inOut"
                        },
                        end: () => "+=" + (hTrack.offsetWidth * 1.5)
                    }
                });

                // The "Lock and Snap" Timeline
                hTl.addLabel("panel1")
                   .to({}, { duration: 0.3 }) // Lock in center of Panel 1
                   .to(hPanels, { xPercent: -100, ease: "none", duration: 1 }) // Magnetic flight to Panel 2
                   .addLabel("panel2")
                   .to({}, { duration: 0.3 }) // Lock in center of Panel 2
                   .to(hPanels, { xPercent: -200, ease: "none", duration: 1 }) // Magnetic flight to Panel 3
                   .addLabel("panel3")
                   .to({}, { duration: 0.3 }); // Lock in center of Panel 3

                gsap.to(".floating-img", {
                    x: 150,
                    y: -50,
                    rotation: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".scene-3",
                        start: "top top",
                        end: () => "+=" + (hTrack.offsetWidth * 1.5),
                        scrub: 1
                    }
                });

                gsap.to(".floating-img-2", {
                    x: -200,
                    y: 50,
                    scale: 1.1,
                    rotation: -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".scene-3",
                        start: "top top",
                        end: () => "+=" + (hTrack.offsetWidth * 1.5),
                        scrub: 1
                    }
                });

                // Awwwards Background Text Parallax
                gsap.utils.toArray(".h-bg-text").forEach((bgText, i) => {
                    gsap.to(bgText, {
                        x: i % 2 === 0 ? "15vw" : "-15vw",
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".scene-3",
                            start: "top top",
                            end: () => "+=" + (hTrack.offsetWidth * 1.5),
                            scrub: 1
                        }
                    });
                });
            }
        });
        
        // 4. Awwwards Style Text Reveal (Word by Word with clipping)
        const splitTextWords = (selector) => {
            document.querySelectorAll(selector).forEach(el => {
                if(el.classList.contains('split-done')) return;
                const textLines = el.innerHTML.split(/<br\s*\/?>/i);
                el.innerHTML = '';
                
                textLines.forEach((lineHTML) => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = lineHTML;
                    const text = tempDiv.textContent.trim();
                    if (!text) return;
                    
                    const lineDiv = document.createElement('div');
                    lineDiv.style.display = 'block'; 
                    
                    text.split(/\s+/).forEach((word, i, arr) => {
                        const wordSpan = document.createElement('span');
                        wordSpan.style.display = 'inline-block';
                        wordSpan.style.overflow = 'hidden';
                        wordSpan.style.verticalAlign = 'bottom';
                        if(i !== arr.length - 1) wordSpan.style.marginRight = '0.25em';
                        
                        const charSpan = document.createElement('span');
                        charSpan.style.display = 'inline-block';
                        charSpan.style.transformOrigin = '0% 100%';
                        charSpan.innerText = word;
                        charSpan.classList.add('split-word');
                        
                        wordSpan.appendChild(charSpan);
                        lineDiv.appendChild(wordSpan);
                    });
                    
                    el.appendChild(lineDiv);
                });
                
                el.classList.add('split-done');
            });
        };

        splitTextWords(".section-title, .feature-content h3");

        gsap.utils.toArray(".section-title, .feature-content h3").forEach(elem => {
            gsap.from(elem.querySelectorAll('.split-word'), {
                y: "120%",
                rotationZ: 8,
                duration: 1.4,
                stagger: 0.08,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%"
                }
            });
        });

        // Simpler fade up for standard body paragraphs
        gsap.utils.toArray(".feature-content p").forEach(elem => {
            gsap.from(elem, {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%"
                }
            });
        });

        // 5. Grid Entrance
        gsap.from(".product-card", {
            y: 80,
            rotation: 2,
            scale: 0.95,
            opacity: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".shop-section",
                start: "top 75%"
            }
        });

        // 6. Feature Section Parallax
        gsap.fromTo(".feature-img", 
            { y: -50 },
            { 
                y: 50, 
                ease: "none",
                scrollTrigger: {
                    trigger: ".feature-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        );

        // 7. Magnetic Snapping for Vertical Sections
        let magnetSections = gsap.utils.toArray([".feature-section"]);
        magnetSections.forEach(sec => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top bottom",
                end: "bottom top",
                snap: {
                    snapTo: 0.5, // 0.5 means center of element aligns with center of viewport
                    duration: {min: 0.4, max: 0.8},
                    delay: 0, // Instant magnetic pull
                    ease: "power2.inOut"
                }
            });
        });
    }); // End of gsap.context

    // Cleanup on unmount
    return () => {
        ctx.revert(); // Automatically kills all ScrollTriggers created in context
        lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
          <Hero />
          <Catalogue />
          <Grid />
      </div>
      <Footer />
    </>
  );
}
