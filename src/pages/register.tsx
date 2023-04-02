import { Header } from "@/components/Header";
import { Register } from "@/components/Pages/Register";
export default function PageRegister() {
  return (
    <div className="relative h-full">
      <Header mode="minimal" />
      <Register />
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
