import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      ecoGreen: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      primary: string;
      secondary: string;
      muted: string;
      accent: string;
      background: string;
      foreground: string;
      border: string;
    };

    typography: {
      sizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
      };
      weights: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      letterSpacing: {
        tight: string;
        tighter: string;
      };
      colors: {
        highlightGreen: string;
        dark: string;
        mid: string;
      };
    };

    spacing: {
      spaceY: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;
      gap: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;
      padding: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;
      margin: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;
    };

    breakpoints: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      "2xl": number;
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };

    shadows: {
      sm: string;
      base: string;
      lg: string;
    };

    animations: {
      fadeIn: string;
      scaleIn: string;
      hoverScale: string;
      hoverCardShadow: string;
    };
  }
}
