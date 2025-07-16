import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

type RouterExtraProps = {
  isPublic: boolean;
  suspenseFallback?: ReactNode;
  listChildren?: CustomRouterProps[];
};
export type CustomRouterProps = RouteProps & RouterExtraProps;

export type CustomTabCardProps = {
  activeTabKey?: string;
  setActiveTabKey: (key: string) => void;
}