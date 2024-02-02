import { useContext } from "react"
import { Context } from "../Context"

const Header = () => {

  const contextValues = useContext(Context);

  if (!contextValues) {
    // Handle the case when contextValues is undefined
    return null;
  }

  return (
    <div className="py-5 px-4 flex justify-between">
      <div className="flex items-center gap-4">
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="#635FC7" fill-rule="evenodd"><rect width="6" height="25" rx="2"/><rect opacity=".75" x="9" width="6" height="25" rx="2"/><rect opacity=".5" x="18" width="6" height="25" rx="2"/></g></svg>
        <div className="flex items-center gap-2">
          <h1 className="text-[18px] font-bold">Platform Launch</h1>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" stroke-width="2" fill="none" d="m1 1 4 4 4-4"/></svg>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32" fill="none">
          <g opacity="0.25"><rect width="48" height="32" rx="16" fill="#635FC7"/>
          <path d="M25.368 22V17.344H30V14.632H25.368V10H22.656V14.632H18V17.344H22.656V22H25.368Z" fill="white"/></g>
        </svg>
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"/><circle cx="2.308" cy="10" r="2.308"/><circle cx="2.308" cy="17.692" r="2.308"/></g></svg>
      </div>
    </div>
  )
}

export default Header