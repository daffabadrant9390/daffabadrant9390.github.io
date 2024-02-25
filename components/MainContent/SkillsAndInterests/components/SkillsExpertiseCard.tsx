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
    <div className="p-5 lg:p-6 rounded-lg bg-blue-750 hover:bg-blue-790 dark:bg-gray-650 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="flex flex-col [&>*:not(:last-child)]:mb-3 [&>*:not(:last-child)]:lg:mb-4">
        {/* Icon Image */}
        <div className="relative flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10">
          <Image
            alt={title}
            src={iconUrl}
            fill
            className="object-cover object-center"
          />
        </div>
        {/* Title and Description */}
        <div className="w-full flex flex-col items-start text-left">
          <h4 className="text-headings-6 lg:text-headings-5 text-white dark:text-gray-850 mb-2 lg:mb-3">
            {title}
          </h4>
          <p className="text-body-p4-regular lg:text-body-p3-regular text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertiseCard;
