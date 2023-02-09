import React from "react";
import "./portfolio.css";

import fruniDokan from '../../assets/furni-dokan-squre.web.app_.png';
import swift from '../../assets/swift-delivery-squere.web.app_.png';
import easy from '../../assets/easy-learning-squere.web.app_.png';

const data = [
  {
    id: 1,
    image: fruniDokan,
    title: "Furni Dokan",
    liveSite: "https://furni-dokan.web.app/",
    githubClient: "https://github.com/BayajidAlam/furni-dokan-client",
    technologies:"ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, Stripe,JWT, Tailwind CSS,Daisy Ui, React,Query, React Hook Form.",
    timePeriod: 5,
    features:[
      { id:1,
        feature:"Implemented Card Payment Method(stripe) and stored all data at MongoDB."
      },
      { id:2,
        feature:"Developed an Admin portal to manage all Sellers, all buyers and reported items."
      },
      { id:3,
        feature:"Developed a Buyer portal to manage their profile, orders, and make payments."
      },
      { id:4,
        feature:"Developed a Seller portal to add a product, product availability, manage his product and buyer."
      },
      { id:5,
        feature:"Admin Credentials will be found in the README.me file on the Client Site Github link."
      }
    ]
  },
  {
    id: 2,
    image: swift,
    title: "Swift Delivary",
    liveSite: "https://swift-delivery-9c27f.web.app/",
    githubClient: "https://github.com/BayajidAlam/swift-delivery-client",
    technologies:"ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Tailwind CSS",
    timePeriod: 3,
    features:[
      { id:1,
        feature:"Landing page designed for showcasing and updating new customers."
      },
      { id:1,
        feature:"Landing page designed for showcasing and updating new customers."
      },
      { id:1,
        feature:"Landing page designed for showcasing and updating new customers."
      }
    ]
  },
  {
    id: 3,
    image: easy,
    title: "Easy Learning",
    liveSite: "https://easy-learning-1c6cd.web.app/",
    githubClient: "https://github.com/BayajidAlam/Easy-learning-client",
    technologies:"ReactJs, NodeJs, ExpressJs,Firebase,JWT, ContextAPI, Tailwind CSS",
    timePeriod: 2,
    features:[
      { id:1,
        feature:"Implemented firebase authentication"
      },
      { id:2,
        feature:"Server is hosted on vercel"
      },
      { id:3,
        feature:"Full screen mode"
      }
    ]
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(project=>   
          <article key={project.id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="image" src={project.image} alt="" />
          </div>
          <h3>{project.title}</h3>
          <div className="portfolio_item-cta">
            <a href={project.githubClient} className="btn" target="_blank" >
              Github Client
            </a>
            <a href={project.liveSite} className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>)
        }
      </div>
    </section>
  );
};

export default Portfolio;
