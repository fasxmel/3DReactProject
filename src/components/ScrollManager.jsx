import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

// mange the active section
const ScrollManager = (props) => {
  const {section, onSectionChange} = props;



   // get the current scroll position  
  const data = useScroll();
  // get the last scroll position useing useRef to prevent re-rendering
  const lastScrollPosition = useRef(0);
  // check if the section is animating
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");
  

  useEffect(() => {
    gsap.to(data.el, {
        duration: 1,
        scrollTop: section * data.el.clientHeight,
        onStart: () => {
            isAnimating.current = true;
        },
        onComplete: () => {
            isAnimating.current = false;
        }
    })
  }, [section]);


  useFrame(() => {
    // check if the section is animating
    if (isAnimating.current) {
    // store the last scroll position
      lastScrollPosition.current = data.scroll.current;
      return;
    }

    const currentSection = Math.floor(data.scroll.current *  data.pages);

    if (data.scroll.current > lastScrollPosition.current && currentSection === 0) {
      onSectionChange(1);
    }
    if(data.scroll.current < lastScrollPosition.current && data.scroll.current < 1 /(data.pages - 1)) {
      onSectionChange(0);
    }
    lastScrollPosition.current = data.scroll.current;
  });


    return null;
}

export default ScrollManager;