import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Addis Eats</h1>
        <p style={styles.subtitle}>Ethiopian Tradition Food Restaurant </p>
        <Link to="/menu" style={styles.button}>
          Our Menu
        </Link>
      </section>
      <section style={styles.aboutSection}>
        <h2>Our Story</h2>
        <p style={styles.aboutText}>
          At Addis Eats, we bring the rich culinary heritage of Ethiopia
          straight to your table. From slow-simmered Doro Wat to sizzling Beef
          Tibs served over fresh, warm Injera, Every dish is crafted with
          organic local ingredients and authentic spice blends.
        </p>
      </section>
      <section style={styles.highlights}>
        <div style={styles.card}>
          <h3>🌶️ Spices</h3>
          <p>Traditional Berbere and butter</p>
        </div>
        <div style={styles.card}>
          <h3>⚡ Fast Hospitality</h3>
          <p>Hot, Fresh and carefully packed for speed</p>
        </div>
        <div style={styles.card}>
          <h3>🌱 Fresh Ingredients</h3>
          <p>Locally sourced produce and traditional preparation methods</p>
        </div>
      </section>
    </div>
  );
}
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem 1rem",
    textAlign: "center",
  },
  hero: {
    backgroundColor: "#fff8f0",
    padding: "4rem 2rem",
    borderRadius: "12px",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#8b0000",
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#d9534f",
    color: "#fff",
    padding: "0.8rem 1.8rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: "6px",
    textDecoration: "none",
  },
  aboutSection: {
    marginBottom: "3rem",
    lineHeight: "1.6",
  },
  aboutText: {
    maxWidth: "700px",
    margin: "0 auto",
    color: "#444",
  },
  highlights: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 250px",
    padding: "1.5rem",
    border: "1px solid #eee",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
};
