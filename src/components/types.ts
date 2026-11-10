import type { Properties } from 'csstype';

export type ColType = {
  display: string;
  width: string;
  height: string;
};

export type ScreenType = {
  display: string;
};

export type AppType = {
  height: string;
  fontFamily: string;
  fontSize: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
  display: string;
};

export type ParamsType = {
  backgroundColor: string | null;
  color: string | null;
  height: number;
  minHeight: number;
  minWidth: number;
  recover: boolean | null | (() => never);
  reps: number;
  time: number;
  width: number;
  app?: AppType;
  col?: Properties<string | number, string & {}>;
  len?: number;
  recycle?: boolean;
  screen?: ScreenType;
  row?: {
    display: string;
  };
};

export interface AppInterface {
  params: ParamsType;
  credits: string[];
}
