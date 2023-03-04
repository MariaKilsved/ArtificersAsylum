import Head from "next/head";
import { useState } from "react";
import Menu from "../components/menu.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../styles/index.module.css";

export default function Home() {
  const [countInput, setCountInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: countInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setCountInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Artificer's Asylum</title>
        <link rel="icon" href="/logo_dark.svg" />
      </Head>

      <main className={styles.main}>
        <img src="/logo_dark.svg" className={styles.icon} />
        <h3 className="itim">Name my pet</h3>
        <form onSubmit={onSubmit}>

          <Form.Select aria-label="Number to generate" onChange={(e) => setCountInput(e.target.value)} className="mb-3">
            <option>Number to generate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>


          <Button type="submit" variant="primary" size="lg">Generate</Button>
        </form>
        <div className={styles.result}>{result}</div>
      </main>

      <Menu />
    </div>
  );
}
