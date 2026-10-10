import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import { useSelector } from "react-redux"
import { useClerk } from "@clerk/react"
function Layout() {
    const user=useSelector((state)=>state.user.value)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const {signOut}=useClerk()
    useEffect(()=>{
      signOut()
    },[])
    return user?(
      <div className='w-full flex h-screen'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className='flex-1 bg-slate-50'>
          <Outlet />
        </div>
        {
          sidebarOpen ?
          <X className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setSidebarOpen(false)}/>
          :
          <Menu onClick={()=>setSidebarOpen(true)} className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'/>
        }
      </div>
    ):(
        <Loading/>
    )
}

export default Layout