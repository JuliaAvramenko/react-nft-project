import { FC, ReactNode } from 'react';
import styles from './button.module.css';


type TButton = {
    buttonType: string
    textType: string
    buttonSize: string
    className?: string
    children: React.ReactNode
}

/**
 * <Button button_type="yellow" text_type="white">blabal</Button>
 * @param props 
 * @returns 
 */

const Button: FC<TButton> = ((props) => {
    let colorSchema;
    let textSchema;
    let sizeSchema;
    if (props.buttonType === 'yellow') {
        colorSchema = styles.button_yellow
    }
    if (props.buttonType === 'gray') {
        colorSchema = styles.button_gray
    }
    if (props.buttonType === 'black') {
        colorSchema = styles.button_gray
    }
    if (props.textType === 'black') {
        textSchema = styles.text_black
    }
    if (props.textType === 'yellow') {
        textSchema = styles.text_yellow
    }
    if (props.textType === 'white') {
        textSchema = styles.text_white
    }
    if (props.buttonSize === "big") {
        sizeSchema = styles.size_big
    }
    if (props.buttonSize === "medium") {
        sizeSchema = styles.size_medium
    }
    if (props.buttonSize === "small") {
        sizeSchema = styles.size_small
    }

    return (
        <button className={`${colorSchema} ${textSchema} ${sizeSchema} ${styles.button} ${props.className}`}>{props.children}</button>

    );
})

export default Button;