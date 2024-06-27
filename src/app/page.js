import Image from "next/image";
import AddUser from "./(components)/addUser/page";
import DisplayPage from "./(components)/displayUser/page";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mb-2">
          <AddUser/>
        </div>
        <div className="w-full">
          <DisplayPage/>
        </div>
      </div>
    </main>
  );
}
