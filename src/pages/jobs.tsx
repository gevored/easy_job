import { Header } from "@/components/Header";
import { Search } from "../components/Search/index";
import { GetStaticProps } from "next";

export default function Jobs() {
  return (
    <div className="relative h-full">
      <Header mode="minimal" />
      <Search />
    </div>
  );
}
