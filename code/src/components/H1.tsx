interface H1Props {
  text: string,
  className?: string
}

const H1 = (props: H1Props) => {
  return (
    <h1 className={`${props.className} text-4xl font-bold`}>{props.text}</h1>
  )
}

export default H1