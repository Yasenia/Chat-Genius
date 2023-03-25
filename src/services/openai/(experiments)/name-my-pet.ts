import openai, { openaiAxiosRequestConfig } from '@/services/openai'

export interface NameMyPetCommand {
  pet: string
}

export interface PetNamedResult {
  petNames: string[]
}

const nameMyPet: (command: NameMyPetCommand) => Promise<PetNamedResult> = async ({ pet }) => {
  const completionResponse = await openai.createCompletion(
    {
      model: 'text-davinci-003',
      prompt: `
      Suggest three names for an animal that is a superhero.
      
      Animal: Cat
      Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
      Animal: Dog
      Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
      Animal: ${pet}
      Names:
      `,
      temperature: 0.6,
    },
    openaiAxiosRequestConfig
  )
  return {
    petNames: completionResponse.data.choices[0].text.split(',').map((name) => name.trim()),
  }
}

export default nameMyPet
