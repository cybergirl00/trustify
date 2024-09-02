"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomForm from "@/components/CustomForm"
import { useUser } from '@clerk/clerk-react'
import { createAccount } from "@/lib/actions/account"

// Schema validation using Zod
const formSchema = z.object({
  phone: z.string(),
  bvn: z
    .string()
    .length(11, { message: "BVN must be exactly 11 characters." })
})

const Onboarding = () => {
  const { user } = useUser()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      bvn: ''
    },
  })

  // Define a submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {  
    try {
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
      });

      if (response.ok) {
       
      }  else {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Form values:', data);
    } catch (error) {
      console.error('Error creating account:', error);
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
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Onboarding
