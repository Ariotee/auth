import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputField } from '../InputField.jsx'

const schema = z.object({
	surname: z.string(),
	name: z.string(),
	second_name: z.string(),
	dob: z.string(),
	mail: z.string().email(),
	phone: z.string(),
	pass: z.string(),
})

export const FormAuth = () => {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			surname: '',
			name: '',
			second_name: '',
			mail: '',
			phone: '',
			pass: '',
		},
	})

	const onSubmit = data => console.log(data)
	const onError = errors => console.log(errors)

	return (
		<form
			onSubmit={handleSubmit(onSubmit, onError)}
			className='flex flex-col gap-5 w-4/12'
		>
			<InputField
				name={'surname'}
				type={'text'}
				register={register}
				placeholder='Фамилия'
			/>
			<InputField
				name={'name'}
				type={'text'}
				register={register}
				placeholder='Имя'
			/>
			<InputField
				name={'second_name'}
				type={'text'}
				register={register}
				placeholder='Отчество'
			/>
			<InputField
				name={'mail'}
				type={'mail'}
				register={register}
				placeholder='E-mail'
			/>
			<InputField
				name={'dob'}
				type={'date'}
				register={register}
				placeholder='Дата рождения'
			/>
			<InputField
				name={'pass'}
				type={'password'}
				register={register}
				placeholder='Пароль'
			/>
			<InputField
				name={'phone'}
				type={'phone'}
				register={register}
				placeholder='Телефон'
			/>

			<button type='submit'>Принять</button>
		</form>
	)
}
