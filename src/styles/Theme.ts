import { css, DefaultTheme } from 'styled-components';

const colors = {
  orange: '#ff4802',
  red: '#e30629',
  pink: '#fa538f',
  skyblue: '#4ac0eb',
  blue: '#0768f5',
  lightgreen: '#35de25',
  yellow: '#fed302',
  teal: '#00837a',
  purple: '#a31aa3',
  white: '#ffffff',
  grey: '#c7c7c7',
  darkgrey: '#4d4d4d',
};

const fonts = {
  title1: css`
    font-family: 'megazoid', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 5.8rem;
  `,
  title2: css`
    font-family: 'megazoid', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3.8rem;
  `,
  title3: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.4rem;
    line-height: 158%;
  `,
  title4: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.7rem;
    line-height: 158%;
  `,
  title5: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.2rem;
    line-height: 158%;
  `,
  title6: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.1rem;
    line-height: 170%;
  `,
  title7: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 158%;
  `,
  title8: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 158%;
  `,
  body1: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.5rem;
    line-height: 164%;
  `,
  body1_1: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 2.5rem;
    line-height: 145%;
  `,
  body1_2: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 2.5rem;
    line-height: 164%;
  `,
  body2: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 2.4rem;
    line-height: 145%;
  `,
  body3: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 2.1rem;
    line-height: 145%;
  `,
  body4: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 156%;
    letter-spacing: -2%;
  `,
  body5: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 160%;
    letter-spacing: -2%;
  `,
  body5_2: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 150%;
  `,
  body6: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.7rem;
    line-height: 158%;
  `,
  body7: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.7rem;
    line-height: 156%;
    letter-spacing: -2%;
  `,
  body8_1: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 156%;
    letter-spacing: -1%;
  `,
  body8_2: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 156%;
    letter-spacing: -2%;
  `,
  body9: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 164%;
  `,
  body9_2: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 164%;
  `,

  body10: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 158%;
  `,
  body11: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.35rem;
    line-height: 158%;
  `,
  label1: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.6rem;
    line-height: 156%;
  `,
  label2: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2.1rem;
    line-height: 170%;
  `,
  label3: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 156%;
  `,
  label4: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.3rem;
    line-height: 128%;
  `,
  label5: css`
    font-family: 'ABC_ROM_Condensed', 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 170%;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
