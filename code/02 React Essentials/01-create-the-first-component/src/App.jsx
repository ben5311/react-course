export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Time to get started!</h2>
    </main>
  );
}
