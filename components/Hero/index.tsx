import { PROFILE_NAME, PROFILE_SHORT_DESC } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const Hero = () => {
  return (
    <section className="w-full h-hero-section-mobile lg:h-hero-section-desktop bg-bg-hero-50-opacity bg-no-repeat bg-bottom bg-cover">
      <div className="max-container padding-container h-full flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center [&>*:not(:last-child)]:mb-6 [&>*:not(:last-child)]:lg:mb-8">
          {/* Profile Image */}
          <div className="relative flex-shrink-0 w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
            <Image
              src={'/assets/profile-img-large.jpg'}
              alt="Profile Image"
              className="rounded-full border-4 border-black shadow-md object-cover object-center"
              fill
            />
          </div>

          {/* Salutation, Name and Short Description */}
          <div className="w-full flex flex-col [&>*:not(:last-child)]:mb-3 [&>*:not(:last-child)]:lg:mb-[14px]">
            <h2 className="text-headings-4 lg:text-headings-2">
              Hi👋 I&lsquo;m
            </h2>
            <h4 className="text-label-l1-sb lg:text-headings-4">
              {PROFILE_NAME}
            </h4>
            <p className="text-label-l3-regular lg:text-label-l1-regular text-gray-850">
              {PROFILE_SHORT_DESC}
            </p>
          </div>

          {/* Button Get Started */}
          <Button type="primary" theme="light" size="large">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
