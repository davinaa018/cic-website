import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        events: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  const storedValue = localStorage.getItem("showLink");
  const [showLink, setShowLink] = useState<boolean>(
    storedValue !== null ? JSON.parse(storedValue) : false
  );

  useEffect(() => {
    localStorage.setItem("showLink", JSON.stringify(showLink));
    return () => {
      localStorage.removeItem("showLink");
    };
  }, [showLink]);

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavBar showLink={showLink} />
          <hr />
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/admin-dashboard"
              element={<Dashboard setShowLink={setShowLink} />}
            />
          </Routes>
          <Footer showLink={showLink} />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
