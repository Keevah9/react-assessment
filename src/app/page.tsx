import Connect4 from "../components/connect4";
import Hero from "../components/home/hero";
import Tictactoe from "../components/home/ticTacToe";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tictactoe />
      <Connect4 />
    </div>
  );
}
