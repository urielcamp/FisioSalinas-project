import axios from "axios";
import { useEffect, useState } from "react";

const CardReview = ({ review }) => {
  return (
    <div className="card">
      <div className="data">
        <p>{review?.Nombre} {review?.Apellido}</p>
      </div>
        <div className="stars">
          {Array.from({ length: review?.Estrellas || 0 }).map((_, i) => (
            <span key={i} className="fa-solid fa-star"></span>
          ))}
          {Array.from({ length: 5 - (review?.Estrellas || 0) }).map((_, i) => (
            <span key={`e${i}`} className="fa-regular fa-star"></span>
          ))}
        </div>
        <div className="comment">
          <p>{review?.Comentario}</p>
        </div>
      
    </div>
  );
};

export default CardReview;
