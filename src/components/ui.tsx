import type { Property } from "csstype";
// eslint-disable-next-line
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ButtonHTMLAttributes, FC, PropsWithChildren, useState } from "react";
import type { ReadonlyDeep } from "type-fest";

export type PFC<P = {}> = FC<
  PropsWithChildren<P & ReadonlyDeep<{ className?: string }>>
>;

export type BoxProps = Readonly<{
  width?: number;
  height?: number;
  px?: number;
  py?: number;
  gap?: number;
}>;
export const Box: PFC<BoxProps> = ({
  width,
  height,
  px,
  py,
  gap,
  ...props
}) => (
  <div
    css={{
      position: "relative",
      boxSizing: "border-box",
      width,
      height,
      paddingLeft: px ? 2 ** px : undefined,
      paddingRight: px ? 2 ** px : undefined,
      paddingTop: py ? 2 ** py : undefined,
      paddingBottom: py ? 2 ** py : undefined,
      gap: gap ? 2 ** gap : undefined,
    }}
    {...props}
  />
);

const justifyMap = {
  start: "start",
  end: "end",
  center: "center",
  around: "space-around",
  between: "space-between",
};

export type FlexProps = BoxProps &
  ReadonlyDeep<{
    direction?: "column" | "row";
    justify?: keyof typeof justifyMap;
    align?: "strech" | "start" | "end" | "center" | "baseline";
  }>;
export const Flex: PFC<FlexProps> = ({
  direction = "column",
  justify = "start",
  align = "strech",
  ...props
}) => (
  <Box
    css={{
      display: "flex",
      flexDirection: direction,
      justifyContent: justifyMap[justify],
      alignItems: align,
    }}
    {...props}
  />
);

export type VBetweenProps = Omit<FlexProps, "direction" | "justify">;
export const VBetween: PFC<VBetweenProps> = (props) => (
  <Flex direction="row" justify="between" {...props} />
);

export type CenterProps = BoxProps & ReadonlyDeep<{ gap?: number }>;
export const Center: PFC<CenterProps> = ({ gap, ...props }) => (
  <Box
    css={{
      display: "grid",
      gap: gap ? 2 ** gap : undefined,
      placeContent: "center",
    }}
    {...props}
  />
);

export type StackProps = Omit<FlexProps, "justify">;
export const Stack: PFC<StackProps> = (props) => <Flex {...props} />;

export type VStackProps = Omit<StackProps, "direction">;
export const VStack: PFC<VStackProps> = (props) => (
  <Stack direction="row" {...props} />
);

export type HStackProps = Omit<StackProps, "direction">;
export const HStack: PFC<HStackProps> = (props) => (
  <Stack direction="column" {...props} />
);

export type GridProps = BoxProps & ReadonlyDeep<{ gap?: number }>;
export const Grid: PFC<GridProps> = ({ gap, ...props }) => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, 200px)`,
      gap: gap ? 2 ** gap : undefined,
    }}
    {...props}
  />
);

export const H1: PFC<{}> = (props) => (
  <h1
    css={{
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: 12,
    }}
    {...props}
  />
);

export type TextProps = {
  px?: number;
  py?: number;
  align?: Property.TextAlign;
  size?: 1 | 2 | 3;
};
export const Text: PFC<TextProps> = ({ px, py, align, ...props }) => (
  <span
    css={{
      paddingLeft: px ? 2 ** px : undefined,
      paddingRight: px ? 2 ** px : undefined,
      paddingTop: py ? 2 ** py : undefined,
      paddingBottom: py ? 2 ** py : undefined,
      color: "rgb(100,100,100)",
      fontSize: 10,
      textAlign: align,
    }}
    {...props}
  />
);

export type UITextProps = TextProps;
export const UIText: PFC<UITextProps> = (props) => <Text {...props} />;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: PFC<ButtonProps> = ({
  onMouseDown,
  onMouseUp,
  ...props
}) => {
  const [_, setPressed] = useState(false);
  return (
    <button
      css={{
        background: "unset",
        border: "unset",
        color: "white",
        display: "block",
      }}
      onMouseDown={(e) => {
        setPressed(true);
        if (onMouseDown) {
          onMouseDown(e);
        }
      }}
      onMouseUp={(e) => {
        setPressed(false);
        if (onMouseUp) {
          onMouseUp(e);
        }
      }}
      {...props}
    />
  );
};

export type LinkProps = NextLinkProps & {};
export const Link: PFC<NextLinkProps> = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <a
        className={className}
        css={{
          color: "white",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {children}
      </a>
    </NextLink>
  );
};

export type IconButtonProps = ButtonProps;
export const IconButton: PFC<IconButtonProps> = (props) => (
  <Button {...props} />
);

export const SaveButton: PFC<IconButtonProps> = (props) => (
  <IconButton {...props}>
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 14.25L12 4.75"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 10.75L12 14.25L15.25 10.75"
      ></path>
    </svg>
  </IconButton>
);

export const Spinner: FC = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    fill="currentColor"
    className="spinner"
  >
    <path d="M1.07 7A7.009 7.009 0 0 1 8 1.006 7.009 7.009 0 0 1 14.93 7h-1.006A6.005 6.005 0 0 0 8 1.957 6.005 6.005 0 0 0 2.076 7H1.07Z" />
  </svg>
);
