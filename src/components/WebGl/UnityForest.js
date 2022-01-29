import { Fragment, useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useMoralis } from "react-moralis";
import { Typography, Button} from 'antd';

const { Title, Paragraph } = Typography;

const styles = {
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "archivo",
    fontSize: "20px",
    color: "#041836",
    marginTop: "10px",
    padding: "15px",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "36px",
    letterSpacing: '-1.5px',
    fontWeight: '500',
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: '-1.5px',
  },
  subheader: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "archivo",
    fontSize: "28px",
    color: "#041836",
    marginTop: "10px",
    padding: "5px",
  },
};

const unityContext = new UnityContext({
  loaderUrl: "forestBuild/Build/forestUnity.loader.js",
  dataUrl: "forestBuild/Build/forestUnity.data",
  frameworkUrl: "forestBuild/Build/forestUnity.framework.js",
  codeUrl: "forestBuild/Build/forestUnity.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

function UnityForest() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [isUnityMounted, setIsUnityMounted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);

  // When the component is mounted, we'll register some event listener.
  useEffect(() => {
    unityContext.on("canvas", handleOnUnityCanvas);
    unityContext.on("progress", handleOnUnityProgress);
    unityContext.on("loaded", handleOnUnityLoaded);
  }, []);

  // Built-in event invoked when the Unity canvas is ready to be interacted with.
  function handleOnUnityCanvas(canvas) {
    canvas.setAttribute("role", "unityCanvas");
  }

  // Built-in event invoked when the Unity app's progress has changed.
  function handleOnUnityProgress(progression) {
    setProgression(progression);
  }

  // Built-in event invoked when the Unity app is loaded.
  function handleOnUnityLoaded() {
    setIsLoaded(true);
  }

  // Event invoked when the user clicks the button, the unity container will be
  // mounted or unmounted depending on the current mounting state.
  function handleOnClickUnMountUnity() {
    if (isLoaded === true) {
      setIsLoaded(false);
    }
    setIsUnityMounted(isUnityMounted === false);
  }

  // This is the React component that will be rendering the Unity app.
  return (
    <Fragment>
      <div className="wrapper">
        {/* Introduction text */}
        <Typography>
          <Title style={styles.header}>Battle!</Title>
          
          <Title style={styles.subheader}>Lumberjack invasion</Title>
          <Paragraph style={styles.content}>
          Naiara's village is under attack! Waves of Lumberjacks - send by evil corporations - are approaching. Corrupt politicians look the other way. No one to help, but you! Please, protect the village tree of life...
          </Paragraph>
          </Typography>
        <Button primary onClick={handleOnClickUnMountUnity}>(Re)start Game</Button>
        <br></br>
        {/* The Unity container */}
        {isUnityMounted === true && (
          <Fragment>
            <div className="unity-container">
              {/* The loading screen will be displayed here. */}
              {isLoaded === false && (
                <div className="loading-overlay">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: progression * 100 + "%" }}
                    />
                  </div>
                </div>
              )}
              {/* The Unity app will be rendered here. */}
              <Unity className="unity-canvas" unityContext={unityContext} />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}




export default UnityForest;