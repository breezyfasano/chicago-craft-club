'use client'
import { useRef, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Theme } from './types'
import { toPng } from 'html-to-image'
import Image from 'next/image'
import frame from './frame-2.png'

interface NametagBuilderProps {
  theme?: Theme
}

export function NametagBuilder({ theme }: NametagBuilderProps) {
  const nameElementRef = useRef(null)
  const promptElementRef = useRef(null)
  const baseFontRef = useRef(32)
  const baseFont = baseFontRef.current

  const { register, watch } = useForm({
    defaultValues: {
      firstName: 'Your Name',
      pronouns: '',
      promptAnswer: '',
    },
  })

  const firstNameValue = watch('firstName')
  const pronounsValue = watch('pronouns')
  const promptAnswerValue = watch('promptAnswer')

  const adjustTextSize = (maxFontSize = 64, elementRef) => {
    let currentFontSize = maxFontSize
    const textElement = elementRef.current

    if (!textElement) return
    3
    if (
      textElement.getComputedTextLength() < 352 &&
      currentFontSize >= maxFontSize
    ) {
      textElement.style.fontSize = `${maxFontSize}px`
    }

    while (textElement.getComputedTextLength() > 352 && currentFontSize >= 24) {
      currentFontSize -= 2
      textElement.style.fontSize = `${currentFontSize}px`
    }
  }

  useEffect(() => {
    adjustTextSize(64, nameElementRef)
  }, [nameElementRef, firstNameValue])

  useEffect(() => {
    adjustTextSize(baseFontRef.current, promptElementRef)
  }, [promptElementRef, promptAnswerValue])

  // Export to image

  const nametagElementRef = useRef<HTMLDivElement>(null)
  const onButtonClick = useCallback(
    (e) => {
      e.preventDefault()
      if (nametagElementRef.current === null) {
        return
      }

      toPng(nametagElementRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = 'craft-club-nametag.png'
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    [nametagElementRef]
  )
  return (
    <div className='container'>
      <div className='flex flex-col gap-12 lg:flex-row-reverse w-full justify-center'>
        <div>
          <form className='flex flex-col gap-4 w-full lg:w-unset max-w-[350px] mx-auto md:m-0'>
            <input
              type='text'
              id='firstName'
              placeholder='First Name'
              maxLength={20}
              {...register('firstName')}
            />
            <input
              type='text'
              id='pronouns'
              placeholder='Pronouns'
              {...register('pronouns')}
            />
            <input
              type='text'
              id='promptAnswer'
              placeholder='Prompt answer'
              maxLength={30}
              {...register('promptAnswer')}
            />
            <button className='button primary' onClick={onButtonClick}>
              Download Nametag
            </button>
          </form>
        </div>
        <div>
          <div
            className={`shadow aspect-[17/27] w-[400px] h-auto mx-auto lg:mx-unset`}
          >
            <div
              ref={nametagElementRef}
              className={`relative ${
                theme?.backgroundColor
                  ? `bg-${theme.backgroundColor}`
                  : 'bg-blue'
              }`}
            >
              <Image
                src={frame}
                alt=''
                width='400'
                height='635'
                className='absolute left-0'
              />
              <svg viewBox='0 0 400 635' xmlns='http://www.w3.org/2000/svg'>
                <text
                  ref={nameElementRef}
                  y='250'
                  x='50%'
                  style={{
                    fill: 'black',
                    fontSize: 64,
                    textAnchor: 'middle',
                    fontFamily: '"Bagel Fat One", serif',
                  }}
                >
                  {firstNameValue}
                </text>
                <text
                  y='300'
                  x='50%'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseFont}px`,
                  }}
                >
                  {pronounsValue}
                </text>

                <text
                  y='500'
                  x='50%'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseFont}px`,
                  }}
                >
                  My favorite craft is
                </text>
                <text
                  ref={promptElementRef}
                  y='540'
                  x='50%'
                  className='whitespace-pre'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseFont}px`,
                  }}
                >
                  {promptAnswerValue}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
