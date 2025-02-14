
import Connect4 from "../components/home/connect";
import Hero from "../components/home/home-hero";
import Tictactoe from "../components/home/tic-tac-toe";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tictactoe />
      <Connect4 />
    </div>
  );
}
