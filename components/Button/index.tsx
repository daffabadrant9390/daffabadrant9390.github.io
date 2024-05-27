'use client';

type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  fullWidth?: boolean;
  iconElement?: JSX.Element;
  onClick?: () => void;
  customClassName?: string;
};

const Button = ({
  type,
  size,
  children,
  fullWidth,
  iconElement,
  customClassName,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        ${type === 'outlined' ? 'outline' : 'outline-none'}
        ${
          type === 'primary'
            ? 'btn-primary'
            : type === 'secondary'
            ? 'btn-secondary'
            : 'btn-tertiary'
        }
        text-white
        rounded
        font-semibold
        ${
          size === 'small'
            ? 'px-5 h-[40px]'
            : size === 'medium'
            ? 'px-6 h-[48px]'
            : 'px-7 h-[52px]'
        }
        ${fullWidth && 'w-full'}
        flex flex-row items-center justify-center gap-2 md:gap-3
        ${customClassName}
      `}
      onClick={onClick}
    >
      {!!iconElement && iconElement}
      {children}
    </button>
  );
};

export default Button;
