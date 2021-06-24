import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="header">
        <Title title="The Job Board" />
      </header>
      <main className="container">
        <Card
          className="card red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Card
          className="card green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Card
          className="card yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Card
          className="card blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Card
          className="card salmon"
          title="Dévoloppeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Card
          className="card red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Card
          className="card green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Card
          className="card yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Card
          className="card blue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
