"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomForm from "@/components/CustomForm"
import { useUser } from '@clerk/clerk-react'
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from 'next/navigation'
import { toast } from "sonner"
import { LoaderCircle } from 'lucide-react';
import { useState } from "react"
import { sendSms } from "@/lib/actions/africastalking"

// Schema validation using Zod
const formSchema = z.object({
  phone: z.string(),
  bvn: z
    .string()
    .length(11, { message: "BVN must be exactly 11 characters." })
})

const Onboarding = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      bvn: ''
    },
  })

  const createUser = useMutation(api.user.createUser)

  // Define a submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {  
    try {
      setIsLoading(true)
      const response = await fetch('/api/flutterwave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user?.emailAddresses[0].emailAddress,
          phonenumber: values.phone,
          bvn: values.bvn,
          firstname: user?.firstName,
          lastname: user?.lastName,
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      
      const data = await response.json();
      const amount = parseFloat(data?.data?.amount);


      createUser({
        name: user?.fullName || '',
        email: user?.emailAddresses[0].emailAddress ?? '',
        first_name: user?.firstName ?? '',
        last_name: user?.lastName ?? '',
        phone: values.phone,
        accountNumber:  data?.data?.account_number ?? '',
        bankName:  data?.data?.bank_name ?? '',
        amount: data?.data?.amount ?? '',
        clerkId: user?.id ?? '',
        username: user?.username ?? '',
      }).then(() => {
      //  redirect to home page and show toast
      // send sms to the user
      sendSms( values.phone,
        `Welcome to trust bank ${user?.firstName}!, your Account number is ${data?.data.account_number}, the bank name is ${data?.data?.bank_name}, your balance is ${data?.data?.amount}. You can start recieving funds to your account `
       );
      setIsLoading(false)
      router.push('/')
      toast("Congratulations!!, Your account has been created sucessfully.")
      })
    } catch (error) {
      console.error('Error creating account:', error);
      toast("Oops!, Error creating an account")
      setIsLoading(false)
    }

  }

  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-extrabold">Finish setting up your account</h2>
        <h1 className="font-light text-gray-500 pt-1">Please fill out this information in order to create an account</h1>
      </div>

      <div className="pt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
            <CustomForm
              title="Enter BVN Number"
              type="text"
              control={form.control}
              name="bvn"
              placeholder="Enter your BVN"
              disabled={false}
            />
            <CustomForm
              title="Enter Phone Number"
              type="phone"
              control={form.control}
              name="phone"
              placeholder="Phone Number"
              disabled={false}
            />
            <Button type="submit" className="w-full" disabled={isLoading}
            >
            {isLoading ? <LoaderCircle className="mr-2  h-4 w-4 animate-spin" /> : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Onboarding
