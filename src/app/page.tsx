import Hero from "../Components/Home/Hero";
import Connect4 from "../Components/Home/Connect4";
import Tictactoe from "../Components/Home/TicTacToe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tictactoe />
      <Connect4 />
    </div>
  );
}
