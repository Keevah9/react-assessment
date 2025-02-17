'use client';
import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  link?: string;
  buttonStyle?: string;
  onClick?: () => void;
}

const DynamicButton: React.FC<ButtonProps> = ({ label, link, buttonStyle, onClick }) => {
  const buttonClasses = `w-[180px] rounded-full py-3.5 font-bold cursor-pointer  bg-uiblack text-uiblack dark:bg-uiwhite dark:text-uiblack hover:bg-transparent dark:hover:text-white hover:text-black transition duration-300 ${buttonStyle}`;

  const renderButton = () => (
    <button onClick={onClick} className={`${buttonClasses} ${link && 'dark:hover:border-uiwhite hover:border-uiblack '}`} aria-label={label}>
      {label}
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
