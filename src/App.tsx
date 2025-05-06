import Header from "./components/Header";
import ReviewAside from "./components/ReviewAside";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <ReviewAside />
      </main>
    </div>
  );
}

export default App;
