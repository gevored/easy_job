import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface PropsButton {
  label: string;
  route: string;
}

export function Button(props: PropsButton) {
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(props.route);
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-[20px] items-center justify-center rounded-md bg-main-blue-200 p-5 text-white hover:bg-cyan-900"
    >
      {props.label}
    </button>
  );
}
