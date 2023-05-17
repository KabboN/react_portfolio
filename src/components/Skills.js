import reactimg from "../assets/skills/react.png";
import nextimg from "../assets/skills/nextjs.png";
import htmlimg from "../assets/skills/html.png";
import cssimg from "../assets/skills/css.png";
import javascriptimg from "../assets/skills/javascript.png";
import pythonimg from "../assets/skills/Python.png";
import mysqlimg from "../assets/skills/mysql (2).png";
import tailwindimg from "../assets/skills/tailwind.png";
import phpimg from "../assets/skills/PHP.png";
import nodeimg from "../assets/skills/node.png";
import bootstrapimg from "../assets/skills/bootstrap.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={reactimg} alt="" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                              <img src={nextimg} alt="" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                              <img src={htmlimg} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                              <img src={cssimg} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                              <img src={javascriptimg} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                              <img src={pythonimg} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                              <img src={mysqlimg} alt="" />
                                <h5>Mysql</h5>
                            </div>
                            <div className="item">
                              <img src={tailwindimg} alt="" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                              <img src={phpimg} alt="" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                              <img src={bootstrapimg} alt="" />
                                <h5>Bootsrap</h5>
                            </div>
                            <div className="item">
                              <img src={nodeimg} alt="" />
                                <h5>Node.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
