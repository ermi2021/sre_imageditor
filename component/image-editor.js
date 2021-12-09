import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import React from "react";
const theme = {
  // sre logo
  "common.bi.image": "https://sreglobal.com/images/logo.png",
  "common.bisize.width": "150px",
  "common.bisize.height": "100px",
  "common.backgroundColor": "#1E1C3E",
  "submenu.backgroundColor": "transparent",
  "submenu.partition.color": "black",
  "submenu.marginTop": "25px",

  // load button
  "loadButton.backgroundColor": "white",
  "loadButton.border": "1px solid #ddd",
  "loadButton.color": "#222",
  "loadButton.fontFamily": "'Noto Sans', sans-serif",
  "loadButton.fontSize": "12px",
  "loadButton.borderRadius": "0px",
  "loadButton.marginTop": "45px",
  "loadButton.marginRight": "15px",

  // download button
  "downloadButton.marginTop": "45px",
  "downloadButton.borderRadius": "0px",

  // header
  "header.backgroundImage": "none",
  "header.backgroundColor": "transparent",
  "header.border": "3px",
  "header.position": "absolute",
  "header.bottom": "0",
  "header.height": "fit-content",
};
const CustomImageEditor = () => {
  const editorRef = React.createRef();

  const handleClickButton = () => {
    const editorInstance = editorRef.current.getInstance();

    editorInstance.flipX();
  };

  return (
    <>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: "img/sampleImage.jpg",
            name: "SampleImage",
          },
          theme,
          initMenu: "filter",
          uiSize: {
            width: "100%",
            height: "80vh",
          },
          menuBarPosition: "right",
        }}
        cssMaxHeight={700}
        cssMaxWidth={300}
        selectiontyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatstics={true}
      />
      <button onClick={handleClickButton}>Flip image by X Axis!</button>
    </>
  );
};

export default CustomImageEditor;
