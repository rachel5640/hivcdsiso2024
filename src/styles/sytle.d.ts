import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string;
      red: string;
      pink: string;
      skyblue: string;
      blue: string;
      lightgreen: string;
      yellow: string;
      teal: string;
      purple: string;
      white: string;
      grey: string;
      darkgrey: string;
    };

    fonts: {
      title1: SerializedStyles;
      title2: SerializedStyles;
      title3: SerializedStyles;
      title4: SerializedStyles;
      title5: SerializedStyles;
      title6: SerializedStyles;
      title7: SerializedStyles;
      title8: SerializedStyles;

      body1: SerializedStyles;
      body1_1: SerializedStyles;
      body1_2: SerializedStyles;
      body2: SerializedStyles;
      body3: SerializedStyles;
      body4: SerializedStyles;
      body5: SerializedStyles;
      body5_2: SerializedStyles;
      body6: SerializedStyles;
      body7: SerializedStyles;
      body8_1: SerializedStyles;
      body8_2: SerializedStyles;
      body9: SerializedStyles;
      body10: SerializedStyles;

      label1: SerializedStyles;
      label2: SerializedStyles;
      label3: SerializedStyles;
      label4: SerializedStyles;
      label5: SerializedStyles;
    };
  }
}
