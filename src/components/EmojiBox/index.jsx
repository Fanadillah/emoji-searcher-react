import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Emoji.module.css";

const EmojiBox = ({ title, symbol}) => {
    const [selected, setSelected] = useState(false)

    // useeffect setiap pembuatan selalu ada arrow function dan valuable
    useEffect(() => {
        // digunakan untuk mengubah state selected menjadi false setelah 600ms
        // jika selected true maka akan mengubah state selected menjadi false
        const timer = setTimeout(() => setSelected(false), 600)

        return () => clearTimeout(timer)
    }, [selected])
    return (
        <div
        onClick={() => {
            navigator.clipboard.writeText(symbol);
            setSelected(true);
        }}
        className={classnames(styles.emojiBox,{
            [styles.selected] : selected
            })}>
            <p 
            className={styles.emoji}
            dangerouslySetInnerHTML={{
                __html: `&#${symbol.codePointAt(0)}`
            }}
            />

            <p className={styles.emojiText}>
                {selected ? 'Copied!' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}
export default EmojiBox