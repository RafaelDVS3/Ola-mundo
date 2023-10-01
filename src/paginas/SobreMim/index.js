import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rafael!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Rafael"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na Alura comecei por que tinha curiosidade na área de tecnologia,
                sempre gostei de computadores e tudo relacionado a esta área, jogos ,sites , edição de videos etc... 
            </p>
            
            <p className={styles.paragrafo}>
                Comecei com o front-end pois eu fui instruido 
                a seguir esse caminho pois me disseram, (por videos na internet) que era o mais facil, 
                todo meu conhecimento com programação vem da alura, tive iniciativa de pagar o curso e começar a estudar,
                e gostei muito dá área da tecnologia.
            </p>
                
           
           <p className={styles.paragrafo}>Tenho conhecimentos em HTML, CSS, JavaScript e me aprofundei na network React.
                também tenho conhecimentos em git e git-hub, estou estudando TypeScript e também pretendo estudar a linguagem Java.</p>
        
        </PostModelo>
    )
}