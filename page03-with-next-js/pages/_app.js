import React from "react";
import Head from "next/head";
import "../css/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Pizza box</title>
      </Head>
      <div className="container">
        <header>
          <img src="/img/logo.png" alt="logo" />
          <ul>
            <li>Products</li>
            <li>Videos</li>
            <li>About Company</li>
            <li>Contact Us</li>
          </ul>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src="/img/basket.svg" alt="" />
            <div className="circle">1</div>
          </motion.button>
        </header>
        <div className="content">
          <div className="desc">
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <span className="name">Pizza box</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna frigilla
              urna.
            </p>
            <div className="price">$15.98</div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/img/basket-white.svg" alt="" />
              <span>Add to a cart</span>
            </motion.button>
          </div>
          <div className="img-container">
            <img src="/img/pizza.jpg" alt="pizza" />
          </div>
          <div className="social-buttons">
            <div className="links">
              <a herf="" target="_blank">
                Instagram
              </a>
              <a herf="" target="_blank">
                Facebook
              </a>
            </div>
            <div className="btns">
              <motion.button
                className="btn-l"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/img/arrow-l.svg" alt="" />
              </motion.button>
              <motion.button
                className="btn-r"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/img/arrow-r.svg" alt="" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
