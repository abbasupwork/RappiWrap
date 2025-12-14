import "./BaseRewindScreen.css";

const BaseRewindScreen = ({ children, className = "" }) => {
  return (
    <>
      <div className={`rewind-screen-base ${className}`}>{children}</div>
    </>
  );
};

export default BaseRewindScreen;
