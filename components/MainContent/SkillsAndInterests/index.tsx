import { SKILLSET_EXPERTISE_DATA } from '@/constants';
import React from 'react';
import SkillsExpertiseCard from './components/SkillsExpertiseCard';
import CommonContentLayout from '@/components/CommonContentLayout';

const SkillsAndInterests = () => {
  return (
    <CommonContentLayout
      title="Skillsets & Expertise"
      subtitle="Platea cum diam lobortis sed in. In praesent magnis venenatis non viverra nisi."
      theme="light"
    >
      {/* Expertise & Skillset Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 justify-items-center place-content-center">
        {SKILLSET_EXPERTISE_DATA.map((skillsetExpertiseItem, idx) => {
          const { title, description, iconUrl } = skillsetExpertiseItem;

          return (
            <SkillsExpertiseCard
              key={`skills-expertise-${idx}`}
              title={title}
              description={description}
              iconUrl={iconUrl}
              theme="light"
            />
          );
        })}
      </div>
    </CommonContentLayout>
  );
};

export default SkillsAndInterests;
