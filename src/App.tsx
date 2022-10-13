import "../src/styles/global.css";
import { Text } from "./components/Text";

export function App() {
  return (
    <>
      <Text  asChild>
          <h1>Outro</h1>
      </Text>
      <button className="">Enviar</button>
    </>
  );
}
