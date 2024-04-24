import ClubeeLogo from '../assets/icons/clubee-logo-subtitulado.png'


export default function PaginaInicial() {
    return (
        <div className='bg-[#F4EAA6] h-screen flex flex-col justify-center items-center'> 
            <img src={ClubeeLogo} alt="Logo" />
        </div>
    )
}