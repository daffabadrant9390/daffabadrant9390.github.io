'use client';

type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  children: React.ReactNode;
  fullWidth?: boolean;
  iconElement?: JSX.Element;
  onClick?: () => void;
  customClassName?: string;
};

const Button = ({
  type,
  size,
  theme,
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
        ${
          type === 'primary' || type === 'secondary'
            ? 'text-white'
            : 'text-gray-850'
        }
        rounded
        font-semibold
        ${
          size === 'small'
            ? 'px-6 py-1 lg:py-2'
            : size === 'medium'
            ? 'px-7 py-2 lg:py-3'
            : 'px-6 lg:px-8 py-2 md:py-3 lg:py-4'
        }
        ${fullWidth && 'w-full'}
        flex flex-row items-center justify-center gap-3 md:gap-4 lg:gap-5
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
