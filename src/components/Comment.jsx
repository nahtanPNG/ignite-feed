import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";

export default function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/nahtanpng.png" alt="Avatar" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nathan Ferreira</strong>
                            <time title="09 de Abril às 11:22h" dateTime="2025-04-09 11:22:55">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}