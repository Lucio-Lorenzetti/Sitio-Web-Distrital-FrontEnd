// src/components/Institucional/NewsCard.tsx
import React, { useState } from "react";
import Modal from "../common/Modal";
import "../../styles/Institucional/Institucional.css";

interface NewsCardProps {
  title: string;
  content: string;
  date: string;
  image?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, content, date, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="news-card">
      {image && <img src={image} alt={title} className="news-image" />}
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p>{content.substring(0, 120)}...</p>
        <button className="btn" onClick={handleOpenModal}>Leer más</button>
      </div>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>{title}</h2>
          <p className="news-date">{date}</p>
          <p>{content}</p>
        </Modal>
      )}
    </div>
  );
};

export default NewsCard;
