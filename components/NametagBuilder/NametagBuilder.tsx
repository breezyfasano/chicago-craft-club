'use client'
import {
  useRef,
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
} from 'react'
import { useForm } from 'react-hook-form'
import { Theme } from './types'
import { toPng } from 'html-to-image'
import Image from 'next/image'
import themes from './themes.json'

export function NametagBuilder() {
  const [theme, setTheme] = useState(themes[0])
  const [isLoaded, setIsLoaded] = useState(false)
  const nameElementRef = useRef(null)
  const promptElementRef = useRef(null)

  const { baseText, nameText } = theme

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

  const adjustTextSize = (
    elementRef: MutableRefObject<SVGTextElement | null>,
    font: { fontFamily?: string; minSize: any; maxSize: any; color?: string }
  ) => {
    const { maxSize, minSize } = font
    let currentFontSize = maxSize
    const textElement = elementRef.current

    if (!textElement) return

    if (
      textElement.getComputedTextLength() < 352 &&
      currentFontSize <= maxSize
    ) {
      textElement.style.fontSize = `${currentFontSize}px`
    }

    while (
      textElement.getComputedTextLength() > 352 &&
      currentFontSize >= minSize
    ) {
      currentFontSize -= 2
      textElement.style.fontSize = `${currentFontSize}px`
    }
  }

  useEffect(() => {
    adjustTextSize(nameElementRef, nameText)
  }, [nameElementRef, firstNameValue, nameText])

  useEffect(() => {
    adjustTextSize(promptElementRef, baseText)
  }, [promptElementRef, promptAnswerValue, baseText])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Export to image

  const nametagElementRef = useRef<HTMLDivElement>(null)
  const downloadNametag = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const handleThemeChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const indexOfCurrentTheme = themes.indexOf(theme)

      if (indexOfCurrentTheme + 1 === themes.length) {
        setTheme(themes[0])
      } else {
        setTheme(themes[indexOfCurrentTheme + 1])
      }
    },
    [theme]
  )

  if (!isLoaded) {
    return (
      <div className='container'>
        <div className='h-[635px]'>
          <p className='text-5xl text-center font-bold'>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='flex flex-col gap-12 lg:flex-row-reverse w-full justify-center'>
        <div>
          <form className='flex flex-col gap-4 w-full lg:w-unset max-w-[350px] mx-auto lg:m-0 '>
            <label htmlFor='firstName'>Name</label>
            <input
              type='text'
              id='firstName'
              placeholder='First Name'
              maxLength={20}
              {...register('firstName')}
              className='p-4'
            />
            <label htmlFor='pronouns'>Pronouns</label>
            <input
              type='text'
              id='pronouns'
              placeholder='Pronouns'
              {...register('pronouns')}
              className='p-4'
            />
            <label htmlFor='promptAnswer'>Prompt Answer</label>
            <input
              type='text'
              id='promptAnswer'
              placeholder='Prompt answer'
              maxLength={30}
              {...register('promptAnswer')}
              className='p-4'
            />
            <label htmlFor='themeField'>Theme</label>
            <button
              name='themeField'
              className='button'
              onClick={handleThemeChange}
            >
              Change theme
            </button>

            <button className='button primary' onClick={downloadNametag}>
              Download Nametag
            </button>
          </form>
        </div>
        <div>
          <div
            className={`shadow-lg aspect-[17/27] w-full max-w-[400px] lg:w-[400px] h-auto mx-auto lg:mx-unset`}
          >
            <div
              ref={nametagElementRef}
              className={`relative`}
              style={{
                backgroundColor: theme.backgroundColor,
              }}
            >
              <Image
                src={`/img/nametag-themes/${theme.image}`}
                alt=''
                width='400'
                height='634'
                className='absolute left-0'
                decoding='sync'
              />
              <svg viewBox='0 0 400 635' xmlns='http://www.w3.org/2000/svg'>
                <text
                  ref={nameElementRef}
                  y='250'
                  x='50%'
                  style={{
                    fontSize: nameText.maxSize,
                    textAnchor: 'middle',
                    fontFamily: nameText.fontFamily,
                    fill: nameText.color,
                  }}
                >
                  {firstNameValue}
                </text>
                <text
                  y='300'
                  x='50%'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseText.maxSize}px`,
                    fontFamily: nameText.fontFamily,
                    fill: nameText.color,
                  }}
                >
                  {pronounsValue}
                </text>

                <text
                  y='500'
                  x='50%'
                  className='font-bold'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseText.maxSize}px`,
                    fontFamily: baseText.fontFamily,
                    fill: baseText.color,
                  }}
                >
                  my favorite craft(s):
                </text>
                <text
                  ref={promptElementRef}
                  y='540'
                  x='50%'
                  className='whitespace-pre'
                  style={{
                    textAnchor: 'middle',
                    fontSize: `${baseText.maxSize}px`,
                    fontFamily: baseText.fontFamily,
                    fill: baseText.color,
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
