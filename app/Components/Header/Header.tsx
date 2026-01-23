import "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/logo_fes.png" alt="nose" width={300} height={100} />
    </header>
  );
}
