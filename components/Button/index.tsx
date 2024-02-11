type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  children: React.ReactNode;
  fullWidth?: boolean;
};

const Button = ({ type, size, theme, children, fullWidth }: ButtonProps) => {
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
          type === 'primary' || type === 'secondary'
            ? 'text-white'
            : 'text-black'
        }
        rounded
        font-semibold
        ${
          size === 'small'
            ? 'px-6 py-1 lg:py-2'
            : size === 'medium'
            ? 'px-7 py-2 lg:py-3'
            : 'px-8 py-2 lg:py-3'
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
