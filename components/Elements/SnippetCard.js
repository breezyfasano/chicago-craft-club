export const SnippetCard = ({ children, heading }) => {
  return (
    <div className='bg-yellow border-6 border-black rounded-lg p-4 inline-block'>
      {heading ? <h2>{heading}</h2> : null}
      <div>{children}</div>
    </div>
  )
}
