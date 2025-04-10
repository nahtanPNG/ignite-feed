import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import Avatar from "./Avatar.jsx";

export default function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar src={"https://github.com/cavator.png"} hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mogli</strong>
                            <time title="09 de Abril às 11:22h" dateTime="2025-04-09 11:22:55">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}