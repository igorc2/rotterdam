import { useState } from "react"


export function CardImage ({src, title, subtitle}) {


  const [icon, setIcon] = useState('pi-heart')

  const toggleLike = () =>{
    if (icon === 'pi-heart' ) {
      setIcon('pi-heart-fill')
    } else {
      setIcon('pi-heart')
    }
  }

  return (
    <div
      className="relative max-w-md bg-center bg-cover h-64 rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 254, 252, 0), rgba(33, 33, 43, 0.73)), url(${src})`,
      }}
    >
      <div className="flex flex-col h-full justify-between p-4">
        <div className="bg-screen rounded-md h-7 w-7 flex items-center justify-center self-end" onClick={toggleLike}>
          <i className={`pi ${icon} text-alert`} style={{'fontSize': '1.1rem'}}></i>
        </div>
        <div>
          <h6 className="p-text-white">{title}</h6>
          <span className="p-text-white">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}