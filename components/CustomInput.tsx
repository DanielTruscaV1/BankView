import React from 'react'

import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'

import {z} from "zod";

import { authFormSchema } from '@/lib/utils'

interface CustomInput
{
    control: Control,
    name: 'email' | 'password', 
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <div className='item'>
                                <FormLabel className='form-label'>
                                    Password
                                </FormLabel>
                                <div className='flex w-full flex-col'>
                                    <FormControl>
                                        <Input 
                                            placeholder='Enter your password'
                                            className='input-class'
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='form-message mt-2'/>
                                </div>
                            </div>
                        )}
                        />
  )
}

export default CustomInput