import { useEffect } from 'react';

interface TitleProps {
    title: string
}
const Title = (props: TitleProps) => {
    const { title } = props
    return (
      <div className="App">
        <p>{title}</p>
      </div>
    )
  }
  
  export default Title
