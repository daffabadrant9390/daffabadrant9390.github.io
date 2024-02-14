'use client';

type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  children: React.ReactNode;
  fullWidth?: boolean;
  iconElement?: JSX.Element;
  onClick?: () => void;
};

const Button = ({
  type,
  size,
  theme,
  children,
  fullWidth,
  iconElement,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        ${type === 'outlined' ? 'outline' : 'outline-none'}
        ${
          type === 'primary' && theme === 'light'
            ? 'btn-primary-light'
            : 'btn-primary-dark'
        }
        ${
          type === 'secondary' && theme === 'light'
            ? 'btn-secondary-light'
            : 'btn-secondary-dark'
        }
        ${
          type === 'tertiary' && theme === 'light'
            ? 'btn-tertiary-light'
            : 'btn-tertiary-dark'
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
            : 'px-8 py-3 lg:py-4'
        }
        flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4
      `}
      onClick={onClick}
    >
      {!!iconElement && iconElement}
      {children}
    </button>
  );
};

export default Button;
