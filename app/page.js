import LogoWara from '../assets/logo-wara-w.svg'

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-start md:justify-center text-white bg-pink-950 bg-dots-pattern bg-size-16 animate-move-dots">
			<main className="flex flex-col gap-8 row-start-2 items-start sm:items-start px-4 w-full max-w-screen-lg">
				<h1 className="text-3xl md:text-6xl my-4 text-center w-full font-bold">Fiesta fin de año Wara!</h1>
				<div className='flex justify-between h-15 items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
					<span className="text-xl md:text-3xl ml-4">Viernes 13 de Diciembre, 19 hs</span>
				</div>
				<div className='flex justify-between h-15 items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
					<span className="text-xl md:text-3xl ml-4">Bodega Tierras Altas</span>
				</div>
				<div className="w-full aspect-video">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.904531224168!2d-68.84928328782603!3d-32.97992047346134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b1aa8107a51%3A0xd51b0e1d30d0e873!2sBodega%20Tierras%20Altas!5e0!3m2!1sen!2sar!4v1731441785152!5m2!1sen!2sar"
						className="w-full h-full rounded-2xl"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
				<LogoWara className="w-full px-10 h-auto mt-2 transition-all duration-1500 ease-in-out animate-border-beam" />
			</main>
		</div>
	);
}