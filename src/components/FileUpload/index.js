import React, { useState } from "react";
import styles from "./styles.less";
import FontAwesome from "react-fontawesome";

export default function FileUpload(props) {
    const [isInvalid, setIsInvalid] = useState(false);
    const [file, setFile] = useState(undefined);
    const { onChange, width, height, acceptedList } = props;

    const onFileChange = e => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);
            onChange(file);
        }
    };
    const onDrop = e => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            const valid = checkForFileTypes(file);
            if (valid) {
                const { name } = file;
                setFile(file);
                setIsInvalid(false);
                return;
            }
            setIsInvalid(true);
            onChange(false);
        }
    };

    const checkForFileTypes = file => {
        const { type, name } = file;
        if (acceptedList.includes(type)) return true;
    };

    const getTextContent = () => {
        let text = "";
        if (file) {
            text = (
                <span>
                    <FontAwesome
                        name="file-o"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)", paddingRight: 5 }}
                    />
                    {file.name}
                </span>
            );
        } else if (isInvalid) {
            text = "Invalid file";
        } else {
            text = "Drag and Drop or select a file from your computer to upload";
        }
        return <p>{text}</p>;
    };

    return (
        <div style={{ width, height }}>
            <div className={styles.dropzone} onDrop={onDrop}>
                <input
                    type="file"
                    onChange={onFileChange}
                    className={styles.drop_input}
                    accept={acceptedList.join(",")}
                />
                {getTextContent()}
            </div>
        </div>
    );
}
