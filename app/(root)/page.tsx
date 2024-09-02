
import { getUser } from '@/lib/actions/user'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const { userId } = auth()

  const userInfo = await getUser(userId)
  console.log(userId)
  if(userId && userInfo === undefined) {
 redirect('/onboarding')
  } else if(!userId) redirect('/sign-in')


  return (
    <div>{userId}</div>
  )
}

export default Dashboard