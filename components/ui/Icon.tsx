interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: string;
  size?: number;
}

export const Icon = ({ id, size = 24, style, ...props }: IconProps) => (
  <svg width={size} height={size} style={style} {...props}>
    <use href={`/sprite.svg#${id}`} />
  </svg>
);
