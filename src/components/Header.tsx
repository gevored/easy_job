interface HeaderProps {
  mode: string;
}
export function Header({ mode }: HeaderProps) {
  if (mode === "minimal") {
    return (
      <div className="flex h-[50px] items-start justify-center">
        <span className="font-sans text-4xl text-main-blue-300"> Easy Job</span>
      </div>
    );
  }
  return (
    <div className="flex h-[200px] items-center justify-center">
      <span className="font-sans text-8xl text-main-blue-300"> Easy Job</span>
    </div>
  );
}
