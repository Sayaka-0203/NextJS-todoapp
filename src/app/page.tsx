import Image from "next/image";
import Addtask from "./components/Addtask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();

  return(
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200" >
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Next 13 ToDo App
        </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <Addtask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
