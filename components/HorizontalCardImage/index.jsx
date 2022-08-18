import { useState } from "react"
import { Typography } from "../Typography"
import Link from 'next/link'


export function HorizontalCardImage ({src, title, subtitle, price}) {


  const [icon, setIcon] = useState('pi-heart')

  const toggleLike = () =>{
    if (icon === 'pi-heart' ) {
      setIcon('pi-heart-fill')
    } else {
      setIcon('pi-heart')
    }
  }

  
  return (
    <Link href='/trip'>
      <div
        className="w-full rounded-xl overflow-hidden shadow-rg flex flex-row"
      >
        <div
          className="w-28 min-w-28 h-full bg-center bg-cover basis-1/3"
          style={{ backgroundImage: `url(${src})`}}
        >
        </div>

        <div className="flex flex-col h-full justify-between p-3 pl-4 basis-2/3 overflow-hidden">
          {/* <div className="bg-screen rounded-md h-7 w-7 flex items-center justify-center self-end" onClick={toggleLike}>
            <i className={`pi ${icon} text-alert`} style={{'fontSize': '1.1rem'}}></i>
          </div> */}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              <Typography
                variant="header5"
                element="h6"
                className="p-text-primary inline"
              >
                {title}
              </Typography>
              <p className="mt-2 p-text-secondary"> 
                <i className='pi pi-calendar' style={{'fontSize': '1.1rem'}}></i> 
                &nbsp;{subtitle}
              </p>
              <span className="p-text-secondary">{price}</span>
            </div>
        </div>
      </div>
    </Link>
  )
}