import Menu from "../components/menu.js";
import styles from "../styles/about.module.css";

export default function About() {
  
    return (
      <div>
  
        <main className={styles.main}>
            <img src="/logo_dark.svg" className={styles.icon} />
            <h3 className="itim">About</h3>
            <p>Artificer's Asylum is an interface for OpenAI to make it easy to generate literary inspiration.</p>
        </main>
        <Menu />
      </div>
    );
  }