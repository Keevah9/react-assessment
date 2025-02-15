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
  const buttonClasses = `w-[180px] rounded-full py-3.5 font-bold cursor-pointer bg-white text-black hover:bg-transparent hover:text-white transition duration-300 ${buttonStyle}`;

  const renderButton = () => (
    <button onClick={onClick} className={`${buttonClasses} ${link && 'hover:border '}`} aria-label={label}>
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
