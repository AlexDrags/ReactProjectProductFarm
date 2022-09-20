import React from "react";
import Button from "/src/components/ui/button/button";
import Card from "/src/components/ui/card/card";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";
export default function Advantages({ advantages }) {
  return advantages && advantages.length ? (
    <section className="advantages">
      <div className="advantages__wrapper">
        <Title size={TitleSize.MIDDLE}>Почему фермерские продукты лучше?</Title>
        <ul className="advantages__list">
          {advantages.map((advantage) => (
            <li className="advantages__item" key={advantage.id}>
              <Card {...advantage} />
            </li>
          ))}
        </ul>
        <Button>Купить</Button>
      </div>
    </section>
  ) : null;
}
