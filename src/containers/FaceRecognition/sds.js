import React, { useState, useEffect } from "react";
import styles from "./styles.less";
import FileUpload from "../../components/FileUpload";
import presidentsImg from "./pres.jpg";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function App() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [identifiedFaces, setIdentifiedFaces] = useState(null);

    useEffect(() => {
        getFileFromUrl(presidentsImg, "hi.jpeg", "image/jpeg").then(r => {
            console.log(r);
            const img = onImageChange(r);
            postImage(null, img);
        });
    }, []);

    const postImage = (e, img) => {
        setLoading(true);
        fetchApi("/api/getFaces", { method: "POST", body: img || image }).then(res => {
            const faces = res.result.map(elt => {
                const imageSrc = "data:image/png;base64," + elt.img;
                return { imageSrc, label: labelMap[elt.label] };
            });
            setLoading(false);
            setIdentifiedFaces(faces);
        });
    };

    const onImageChange = img => {
        if (img) {
            const data = new FormData();
            setImageFile(img);
            data.append("file", img);
            setImage(data);
            setIdentifiedFaces(null);
            return data;
        }
    };
    console.log(identifiedFaces, imageFile);
    return (
        <div>
            <div className={styles.file_upload}>
                <FileUpload
                    height={150}
                    width={600}
                    onChange={onImageChange}
                    acceptedList={["image/x-png", "image/jpg", "image/jpeg"]}
                />
                {image && !identifiedFaces && (
                    <div className={styles.upload_button} onClick={postImage}>
                        Upload Image
                    </div>
                )}
            </div>

            {identifiedFaces && (
                <div className={styles.faces_wrapper}>
                    {identifiedFaces.map((item, i) => {
                        return (
                            <div className={styles.person_card} key={item.label + i}>
                                <span>{item.label}</span>
                                <img src={item.imageSrc} />
                            </div>
                        );
                    })}
                </div>
            )}
            {imageFile && (
                <div className={styles.image_wrapper}>
                    <img className={styles.image_container} src={URL.createObjectURL(imageFile)} />
                </div>
            )}
            {loading && (
                <div className={styles.loader}>
                    <LoadingIndicator />
                </div>
            )}
        </div>
    );
}
async function fetchApi(url, options) {
    const response = await fetch(url, options);
    if (response.status !== 200) {
        throw new Error();
    }

    // var b64Response = btoa(response);
    // return b64Response;
    // console.log("Result", btoa(response));

    // const result = await response.blob();
    const result = await response.json();
    return result;
}

async function getFileFromUrl(url, name, defaultType = "image/jpeg") {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
        type: response.headers.get("content-type") || defaultType
    });
}

const labelMap = {
    bush: "George W Bush",
    bush_sr: "George H W Bush",
    carter: "Jimmy Carter",
    clinton: "William J Clinton",
    donald_trump: "Donald Trump",
    ford: "Gerald Ford",
    nixon: "Richard Nixon",
    obama: "Barak Obama",
    reagan: "Ronald Reagan"
};
