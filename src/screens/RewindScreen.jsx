import BaseRewindScreen from "../components/BaseRewindScreen";
import "./RewindScreen.css";

const RewindScreen = ({
  screenNumber,
  pageNumber,
  totalPages = 13,
  className = "",
  children,
}) => {
  return (
    <>
      <BaseRewindScreen
        className={`rewind-screen rewind-screen-${screenNumber} ${className}`}
      >
        {children || (
          <div className="rewind-screen-content">
            {/* Add your content here for screen {screenNumber} (Page {pageNumber}/13) */}
          </div>
        )}

        {/* Page Indicator */}
        {pageNumber && (
          <div className="page-indicator">
            <div className="indicator-oval">
              <span>
                {pageNumber}/{totalPages}
              </span>
            </div>
            <div className="indicator-chevron">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </BaseRewindScreen>
    </>
  );
};

export default RewindScreen;
