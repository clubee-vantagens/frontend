import clubeeLogo from "../../assets/icons/clubee-logo-subtitulado.png";
import { Link } from "react-router-dom";

export default function singUp() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 bg-background__secondary">
      <img src={clubeeLogo} alt="" />

      <Link to={"/signup/usuario"}>
        <input
          className="p-1 items-center w-[350px] h-[50px] rounded-3xl shadow-md bg-background__button__white"
          type="submit"
          value="Sou cliente"
          onClick={() => {}}
        />
      </Link>
      <Link to={"/signup/empresa"}>
        <input
          className="p-1 items-center w-[350px] h-[50px] rounded-3xl shadow-md bg-background__button__white"
          type="submit"
          value="Sou Empresa"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}
