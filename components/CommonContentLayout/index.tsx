import { ThemesOption } from '@/types';
import { RefObject } from 'react';

type CommonContentLayoutProps = {
  title: string;
  subtitle: string;
  theme?: ThemesOption;
  children: React.ReactNode;
  backgroundImage?: string;
  customRefWrapper: RefObject<HTMLDivElement>;
};

const CommonContentLayout = ({
  title,
  subtitle,
  theme = 'light',
  children,
  backgroundImage,
  customRefWrapper,
}: CommonContentLayoutProps) => {
  return (
    <section
      className={`w-full ${
        backgroundImage ? `${backgroundImage} bg-cover bg-center` : ''
      }`}
      ref={customRefWrapper}
    >
      <div className="max-container padding-container py-6 lg:py-10 flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center [&>*:not(:last-child)]:mb-6 [&>*:not(:last-child)]:lg:mb-10">
          {/* Title and Subtitle */}
          <div className="w-full flex flex-col [&>*:not(:last-child)]:mb-2 [&>*:not(:last-child)]:lg:mb-3">
            <h2 className="text-headings-5 lg:text-headings-2 text-gray-850">
              {title}
            </h2>
            <p className="text-body-p4-regular lg:text-body-p2-regular text-green-750">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CommonContentLayout;
