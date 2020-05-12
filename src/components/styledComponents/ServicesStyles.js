import styled from 'styled-components'

const ServicesStyle = styled.section`
.services {
    padding: 5rem 0;
  }
  .services {
    background: hsl(0 0% 0% / 1);
    text-align: center;
  }
  .services-center {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
  }
  .service span {
    display: inline-block;
    color: var(--mainWhite);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .services h4 {
    color: var(--mainWhite);
  }
  .services h6 {
    letter-spacing: var(--mainSpacing);
    color: var(--mainWhite);
  }
  .services p {
    width: 80%;
    margin: 0 auto;
    color: #ffffff8c;
  }
  @media screen and (min-width: 992px) {
    .services-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .services p {
      width: 100%;
    }
  }
`

export default ServicesStyle