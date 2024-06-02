import Image from 'next/image';

type SkillsExpertiseCardProps = {
  title: string;
  description: string;
  iconUrl: string;
  theme?: 'dark' | 'light';
};

const SkillsExpertiseCard = ({
  title,
  description,
  iconUrl,
  theme = 'light',
}: SkillsExpertiseCardProps) => {
  return (
    <div className="w-full p-5 lg:p-6 rounded-lg bg-white dark:bg-gray-850 border border-gray-75 dark:border-none hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col justify-center items-center text-center [&>*:not(:last-child)]:mb-3 [&>*:not(:last-child)]:lg:mb-4">
        {/* Icon Image */}
        <div className="relative flex-shrink-0 w-[52px] h-[52px] md:w-[60px] md:h-[60px] lg:w-[64px] lg:h-[64px]">
          <Image
            alt={title}
            src={iconUrl}
            fill
            className="object-cover object-center"
          />
        </div>
        {/* Title and Description */}
        <div className="w-[90%] flex flex-col justify-center items-center text-center [&>*:not(:last-child)]:mb-2 [&>*:not(:last-child)]:lg:mb-3">
          <h4 className="text-headings-6 lg:text-headings-5 text-gray-850 dark:text-gray-25">
            {title}
          </h4>
          <p className="text-body-p4-regular lg:text-body-p3-regular text-blue-350 dark:text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertiseCard;
