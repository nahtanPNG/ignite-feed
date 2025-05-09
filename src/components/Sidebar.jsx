import styles from "./Sidebar.module.css"

import { PencilLine } from 'phosphor-react'
import Avatar from "./Avatar.jsx";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
            />

            <div className={styles.profile}>
                <Avatar src={"https://github.com/nahtanpng.png"} />
                <strong>Nathan Ferreira</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}