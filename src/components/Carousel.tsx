import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative">
          <Image
          alt='test'
          src='/images/justeprvoir.jpg'
          className='rounded'
          objectFit='cover'
          layout='fill'

          />
        </div>
        <div className="embla__slide">
          <Image
            alt='test'
            src='/images/justeprvoir2.jpg'
            objectFit='cover'
            layout='fill'
            className='rounded'
            />
        </div>
        <div className="embla__slide">Slide 3</div>

      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}
