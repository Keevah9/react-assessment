'use client';
import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  link?: string;
  btnType?: "button" | "submit" | "reset";
  buttonStyle?: string;
  onClick?: () => void;
}

const DynamicButton: React.FC<ButtonProps> = ({ label, link, btnType = "button", buttonStyle = "", onClick }) => {
  const buttonClasses = `flex capitalize justify-center w-[180px] sm:min-w-[190px] items-center gap-1 rounded-full py-3.5 font-bold text-[14px] cursor-pointer ${buttonStyle}`;

  const hoverClasses = "pointer-events-none absolute border right-0 opacity-0 transition duration-300";

  const renderButton = () => (
    <button onClick={onClick} type={btnType} className={`${buttonClasses} bg-white text-black`} aria-label={label}>
      {label}
      <div className={hoverClasses} />
    </button>
  );

  return (
    <>
      {link ? (
        <Link href={link} passHref title={label}>
          {renderButton()}
        </Link>
      ) : (
        renderButton()
      )}
    </>
  );
};

export default DynamicButton;
