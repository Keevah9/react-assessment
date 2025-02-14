import React from "react";

interface PageHeaderProps {
  title: string;
  content?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, content }) => {
  return (
    <div className="py-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      {content && <p className="text-gray-600 mt-2">{content}</p>}
    </div>
  );
};

export default PageHeader;
