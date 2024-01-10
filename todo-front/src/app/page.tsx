import Todos from "./Components/Todos";
import { DarkModeContextProvider } from "./Context/DarkModeContext";

export default function Home() {
    return (
        <DarkModeContextProvider>
            <main className="root">
                <Todos />
            </main>
        </DarkModeContextProvider>
    );
}
