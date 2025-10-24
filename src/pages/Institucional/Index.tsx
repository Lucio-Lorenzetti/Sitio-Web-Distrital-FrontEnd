// src/pages/Institucional/Index.tsx
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/Institucional/NewsCard";
import { getNoticias } from "../../services/eventos";
import "../../styles/Institucional/Institucional.css";

interface Noticia {
  id: number;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const Institucional: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNoticias()
      .then((res) => setNoticias(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando noticias...</p>;

  return (
    <div className="institucional-page">
      <h1>Institucional</h1>
      <div className="news-list">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            title={noticia.title}
            content={noticia.content}
            date={noticia.date}
            image={noticia.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Institucional;
