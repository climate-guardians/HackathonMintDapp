import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { mediaByIndex } from "../assets/media";
import { Typography, Button } from 'antd';
import { NavLink } from "react-router-dom";

const { Title } = Typography;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "20px",
    color: "#041836",
    marginTop: "10px",
    padding: "15px",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "36px",
    letterSpacing: '-1.5px',
    fontWeight: '500',
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: '-1.5px',
  },
  subheader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "28px",
    color: "#041836",
    marginTop: "10px",
    padding: "5px",
  },
};

const EmblaCarousel = ({ slides, options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 2000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
    <div>
    
    <Typography>
    <Title style={styles.header}>Claim your rewards</Title>
    
    <Title style={styles.subheader}>Guardian NFT's</Title>
  
    </Typography>
    
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="A cool Climate Guardian."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
      <div className="wrapper">
        <Button type="primary">
          <NavLink to="/nftBalance">Check your NFTs</NavLink>
        </Button>
      </div>
    </div>
    </>
  );
};

export { EmblaCarousel };