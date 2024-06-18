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
            ? 'px-2 h-[40px]'
            : size === 'medium'
            ? 'px-3 h-[48px]'
            : 'px-4 h-[52px]'
        }
        ${fullWidth && 'w-full'}
        flex flex-row items-center justify-center gap-2
        ${customClassName}
      `}
      onClick={onClick}
    >
      {!!iconElement && iconElement}
      <span className="text-body-p4-semibold text-left inline-block">
        {children}
      </span>
    </button>
  );
};

export default Button;
