export const InputField = ({ name, type, register, placeholder }) => {
	return (
		<input
			className='block'
			placeholder={placeholder}
			{...register(name)}
			name={name}
			type={type}
		/>
	)
}
