import './app-label.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize all characters
   */
  allCaps?: boolean;

  /**
   * Label Color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font Color
   */
  fontColor?: string;
}

export const AppLabel = ({
  label,
  size = 'normal',
  allCaps,
  color = 'text-primary',
  fontColor,
}: Props) => {
  return (
    <span className={`label ${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
