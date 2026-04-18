interface IconProps {
  id: string;
  className?: string;
  size?: number;
}

export const Icon = ({ id, className, size = 20 }: IconProps) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
