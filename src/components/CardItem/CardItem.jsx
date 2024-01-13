/* eslint-disable max-len */
import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <div className={s.image}>
      <img src="./image/goods/photo.png" alt="card" />
    </div>
    <div className={s.info}>
      <span className={s.title}>Кресло с подлокотниками</span>
      <span className={s.price}>5000₽</span>
    </div>
    <button className={s.button}>В корзину</button>
    <button className={s.heart}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff">
        <path
          d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </article>
);
