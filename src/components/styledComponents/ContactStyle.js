import styled from 'styled-components'

const ContactStyle = styled.section`
padding: 5rem 2rem;
color: white;
background: #222222;
width: 100%;

section h2 {
    text-align: center;
    letter-spacing: 1rem;
}

.contact-center {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
}

.left-side h4 {
    line-height: 2.25;
}

.left-side p{
    padding-bottom: 0.2rem;
    line-height: 1.9rem;
}

.contact-form input {
    width: 100%;
    height: 3em;
    text-align: start;
    margin-bottom: 1em;
}

.contact-form .message {
    height: 10em;
}

.contact-form  .submit {
    width: 28%;
    text-align: center;
    margin-left: 72%;
}
`

export default ContactStyle