
import styles from "./page.module.css"

export default function TypescripFun() {
  return(
    <>
    <h2 className={styles.mainHeader}>What is TypeScript?</h2>
    <section className={styles.infoContainer}>
      <article className={styles.pageInfo}>
        <p className={styles.text}>
          <li>
            TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system.
            For example, JavaScript provides language primitives like string and number, but it doesn't check that you've consistently assigned these. TypeScript does.
          </li>
          <li>
            This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
            This tutorial provides a brief overview of TypeScript, focusing on its type system.
          </li>
          <li>
            Setting Up the EnvironmentInstallation
            Install Node.js (which includes npm): Node.js Download
          </li>
        </p>
        <pre><code>
        {`npm install -g typescript;`}
        </code></pre>
      </article>
    </section>
   </>
  )
}