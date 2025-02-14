import Connect4 from "../Components/Connect4";
import Hero from "../Components/Home/Hero";
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
