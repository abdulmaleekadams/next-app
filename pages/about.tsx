import { css, keyframes } from '@emotion/react'
import Page from '@layouts/pages'
import Image from 'next/image'

const rotate = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate()360deg;
    }
`

const header = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`

const pantherImg = css`
  border-radius: 50%;
`

const bio = css`
  margin-top: 5ch;

  p {
    max-width: 60ch;
    margin: 0 auto;
  }

  > p + p {
    margin-top: 3ch;
  }
`

const footer = css`
  margin-top: 5ch;
  text-align: right;
  margin-right: 5ch;
`

const About = () => {
  return (
    <Page>
      <section css={header}>
        <Image
          css={pantherImg}
          src="/wakanda.webp"
          width={200}
          height={350}
          alt="Wakanda Movie Cover"
        />
        <h2>Black Panther</h2>
      </section>
      <section css={bio}>
        <p>
          Black Panther: Wakanda Forever is a 2022 superhero film, based on the
          Marvel Comics superhero of the same name. The film is a sequel to
          Black Panther and Avengers: Endgame. It is the thirtieth film in the
          Marvel Cinematic Universe, and the seventeenth installment of Phase
          Four. The film was released on November 11, 2022.
        </p>
        <p>
          {`The film is written and directed by Ryan Coogler and stars Letitia Wright as Shuri/Black Panther, Lupita Nyong'o as Nakia, Danai Gurira as Okoye, Winston Duke as M'Baku, Florence Kasumba as General Ayo, Dominique Thorne as Riri Williams/Ironheart, Michaela Coel as Aneka, Tenoch Huerta as Namor, with Martin Freeman as Agent Everett Ross, and Angela Bassett as Queen Mother Ramonda.`}
        </p>
      </section>
      <section css={footer}>
        <small>Source: </small>
        <a
          href="https://marvelcinematicuniverse.fandom.com/wiki/Black_Panther:_Wakanda_Forever"
          rel="noopener noreferrer"
        >
          Marvel Cinematic Universe Wiki
        </a>
      </section>
    </Page>
  )
}

export default About
