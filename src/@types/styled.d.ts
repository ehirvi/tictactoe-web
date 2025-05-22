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
        greenShadow: string;
        greenHover: string;
        red: string;
        redShadow: string;
        redHover: string;
        blue: string;
        blueShadow: string;
        blueHover: string;
      };
    };
  }
}
