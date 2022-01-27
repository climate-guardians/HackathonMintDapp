import { Fragment, useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useMoralis } from "react-moralis";

const unityContext = new UnityContext({
  loaderUrl: "../public/forestBuild/forestUnity.loader.js",
  dataUrl: "../public/forestBuild/forestUnity.data",
  frameworkUrl: "../public/forestBuild/forestUnity.framework.js",
  codeUrl: "../public/forestBuild/forestUnity.wasm",
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
        <h1>React Unity WebGL Tests</h1>
        <p>
          In this React Application we'll explore the possibilities with the
          React Unity WebGL Module. Use the built-in events, custom events,
          mount, unmount, press the buttons and resize the view to see the magic
          in action.
        </p>
        <button onClick={handleOnClickUnMountUnity}>(Un)mount Unity</button>
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
        {/* <h6>
          Made with love by{" "}
          <a href="https://github.com/jeffreylanters">Jeffrey Lanters</a>
        </h6> */}
      </div>
    </Fragment>
  );
}

  // return (
  // <Unity unityContext={unityContext} />
  //   );
  // }



export default UnityForest;