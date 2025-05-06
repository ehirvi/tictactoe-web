import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      primary: string;
      secondary: string;
    };
  }
}
