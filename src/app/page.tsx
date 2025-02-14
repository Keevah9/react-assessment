import Hero from "../components/home/Hero";
import Snake from "../components/home/Snake";
import Tictactoe from "../components/home/TicTacToe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tictactoe />
      <Snake />
    </div>
  );
}
