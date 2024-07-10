import { H2 } from '../Elements/Headers'
import { Button } from '../Elements/Button'

type SnippetCardProps = {
  children: React.ReactNode
  heading?: string
  cta?: {
    link: string
    text: string
  }
}

export const SnippetCard = ({ children, heading, cta }: SnippetCardProps) => {
  return (
    <div className='bg-yellow border-6 border-black rounded-lg p-8 inline-block border-dashed border-4'>
      {heading ? <H2>{heading}</H2> : null}
      <div>{children}</div>
      {cta?.link && cta?.text ? (
        <div className='flex items-center pt-4'>
          <Button secondary className='mx-auto' link={cta.link}>
            {cta.text}
          </Button>
        </div>
      ) : null}
    </div>
  )
}
