import { redirect } from 'next/navigation'
import { NextPage } from 'next'

const Home: NextPage = () => redirect('/name-my-pet')

export default Home
