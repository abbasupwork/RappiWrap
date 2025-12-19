import React, { useState, useRef, useEffect } from "react";
import RewindIntroScreen from "../screens/RewindIntroScreen";
import RewindScreen from "../screens/RewindScreen";
import RewindScreen1 from "../screens/RewindScreen1";
import RewindScreen2 from "../screens/RewindScreen2";
import RewindScreen3 from "../screens/RewindScreen3";
import RewindScreen4 from "../screens/RewindScreen4";
import RewindScreen5 from "../screens/RewindScreen5";
import RewindScreen6 from "../screens/RewindScreen6";
import RewindScreen7 from "../screens/RewindScreen7";
import RewindScreen8 from "../screens/RewindScreen8";
import RewindScreen9 from "../screens/RewindScreen9";
import RewindScreen10 from "../screens/RewindScreen10";
import RewindScreen11 from "../screens/RewindScreen11";
import RewindScreen12 from "../screens/RewindScreen12";
import RewindScreen13 from "../screens/RewindScreen13";

const REWIND_CONTENT_SCREENS = 13;
const MIN_SWIPE_DISTANCE = 50;

const REWIND_SCREENS = [
  { component: RewindIntroScreen, type: "intro", showPagination: false },
  {
    component: RewindScreen1,
    type: "generic",
    screenNumber: 1,
    showPagination: true,
    pageNumber: 1,
    totalPages: 13,
  }, // Screen 1/13
  {
    component: RewindScreen2,
    type: "generic",
    screenNumber: 2,
    showPagination: true,
    pageNumber: 2,
    totalPages: 13,
  },
  {
    component: RewindScreen3,
    type: "generic",
    screenNumber: 3,
    showPagination: true,
    pageNumber: 3,
    totalPages: 13,
  },
  {
    component: RewindScreen4,
    type: "generic",
    screenNumber: 4,
    showPagination: true,
    pageNumber: 4,
    totalPages: 13,
  },
  {
    component: RewindScreen5,
    type: "generic",
    screenNumber: 5,
    showPagination: true,
    pageNumber: 5,
    totalPages: 13,
  },
  {
    component: RewindScreen6,
    type: "generic",
    screenNumber: 6,
    showPagination: true,
    pageNumber: 6,
    totalPages: 13,
  },
  {
    component: RewindScreen7,
    type: "generic",
    screenNumber: 7,
    showPagination: true,
    pageNumber: 7,
    totalPages: 13,
  },
  {
    component: RewindScreen8,
    type: "generic",
    screenNumber: 8,
    showPagination: true,
    pageNumber: 8,
    totalPages: 13,
  },
  {
    component: RewindScreen9,
    type: "generic",
    screenNumber: 9,
    showPagination: true,
    pageNumber: 9,
    totalPages: 13,
  },
  {
    component: RewindScreen10,
    type: "generic",
    screenNumber: 10,
    showPagination: true,
    pageNumber: 10,
    totalPages: 13,
  },
  {
    component: RewindScreen11,
    type: "generic",
    screenNumber: 11,
    showPagination: true,
    pageNumber: 11,
    totalPages: 13,
  },
  {
    component: RewindScreen12,
    type: "generic",
    screenNumber: 12,
    showPagination: true,
    pageNumber: 12,
    totalPages: 13,
  },
  {
    component: RewindScreen13,
    type: "generic",
    screenNumber: 13,
    showPagination: true,
    pageNumber: 13,
    totalPages: 13,
  },
];

const TOTAL_SCREENS = REWIND_SCREENS.length;

const SwipeableRewindContainer = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    touchEndY.current = null;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartY.current === null || touchEndY.current === null) return;

    const distance = touchStartY.current - touchEndY.current;

    if (distance > MIN_SWIPE_DISTANCE && currentScreen < TOTAL_SCREENS - 1) {
      // Swipe UP
      setCurrentScreen((prev) => prev + 1);
    } else if (distance < -MIN_SWIPE_DISTANCE && currentScreen > 0) {
      // Swipe DOWN
      setCurrentScreen((prev) => prev - 1);
    }
  };

  const handleSwipeUp = () => {
    if (currentScreen < TOTAL_SCREENS - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = "";
      body.style.overscrollBehavior = "";
      html.style.overflow = "";
    };
  }, []);

  // useEffect(() => {
  //   const el = containerRef.current;
  //   if (!el) return;

  //   el.addEventListener("touchmove", (e) => e.preventDefault(), {
  //     passive: false,
  //   });

  //   return () => {
  //     el.removeEventListener("touchmove", (e) => e.preventDefault());
  //   };
  // }, []);

  return (
    <>
      <div
        className="swipeable-rewind-container"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="screen-wrapper"
          style={{ transform: `translateY(-${currentScreen * 100}vh)` }}
        >
          {REWIND_SCREENS.map((screenConfig, index) => {
            const ScreenComponent = screenConfig.component;
            const props = {
              onSwipeUp: handleSwipeUp,
              currentScreenIndex: index,
              isActive: currentScreen === index,
            };

            // Add screenNumber, pageNumber, and totalPages props
            if (screenConfig.type === "generic") {
              props.screenNumber = screenConfig.screenNumber;
            }
            if (screenConfig.showPagination) {
              props.pageNumber = screenConfig.pageNumber;
              props.totalPages =
                screenConfig.totalPages || REWIND_CONTENT_SCREENS;
            }

            return (
              <div key={index} className="screen-slide">
                <ScreenComponent {...props} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SwipeableRewindContainer;
