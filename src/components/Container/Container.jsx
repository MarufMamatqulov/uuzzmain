import cn from "classnames";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn({
        ["mx-auto max-w-7xl w-full  px-2 sm:px-3  lg:px-5"]: true,
        [className]: Boolean(className),
      })}
    >
      {children}
    </div>
  );
};

export default Container;
