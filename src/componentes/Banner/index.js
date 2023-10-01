import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <div className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Rafael Della, 
                    Aluno da escola Alura, Se quiser me conhecer melhor só clicar 
                    em <span className={styles.sobre}>Sobre Mim</span>, no cabeçalho da página. <p>Aqui compartilho vários 
                    conhecimentos, espero que aprenda algo novo:</p>
                </div>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Circulo colorido"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Rafael"
                />
            </div>
        </div>
    )
}