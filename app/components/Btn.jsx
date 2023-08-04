'use client'
import { TbMathGreater } from 'react-icons/tb'
import { useRouter} from 'next/navigation'

const Btn = ({title, url}) => {
    const router=useRouter()
    const Handleclick=e=>{
        e.preventDefault()
        router.push(url)
    }

  return (
    <button onClick ={Handleclick} className=" hidden px-5 py-2 md:flex justify-center items-center gap-1 capitalize rounded-full text-white bg-[#025B3F]">
  {title}
    <span className="md:ml-1 md:text-sm">
      <TbMathGreater />
    </span>
  </button>
  )
}

export default Btn