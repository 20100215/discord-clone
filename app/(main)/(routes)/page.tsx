import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        Sab Sab Sab Sab Sab .
        <UserButton afterSignOutUrl="/"/>
        <ModeToggle/>
      </p>
    </div>  
  );
}