import React from "react";
import styles from "./styles/Button.module.scss";
import { Link } from "react-router-dom";

export enum ButtonStyle {
  ICON = "icon",
  ICON_TEXT = "icon-text",
  TEXT_ONLY = "text-only",
}

export enum ButtonDirection {
  REVERSE = "row-reverse",
  NORMAL = "row",
}

interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  fontSize?: string;
  children?: React.ReactNode;
  styleType: ButtonStyle;
  onClick?: () => void;
  disabled?: boolean;
  borderRadius?: string;
  padding?: string;
  color?: string;
  hover?: boolean;
  redirect?: boolean;
  href?: string;
  margin?: string;
  iconMargin?: string;
  flexDirection?: ButtonDirection;
}

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  styleType,
  children,
  onClick,
  fontSize,
  disabled = false,
  borderRadius,
  padding,
  color,
  hover = false,
  redirect = false,
  margin,
  iconMargin,
  href = "#",
  flexDirection,
}) => {
  const buttonClasses = [
    styles.buttonCommon,
    disabled && styles.buttonDisabled,
    hover && styles.buttonHover,
    styles[styleType],
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = `${styles.buttonContent} ${styles[styleType]}`;

  const commonProps = {
    className: buttonClasses,
    style: {
      backgroundColor,
      fontSize,
      padding,
      color,
      margin,
      borderRadius,
    },
    "aria-disabled": disabled,
    "aria-label": label || "Botón de acción",
    onClick: disabled ? undefined : onClick,
    role: redirect ? "button" : undefined,
  };

  const renderContent = () => (
    <div className={contentClasses} style={{ flexDirection }}>
      {children && (
        <span className={styles.buttonIcon} style={{ margin: iconMargin }}>
          {children}
        </span>
      )}
      {label && <span className={styles.buttonLabel}>{label}</span>}
    </div>
  );

  return redirect ? (
    <Link
      to={`${disabled ? "" : href}`}
      {...commonProps}
      tabIndex={disabled ? -1 : 0}
    >
      {renderContent()}
    </Link>
  ) : (
    <button {...commonProps} type="button" disabled={disabled}>
      {renderContent()}
    </button>
  );
};

export default React.memo(Button);
