import styles from "./styles.module.scss";

export function Player() {
    return (
      <div className={styles.player__container}>
        <header>
          <img src="/imgs/playing.svg" alt="Tocando agora"/>
          <strong>Tocando agora</strong>
        </header>

        <div className={styles.player__empty}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>

        <footer className={styles.empty}>
          <div className={styles.empty__progress}>
            <span>00:00</span>
            <div className={styles.empty__boxSlider}>
              <div className={styles.empty__slider} />
            </div>
            <span>00:00</span>
          </div>

          <div className={styles.empty__buttons}>
            <button type="button">
              <img src="/imgs/shuffle.svg" alt="Aleatório" />
            </button>
            <button type="button">
              <img src="/imgs/play-previous.svg" alt="Anterior" />
            </button>
            <button type="button" className={styles.button__play}>
              <img src="/imgs/play.svg" alt="Play" />
            </button>
            <button type="button">
              <img src="/imgs/play-next.svg" alt="Próxima" />
            </button>
            <button type="button">
              <img src="/imgs/repeat.svg" alt="Repetir" />
            </button>
          </div>
        </footer>
      </div>
  );
}
