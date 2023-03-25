import useSWRMutation, { SWRMutationResponse } from 'swr/mutation'
import { NameMyPetRequest, PetNamedResponse } from '@/app/api/(experimemts)/name-my-pet/route'
import { PetNamedResult } from '@/services/openai/(experiments)/name-my-pet'
import clientAxiosInstance from '@/configs/client-side/axios/client-side-axios'

export const useNameMyPetMutation: () => SWRMutationResponse<PetNamedResult, never, string, any> = () =>
  useSWRMutation('NAME_MY_PET', async (pet: string) => {
    const request = { pet } as NameMyPetRequest
    const response = await clientAxiosInstance.post<PetNamedResponse>('/api/name-my-pet', request)
    return response.data
  })
