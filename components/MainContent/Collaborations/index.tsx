'use client';

import Button from '@/components/Button';
import React, { RefObject } from 'react';
import {
  faPaperPlane,
  faFile,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDribbble,
  faMedium,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_MEDIA, SOCIAL_MEDIA_DATA } from '@/constants';

type CollaborationsSectionProps = {
  collaborationsRef: RefObject<HTMLDivElement>;
};

const Collaborations = ({ collaborationsRef }: CollaborationsSectionProps) => {
  return (
    <section
      ref={collaborationsRef}
      className="w-full bg-bg-collaborations bg-cover bg-left"
    >
      <div className="max-container padding-container py-6 md:py-10 lg:py-16">
        <div className="flex flex-row items-center justify-center lg:justify-start text-center lg:text-left">
          <div className="w-full md:max-w-[640px] flex flex-col items-center lg:items-start">
            {/* Title */}
            <h2 className="text-headings-5 lg:text-headings-2 text-white mb-5 lg:mb-8">
              Let&lsquo;s Connect & Collaborate
            </h2>
            <p className="w-full text-body-p3-regular md:text-body-p2-regular lg:text-body-p1-regular text-gray-50 mb-5 lg:mb-8">
              Sollicitudin iaculis elit pellentesque blandit ut. Ut tortor duis
              aliquam ultrices cursus. Eget massa netus massa amet feugiat sed
              elementum gravida nisi
            </p>
            <div className="mb-5 w-full md:w-fit lg:mb-8 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
              <Button
                type="secondary"
                size="large"
                iconElement={
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    color="white"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                }
                onClick={() => {
                  window.open('mailto:daffabadrant@gmail.com', '_blank');
                }}
              >
                Send Message
              </Button>

              <Button
                type="tertiary"
                size="large"
                iconElement={
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    color="white"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                }
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/1zjG5pKQjtbXOMMBv-3yBSwjHModIHxYL/view?usp=sharing',
                    '_blank'
                  );
                }}
              >
                Download CV
              </Button>
            </div>
            <div className="w-full flex flex-col [&>*:not(:last-child)]:mb-4 [&>*:not(:last-child)]:lg:mb-5">
              <p className="text-body-p2-regular lg:text-body-p1-regular text-gray-50">
                You can also found me here :
              </p>
              <ul className="w-full flex flex-row items-center justify-center lg:justify-start [&>*:not(:last-child)]:mr-3 [&>*:not(:last-child)]:lg:mr-6">
                {SOCIAL_MEDIA_DATA.map((socialMediaItem) => {
                  const { type, linkUrl } = socialMediaItem;

                  return (
                    <a
                      href={linkUrl}
                      key={`social-media-${type}`}
                      className="inline-block cursor-pointer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={
                          type === SOCIAL_MEDIA.DRIBBBLE
                            ? faDribbble
                            : type === SOCIAL_MEDIA.GITHUB
                            ? faGithub
                            : type === SOCIAL_MEDIA.LINKEDIN
                            ? faLinkedin
                            : type === SOCIAL_MEDIA.INSTAGRAM
                            ? faInstagram
                            : faMedium
                        }
                        className="w-7 h-7 lg:w-10 lg:h-10 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                      />
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
