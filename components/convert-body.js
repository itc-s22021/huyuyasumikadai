import parse from 'html-react-parser'
import Image from 'next/image'

export default function ConverBody ({ contentHTML }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            layout='responsive'
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes='(min-width: 768px) 768ox, 100vw'
          />
        )
      }
    }
  })
  return <>{contentReact}</>
}
