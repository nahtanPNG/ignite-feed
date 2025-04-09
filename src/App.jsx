import './global.css'
import styles from './App.module.css'

import Post from "./Post.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post author={"Nathan"} content={"eae"}/>

                    <Post author={"Nathan"} content={"eae"}/>
                </main>
            </div>
        </div>
    )
}