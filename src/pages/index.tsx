import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="relative h-full">
      <Header />
      <main className="fixed top-80 h-full w-full ">
        <div className=" flex h-full justify-center gap-1 ">
          <Button label="Jobs" route="jobs" />
          <Button label="Professionals" route="employee" />
        </div>
      </main>
    </div>
  );
}
