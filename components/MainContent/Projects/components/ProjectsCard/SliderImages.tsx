import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import cx from 'classnames';
import styles from './SliderImages.module.scss';

type SliderImagesProps = {
  images: string[];
};

const SliderImages = ({ images }: SliderImagesProps) => {
  const [isKeenLoaded, setIsKeenLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      renderMode: 'performance',
      slideChanged: (slider) => {
        const newIdx = slider?.track?.details?.rel || 0;

        setCurrentSlide((prevIdx) => {
          return newIdx;
        });
      },
      created: () => {
        setIsKeenLoaded(true);
      },
    },
    []
  );

  const isOnFirstSlide = currentSlide === 0;
  const isOnLastSlide = currentSlide + 1 === images.length;

  const handleButtonPreviousClick = () => {
    instanceRef?.current?.prev();
  };

  const handleButtonNextClick = () => {
    instanceRef?.current?.next();
  };
  return (
    <div className={cx(styles.slider_container, 'relative')}>
      <div className="keen-slider" ref={slideRef}>
        {images.map((imageObj, idx) => {
          return (
            <div className="keen-slider__slide overflow-hidden" key={idx}>
              <div className="relative flex-shrink-0 w-full h-[240px] md:h-[280px] shadow-lg">
                <Image
                  alt={`image-obj-${idx}`}
                  src={imageObj}
                  fill
                  className="rounded-md object-cover object-center"
                />
              </div>
            </div>
          );
        })}
      </div>

      {!!isKeenLoaded && (
        <>
          {!isOnFirstSlide && (
            <div
              className={cx(styles.navigation_button, styles.previous_btn)}
              onClick={handleButtonPreviousClick}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="white"
                className="w-6 h-6"
              />
            </div>
          )}

          {!isOnLastSlide && (
            <div
              className={cx(styles.navigation_button, styles.next_btn)}
              onClick={handleButtonNextClick}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                color="white"
                className="w-6 h-6"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SliderImages;
