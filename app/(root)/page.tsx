import Header from '@/components/Header'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const { userId } = auth()
  console.log(userId)
 if (!userId) redirect('/sign-in')


  return (
    <div>
      <Header user={userId} />
    </div>
  )
}

export default Dashboard