import styled from 'styled-components'

const FooterStyle = styled.footer `
background: #F7F7F7;

  .footer-center {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    padding: 1em;
  }

  .contact h5, .socials h5, .address h5, .payment h5 {
    font-size: 1.5rem;
    margin-bottom: 0.7em;
  }

  .socials a{
    font-size: 2em;
  }

  .payment {
    font-size: 4em;
  }

  .contact a {
    width: 100%;
    display: inline-block;
    padding-top: 1em;
  }

  .socials a, .contact a{
    color: var(--mainblack);
    padding-right: 1em;
    text-decoration: none;
  }
`

export default FooterStyle