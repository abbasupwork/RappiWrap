import React, { useState, useRef } from "react";
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
    component: RewindScreen,
    type: "generic",
    screenNumber: 9,
    showPagination: true,
    pageNumber: 9,
    totalPages: 13,
  },
  {
    component: RewindScreen,
    type: "generic",
    screenNumber: 10,
    showPagination: true,
    pageNumber: 10,
    totalPages: 13,
  },
  {
    component: RewindScreen,
    type: "generic",
    screenNumber: 11,
    showPagination: true,
    pageNumber: 11,
    totalPages: 13,
  },
  {
    component: RewindScreen,
    type: "generic",
    screenNumber: 12,
    showPagination: true,
    pageNumber: 12,
    totalPages: 13,
  },
  {
    component: RewindScreen,
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > MIN_SWIPE_DISTANCE;
    const isDownSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isUpSwipe && currentScreen < TOTAL_SCREENS - 1) {
      setCurrentScreen(currentScreen + 1);
    } else if (isDownSwipe && currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleSwipeUp = () => {
    if (currentScreen < TOTAL_SCREENS - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

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
