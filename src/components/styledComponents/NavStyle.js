import styled from 'styled-components'

const NavStyle = styled.nav`
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    background: var(--offWhite);
    z-index: 1;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
  }

  .nav-header img {
    height: 2em;
  }

  .nav-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .navBtn {
    background: transparent;
    width: 50%;
    margin: 0 auto;
    text-transform: capitalize;
  }

  .nav-icon {
    font-size: 1.5rem;
    color: var(--primaryColor);
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    transition: var(--mainTransition);
    list-style-type: none;
  }
  .nav-links a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--mainSpacing);
  }
  .nav-links a:hover {
    color: var(--primaryColor);
  }
  
  .show-nav {
    height: 40vh;
  }
  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }
    .nav-links {
      height: auto;
      display: flex;
      margin-left: 4rem;
    }
    .nav-links a {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }
`

export default NavStyle