import React from "react"

type Props = {
  color?: string,
  name: string,
  setColor: (name: string) => void,
  placeholder?: boolean
}

export const ColorCircle = ({ color, name, setColor, placeholder}: Props) => {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center">
      { placeholder ? <div className="cursor-pointer hover:scale-110 transform transition-transform duration-150 border-blueGray-600 border-2 border-dashed active:scale-90 md:h-10  h-5 w-5 md:w-10 rounded-full"></div>
      : <div style={{ backgroundColor: color}} className={`cursor-pointer hover:scale-110 transform transition-transform duration-150 active:scale-90 md:h-10  h-5 w-5 md:w-10 rounded-full`} onClick={() => setColor(name)}></div> }
      <p style={{ color: color}} className="font-semibold text-sm">{name[0].toUpperCase() + name.substring(1)}</p>
      {/* <div className="absolute p-2 text-peacock-100 bg-peacock-700 transform rounded-md z-50 text-sm font-semibold -top-10 origin-bottom group-hover:scale-100 scale-0 transition-all duration-150 opacity-0 group-hover:opacity-100">{name[0].toUpperCase() + name.substring(1)}</div> */}
      {/* <div className="h-5 absolute w-5 bg-peacock-700 rounded-md transform rotate-45 -top-5 origin-bottom group-hover:scale-100 scale-0 transition-all scale-0 duration-150 opacity-0 group-hover:opacity-100 right-1/2"></div> */}
    </div>
  )
}