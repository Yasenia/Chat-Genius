'use client'

import { useState } from 'react'
import { NextPage } from 'next'
import { useNameMyPetMutation } from '@/app/api/(experimemts)/name-my-pet/hooks'

const NameMyPetPage: NextPage = () => {
  const [pet, setPet] = useState<string>()
  const { trigger: nameMyPet, data: petNamesResult, isMutating: isNaming } = useNameMyPetMutation()

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Find the Perfect Name for Your Pet</h1>
      <div className="flex flex-col items-stretch sm:flex-row">
        <input
          type="text"
          placeholder="Enter your pet type"
          onChange={(event) => setPet(event.target.value)}
          className="mb-4 w-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none sm:mr-4 sm:mb-0 sm:w-2/3"
          aria-label="Enter your pet type"
        />
        <button
          onClick={() => pet && void nameMyPet(pet)}
          className="w-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 sm:w-auto sm:flex-shrink-0"
          disabled={isNaming}
          aria-label="Submit pet type"
        >
          {isNaming ? 'Generating Names...' : 'Find Names'}
        </button>
      </div>
      {petNamesResult && (
        <>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Suggested Pet Names</h2>
          <ul className="mt-4 list-inside list-disc">
            {petNamesResult.petNames.map((petName) => (
              <li key={petName} className="font-medium text-gray-700">
                {petName}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default NameMyPetPage
