import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Image from 'next/image'

type Props = {
  register: UseFormRegister<FieldValues>
  domains?:
    | {
        name: string
        id: string
        icon: string
      }[]
    | undefined
}

const ConversationSearch = ({ register, domains }: Props) => {
  return (
    <div className="flex flex-col py-3">
      <Select>
      <SelectTrigger {...register('domain')}
        className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5">
          <SelectValue placeholder="Domain Name"/>
      </SelectTrigger>
      <SelectContent>
      {domains?.map((domain) => (
          <SelectItem
            value={domain.id}
            key={domain.id}
            className='cursor-pointer'
          >
            <div className='flex flex-row items-center justify-center p-2 space-x-4'>

            <Image
              src={`https://ucarecdn.com/${domain.icon}/`}
              alt={domain.name}
              width={20}
              height={20}
              />
            <p className='text-sm font-semibold text-timelessgray'>{domain.name}</p>
              </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  )
}

export default ConversationSearch

// const conv = () => {
//   return (
//     <Select>
//       <SelectTrigger {...register('domain')}
//         className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5">
//           <SelectValue placeholder="Domain Name"/>
//       </SelectTrigger>
//       <SelectContent>
//       {domains?.map((domain) => (
//           <SelectItem
//             value={domain.id}
//             key={domain.id}
//           >
//             {domain.name}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   )
// }
