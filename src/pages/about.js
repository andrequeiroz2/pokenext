import Image from "next/image";
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <div className={styles.about}>
            <h1>About project</h1>
            <p>
                <Image 
                    src="/images/charizard.png"
                    width={300}
                    height={300}
                    alt="PokeNext"
                />
            </p>
        </div>
    );
}