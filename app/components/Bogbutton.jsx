'use client'
import { useRouter } from "next/navigation"

const Bogbutton = ({title, url}) => {
    const router=useRouter()
    const Handleclick=e=>{
        e.preventDefault()
        router.push(url)
    }
  return (
    <button onClick={Handleclick} className="flex md:flex-1 cursor-pointer">
        <div className="bg-black text-white flex-1 py-8 md:py-14 ">
          <h5 className="text-center  md:text-2xl md:text-start md:ml-3">
         {title}
          </h5>
        </div>
        <div className=" text-white pt-8 pb-4 md:pt-14 md:pb-12 bg-green-900  flex justify-center items-center px-5">
          <h5 className="text-4xl  ">{`>`}</h5>
        </div>
      </button>
  )
}

export default Bogbutton