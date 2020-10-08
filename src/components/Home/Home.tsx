import React from 'react';
import { Typography} from "@material-ui/core";
import homeImgSource from '../../resources/forest.jpg'
import useStyles from './styles'
import {Footer} from "../Footer/Footer";

export const Home = () => {
    const styles = useStyles();
    return (
    <>
        <div>
            <img
                className={styles.image}
                src={homeImgSource}
                alt="Forest"
            />

                <section>
                    <Typography
                        variant="h3"
                        align="center"
                    >
                        Home page
                    </Typography>
                    <p
                        className={styles.p}
                    >
                        JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
                    </p>
                </section>

        </div>
        <Footer/>
    </>
    );
}