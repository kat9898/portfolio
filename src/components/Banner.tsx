import React, { useState, useEffect } from 'react';
import arrow from '../assets/img/up-arrow-svgrepo-com (2).svg';
import laptop from '../assets/img/—Pngtree—news laptop decoration illustration_4714393.png';

import './Banner.scss';

type Props = {
  homeRef: React.MutableRefObject<any>;
  contactRef: React.MutableRefObject<any>;
};

const Banner = (props: Props) => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);

  const period = 2000;
  const toRotate = ['Web Developer', 'Frontend Developer'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;

    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setloopNum(loopNum + 1);
      setDelta(1000);
    }
  };

  const handleScroll = (ref: React.MutableRefObject<any>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={props.homeRef} className="bannerContainer">
      <div className="content">
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>
          {`Hi! I'm Ekaterina `}
          <span className="wrap">{text}</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque minus, officia temporibus
          ipsam repellat dolores eveniet. Dignissimos eum quae illum vel inventore praesentium eius
          iure atque nesciunt provident, repellendus nam?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Neque minus, officia temporibus ipsam repellat dolores eveniet.
          Dignissimos eum quae illum vel inventore praesentium eius iure atque nesciunt provident,
          repellendus nam?
        </p>
        <div className="button" onClick={() => handleScroll(props.contactRef)}>
          Let's connect
          <img className="arrow" src={arrow} alt="connect img"></img>
        </div>
      </div>
      <div className="imgContainer">
        <img className="mainImg" src={laptop}></img>
      </div>
    </section>
  );
};

export default Banner;
