import { ReactNode } from "react";


/* ---------------------------------- */
/*            BUTTON PROPS            */
/* ---------------------------------- */
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

/* ---------------------------------- */
/*            LAYOUT PROPS            */
/* ---------------------------------- */
export interface LayoutProps {
  children: ReactNode;
}

/* ---------------------------------- */
/*          HEADER PROPS (None)       */
/* ---------------------------------- */
// Header currently has no props, but defining an interface makes future updates easier.
export interface HeaderProps {}

/* ---------------------------------- */
/*          FOOTER PROPS (None)       */
/* ---------------------------------- */
export interface FooterProps {}