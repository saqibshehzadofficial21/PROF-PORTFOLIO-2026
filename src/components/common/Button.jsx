import { useMemo } from "react";

const baseClasses = `
  inline-flex items-center justify-center w-fit whitespace-nowrap
  px-8 py-4 font-bold rounded-lg
  transition-all duration-300 cursor-pointer text-center uppercase tracking-wide
  text-gray-900 dark:text-black
  bg-gradient-to-r from-yellow-400 to-yellow-300
  hover:from-amber-600 hover:to-amber-500
  hover:text-white
  hover:shadow-xl hover:shadow-amber-700/40
  active:scale-[0.97]
`;

export default function Button({
  as: Component = "button",
  className = "",
  children,
  ...props
}) {
  const combinedClassName = useMemo(() => {
    const extra = className?.trim();
    return extra ? `${baseClasses} ${extra}` : baseClasses;
  }, [className]);

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
