interface H1Props {
  text: string
}

const H1 = (props: H1Props) => {
  return (
    <h1 className="pb-20 text-slate-200 text-4xl font-bold">{props.text}</h1>
  )
}

export default H1