
import Hero from "../components/home/hero";
import Tictactoe from "../components/home/tic-tac-toe";
import Connect4 from "./connect4/page";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tictactoe />
      <Connect4 />
    </div>
  );
}
