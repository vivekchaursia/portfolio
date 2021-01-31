import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;
  
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Made with{' '}
          {/* <a href="https://www.linkedin.com/in/vivek-chaurasia-071aa4137/" target="_blank" rel="noopener noreferrer">
            Vivek chaurasia 
          </a> */}
          <FaHeart />
          {' and '}
          <FaBeer />
        </p>
        <p className="footer__text">
          Thanks {' '}
          <a href="https://www.linkedin.com/in/neelamchaubey/" target="_blank" rel="noopener noreferrer">
            Neelam Chaubey
          </a> 
          {' '}for support
        </p>
        
        <h3> Lets go for a <FaBeer />? </h3>
        <h3> Lets go for a <FaHeart />? </h3>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
