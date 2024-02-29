import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mb-[10px] font-semibold">
      Não tem conta? Se{" "}
      <Link to={"/signup"} className="font-bold text-black decoration-inherit">
        cadastre agora
      </Link>
      !
    </footer>
  );
}

export default Footer;
