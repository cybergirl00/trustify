import { Control } from "react-hook-form"
import { FormControl, FormField as RHFormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// Define an interface for the props
interface CustomFormProps {
  title: string;
  type: string;
  control: Control<any>;
  name: string;
  placeholder: string;
  disabled?: boolean;
}

// CustomForm Component
const CustomForm = ({ title, type, control, name, placeholder, disabled }: CustomFormProps) => {
  return (
    <RHFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
          {type === 'phone' ? (
             <PhoneInput
             placeholder="Enter phone number"
             {...field}
             disabled={disabled}
             defaultCountry="NG"
             international
             withCountryCallingCode
             className=" mt-2 h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
             />
          ) : 
          <Input
              placeholder={placeholder}
              {...field}
              type={type}
              disabled={disabled}
            />
        }
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomForm
