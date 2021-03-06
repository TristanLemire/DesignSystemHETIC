import { rem } from "polished";

export const colors = {
  primary: {
    dark: "#DAAD10",
    base: "#F5CC7C",
    light: "#FBEAAF",
    lighter: "#FCF6E0",
  },
  secondary: {
    dark: "#063773",
    base: "#3A84DC",
    light: "#83B8F9",
    lighter: "#D1E4FC",
  },
  tertiary: {
    dark: "#891E61",
    base: "#FA06A5",
    light: "#EA75C5",
    lighter: "#F6CFEB",
  },
  error: {
    dark: "#7E1B17",
    base: "#C54039",
    light: "#EE7E79",
    lighter: "#FBE8E8",
  },
  success: {
    dark: "#0B8257",
    base: "#52B596",
    light: "#83EBC6",
    lighter: "#D5F8EB",
  },
  neutral: {
    darker: "#272724",
    dark: "#3C3B38",
    base: "#777773",
    light: "#D5D5D2",
    lighter: "#EFEEEA",
  },
  background: {
    white: "#FBFBFE",
    whiter: "#FFFFFF",
  },
  font: {
    dark: "#191501",
    grey: "#707072",
    white: "#FBFBFE",
  },
};

export const space = {
  xxxs: rem(2),
  xxs: rem(4),
  xs: rem(8),
  sm: rem(12),
  base: rem(16),
  md: rem(24),
  lg: rem(32),
  xl: rem(40),
  xxl: rem(48),
  xxxl: rem(64),
};

export const radius = {
  base: "2px",
  lg: "4px",
  xl: "8px",
};

export const borderWidth = {
  base: "4px",
};

export type FontWeight = 300 | 400 | 500 | 700;
export const font: {
  weight: Record<"light" | "regular" | "medium" | "bold", FontWeight>;
  size: Record<
    "xxxs" | "xxs" | "xs" | "s" | "sm" | "base" | "md" | "lg" | "xl" | "xxl",
    string
  >;
  lineHeight: Record<"regular" | "paragraph" | "title", string>;
  letterSpacing: Record<"regular" | "tracked", string>;
} = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xxxs: rem(10),
    xxs: rem(12),
    xs: rem(16),
    s: rem(18),
    sm: rem(20),
    base: rem(24),
    md: rem(28),
    lg: rem(32),
    xl: rem(36),
    xxl: rem(48),
  },
  lineHeight: {
    regular: "none",
    paragraph: "125%",
    title: "150%",
  },
  letterSpacing: {
    regular: "none",
    tracked: "0.02em",
  },
};

export const boxShadow = "0px 0px 46px #c8c8c8, 0px 0px 13px #e7e7e7";

export type fontStyleType = {
  fontSize: string;
  fontSizeMobile: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string;
  fontStyle: string;
  span: boolean;
};
export const fontType: {
  logo: fontStyleType;
  title: fontStyleType;
  regular: fontStyleType;
  action: fontStyleType;
  textButton: fontStyleType;
  link: fontStyleType;
  input: fontStyleType;
  user: fontStyleType;
} = {
  logo: {
    fontSize: font.size.xxl,
    fontWeight: font.weight.bold,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.lg,
    span: false,
  },
  title: {
    fontSize: font.size.xl,
    fontWeight: font.weight.bold,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.md,
    span: false,
  },
  regular: {
    fontSize: font.size.xs,
    fontWeight: font.weight.regular,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.xs,
    span: false,
  },
  action: {
    fontSize: font.size.xxs,
    fontWeight: font.weight.bold,
    letterSpacing: font.letterSpacing.tracked,
    lineHeight: font.lineHeight.paragraph,
    fontStyle: "normal",
    fontSizeMobile: font.size.xxs,
    span: true,
  },
  textButton: {
    fontSize: font.size.sm,
    fontWeight: font.weight.bold,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.sm,
    span: false,
  },
  link: {
    fontSize: font.size.xs,
    fontWeight: font.weight.bold,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.xs,
    span: true,
  },
  input: {
    fontSize: font.size.xs,
    fontWeight: font.weight.light,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "italic",
    fontSizeMobile: font.size.xs,
    span: false,
  },
  user: {
    fontSize: font.size.sm,
    fontWeight: font.weight.light,
    letterSpacing: font.letterSpacing.regular,
    lineHeight: font.lineHeight.regular,
    fontStyle: "normal",
    fontSizeMobile: font.size.sm,
    span: false,
  },
};
