import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secondary: #04D361;
    --color-secondary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  .loader {
	display: inline-block;
	position: relative;
	width: 64px;
	height: 64px;

	&-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		span {
			color: var(--color-button-tex);
			margin-bottom: 50px;
		}
	}

	div {
		position: absolute;
		border: 4px solid var(--color-button---color-button-text);
		opacity: 1;
		border-radius: 50%;
		animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

		&:nth-child(2) {
			animation-delay: -0.5s;
		}
	}
}

@keyframes loader {
	0% {
		top: 28px;
		left: 28px;
		width: 0;
		height: 0;
		opacity: 1;
	}

	100% {
		top: -1px;
		left: -1px;
		width: 58px;
		height: 58px;
		opacity: 0;
	}
}
`;
