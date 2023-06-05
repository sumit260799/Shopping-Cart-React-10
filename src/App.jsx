import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Context";
export default function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="grid place-items-center h-[100vh]">
        <div class="loader "></div>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
