import React from 'react';

interface DocumentItemProps {
  title: string;
  link: string;
}

const DocumentItem = ({ title, link }: DocumentItemProps) => {
  return (
    <div className="document-item">
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </div>
  );
};

export default DocumentItem;
