import React from "react"
import styles from '../estilos/styles.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container_mapa}>
                <div className={styles.container_gradiente}>
                    <div className={styles.container_bottom}>
                        <div className={styles.container_buttons}>
                            <div>
                                <input type="text" placeholder="Local de partida" />
                            </div>
                            <div>
                                <input type="text" placeholder="Destino" />
                            </div>
                            <div>
                                <input type="submit" value="ENCONTRAR TRAJETO" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home