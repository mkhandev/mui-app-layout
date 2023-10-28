import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
