import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-[100px] md:pt-0">
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <Image
              src="/img/about.jpg"
              alt="About myself"
              height={3120}
              width={4160}
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title text-xl md:text-3xl">About Me</h1>
          <p className="a-sub text-xs md:text-xl">
            Hello, everyone I'm Saleh D. Adib. You can call me, "The Jack Of All Treads, Master Of None"
          </p>
          <p className="a-desc pr-2">
            Currently I'm a student at Bangabandhu Sheikh Mujibur Rahman Science And Technology University at the department of statistics. Beside that formal introduction I'm a Full Stack Web-Developer, A Script Writer, An Stage Show Actor, A Debater, A Formar Scout, A Decent Story Writer, A Speaker and so on. There are so many things I couldn't even count. I just try everything sometime I do great things and sometime I'm am the biggest joke.
          </p>
          <div className="a-award">
            <Image
                src="/img/award.png"
                alt="Award Image"
                width={500}
                height={500}
                className="a-award-img"
                priority
            />

            <div className="a-award-texts">
              <h4 className="a-award-title">
                International Design Awards 2021
              </h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
