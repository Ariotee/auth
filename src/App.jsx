import { FormAuth } from './components/auth/form'
import { ArrowBack } from './icons/Icons'

function App() {
	return (
		<div className='bg-black h-screen'>
			<div className='bg-white pt-7 py-52 pr-[333px] pl-[111px] h-screen w-[58%]'>
				<button className='flex gap-1 items-center mb-8'>
					<ArrowBack /> Назад
				</button>
				<div className='text-[#4D4D4D] font-bold text-s'>Регистрация</div>
				<FormAuth />
			</div>
		</div>
	)
}

export default App
