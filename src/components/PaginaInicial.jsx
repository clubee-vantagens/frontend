import ClubeeLogo from '../assets/icons/clubee-logo-subtitulado.png'

export default function PaginaInicial() {
    return (
        <div className='bg-background__primary h-screen flex flex-col justify-center items-center'> 
            <img src={ClubeeLogo} alt="Logo" />
        </div>
    )
}