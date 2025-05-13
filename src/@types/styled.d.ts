import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    color: {
      button: {
        green: string;
        greenHover: string;
        red: string;
        redHover: string;
        blue: string;
        blueHover: string;
      };
    };
  }
}
