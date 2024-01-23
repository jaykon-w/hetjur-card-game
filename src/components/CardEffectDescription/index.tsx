import React, { useMemo } from "react";
import { LevelValue } from "../LevelValue";
import "./styles.css";

interface CardEffectDescriptionProps {
  title?: string;
  description: string;
  cardName: string;
}

export const CardEffectDescription: React.FC<CardEffectDescriptionProps> = ({
  title,
  description,
  cardName,
}) => {
  const effectsComponent = useMemo(() => {
    const splited = description.split(/(#l[1-4]\[\d+\]|#name)/);

    return splited.map((e) => {
      if (!/#l[1-4]\[\d+\]|#name/.test(e))
        return <span key={crypto.randomUUID()}>{e}</span>;

      if (/#l[1-4]\[\d+\]/.test(e)) {
        const [_, level, value] = e.match(/#l([1-4])\[(\d+)\]/) ?? [];

        return (
          <LevelValue level={Number(level)} key={crypto.randomUUID()}>
            {value}
          </LevelValue>
        );
      }

      if (/#name/.test(e))
        return <span key={crypto.randomUUID()}>{cardName}</span>;
    });
  }, [description]);

  const TitleEffect = () => {
    if (title) {
      return (
        <>
          <span className="effect-title" key={crypto.randomUUID()}>
            {title}
          </span>
          <span key={crypto.randomUUID()}>:</span> {effectsComponent}
        </>
      );
    }

    return effectsComponent;
  };

  return (
    <section className="card-effect-description effect">
      <TitleEffect key="234" />
    </section>
  );
};
