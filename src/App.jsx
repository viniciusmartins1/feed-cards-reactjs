import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea soluta obcaecati aperiam explicabo molestias libero, perspiciatis ad quam consectetur voluptatum, eligendi quaerat culpa! Totam dolorem voluptate harum facilis ut!"
          />
          <Post
            author="Vinicius Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea soluta obcaecati aperiam explicabo molestias libero, perspiciatis ad quam consectetur voluptatum, eligendi quaerat culpa! Totam dolorem voluptate harum facilis ut!"
          />
        </main>
      </div>
    </div>
  );
}
