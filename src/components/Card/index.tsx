import React, { ReactNode, useCallback } from "react";
import { FaCoins } from "react-icons/fa";
import { FaAnglesUp } from "react-icons/fa6";
import { useDeck } from "../../stores/deckStore";
import { AttributeContainer } from "../AttributeContainer";
import { CardEffectDescription } from "../CardEffectDescription";
import { Statistic } from "../Statistic";
import "./styles.css";

export interface CardProps {
  id: `${string}-${string}-${string}-${string}-${string}`;
  type: "hero" | "enemy" | "invite" | "item";
  name: string;
  statistics: {
    atk: [number, number, number, number];
    def: [number, number, number, number];
    spd: [number, number, number, number];
    hp: [number, number, number, number];
  };
  rewards: {
    gold: [number, number, number, number];
    xp: [number, number, number, number];
  };
  image?: string;
  effects: {
    title?: string;
    description: string;
  }[];
  citation: string;
}

export interface CardAspects {
  back?: boolean;
  tools?: ReactNode;
  count?: number;
  zoomed?: boolean;
}

export const Card: React.FC<CardProps & CardAspects> = ({
  id,
  type,
  name,
  statistics,
  rewards,
  image,
  effects = [],
  citation,
  back,
  tools,
  count,
  zoomed,
}) => {
  const activeZoom = useDeck((state) => state.activeZoom);
  const setActiveZoom = useDeck((state) => state.setActiveZoom);

  const isZoomAtive = zoomed || activeZoom === id;

  const clickHadler = useCallback(() => {
    if (isZoomAtive) return setActiveZoom(null);
    return setActiveZoom(id);
  }, [isZoomAtive, setActiveZoom]);

  return (
    <div className={`card-wrapper ${isZoomAtive && !back ? "zoom" : ""}`}>
      {isZoomAtive ? <div className="tools">{tools}</div> : null}
      <div className={`card ${type}`} onClick={clickHadler}>
        {back ? (
          <section className="back-card">{count}</section>
        ) : (
          <>
            <section className="image">
              <img src={image} />
            </section>
            <aside className="attributes">
              <AttributeContainer color="green">
                <Statistic text="ATK" progression={statistics.atk}></Statistic>
              </AttributeContainer>
              <AttributeContainer color="green">
                <Statistic text="DEF" progression={statistics.def}></Statistic>
              </AttributeContainer>
              {type === "hero" ? (
                <AttributeContainer color="blue">
                  <Statistic text="AP" progression={statistics.spd}></Statistic>
                </AttributeContainer>
              ) : (
                <AttributeContainer color="green">
                  <Statistic
                    text="SPD"
                    progression={statistics.spd}
                  ></Statistic>
                </AttributeContainer>
              )}
            </aside>
            <aside className="health">
              <AttributeContainer color="purple">
                <Statistic text="HP" progression={statistics.hp}></Statistic>
              </AttributeContainer>
            </aside>
            <aside className="name">{name}</aside>
            <section className="description">
              <section className="effects">
                {effects.map((e, i) => (
                  <CardEffectDescription
                    title={e.title}
                    description={e.description}
                    key={`card-effect-${e.title}-${i}`}
                    cardName={name}
                  />
                ))}
              </section>
              <div className="quote">{citation}</div>
            </section>
            <footer className="rewards">
              <Statistic
                icon={<FaCoins size="9" />}
                direction="row"
                progression={rewards.gold}
              ></Statistic>
              <Statistic
                icon={<FaAnglesUp size="9" />}
                direction="row"
                align="end"
                progression={rewards.xp}
              ></Statistic>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};
