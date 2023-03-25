import { NextRequest, NextResponse } from 'next/server'
import nameMyPet, { NameMyPetCommand, PetNamedResult } from '@/services/openai/(experiments)/name-my-pet'

export type PetNamedResponse = PetNamedResult
export type NameMyPetRequest = NameMyPetCommand

export async function POST(request: NextRequest) {
  const command = (await request.json()) as NameMyPetCommand
  const result = await nameMyPet(command)
  return NextResponse.json(result) as PetNamedResult
}
