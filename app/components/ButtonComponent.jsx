'use client'
import { TbMathGreater } from "react-icons/tb";
import { useRouter} from 'next/navigation'
const ButtonComponent = ({title, url}) => {
  const router=useRouter()
    const Handleclick=e=>{
        e.preventDefault()
        router.push(url)
    }

  return (
    <button onClick ={Handleclick}  className=" w-2/3 md:w-1/3 px-4 py-4 text-[14px] md:text-base flex justify-center items-center  gap-2 capitalize rounded-full text-white bg-[#025B3F]">
      {title}
      <span>
        <TbMathGreater />
      </span>
    </button>
  );
};

export default ButtonComponent;
