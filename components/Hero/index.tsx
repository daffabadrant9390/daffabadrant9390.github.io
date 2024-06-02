import { PROFILE_NAME, PROFILE_SHORT_DESC } from '@/constants';
import Image from 'next/image';
import React, { RefObject } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFingerprint } from '@fortawesome/free-solid-svg-icons';

type HeroSectionProps = {
  heroRef: RefObject<HTMLDivElement>;
  aboutMeRef: RefObject<HTMLDivElement>;
  collaborationsRef: RefObject<HTMLDivElement>;
};

const Hero = ({ heroRef, aboutMeRef, collaborationsRef }: HeroSectionProps) => {
  const handleClickButtonScroll = (refTarget: RefObject<HTMLDivElement>) => {
    const refTargetElement = refTarget?.current;

    if (!refTargetElement) return;

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: refTargetElement?.offsetTop - 72,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="w-full h-hero-section bg-bg-hero-50-opacity bg-no-repeat bg-bottom bg-cover"
    >
      <div className="max-container padding-container h-full flex flex-row items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-left [&>*:not(:first-child)]:mb-6 [&>*:not(:first-child)]:lg:mb-0 [&>*:not(:last-child)]:lg:mr-8">
          {/* Salutation & Buttons */}
          <div className="flex flex-col justify-center items-center [&>*:not(:last-child)]:mb-6">
            {/* Salutation, Name and Short Description */}
            <div className="w-full flex flex-col [&>*:not(:last-child)]:mb-2 [&>*:not(:last-child)]:lg:mb-[12px]">
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
            <div className="w-full flex flex-col md:flex-row [&>*:not(:last-child)]:mb-3 [&>*:not(:last-child)]:md:mb-0 [&>*:not(:last-child)]:md:mr-3 [&>*:not(:last-child)]:lg:mr-5">
              <Button
                type="primary"
                size="medium"
                iconElement={
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="w-4 h-4 lg:w-6 lg:h-6 text-gray-50 transition-all duration-200"
                  />
                }
                onClick={() => handleClickButtonScroll(aboutMeRef)}
              >
                Get Started
              </Button>
              <Button
                type="secondary"
                size="medium"
                iconElement={
                  <FontAwesomeIcon
                    icon={faFingerprint}
                    color="white"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                }
                onClick={() => handleClickButtonScroll(collaborationsRef)}
              >
                Let&lsquo;s Collaborate
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0 w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]">
            <Image
              src={'/assets/profile-img-new-design.png'}
              alt="Profile Image"
              className="object-cover object-top"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
