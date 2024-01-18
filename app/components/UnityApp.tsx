"use client"
import { Unity } from "react-unity-webgl";
import { useUnityContext } from "react-unity-webgl";
const UnityApp = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity-build/Build/Caostest.loader.js",
    dataUrl: "/unity-build/Build/Caostest.data",
    frameworkUrl: "/unity-build/Build/Caostest.framework.js",
    codeUrl: "/unity-build/Build/Caostest.wasm",
  });
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className=" font-bold text-center ">二重振り子</h1>
      <Unity className="w-full" unityProvider={unityProvider} />
      <p className="text-center">スペースキーを押すことでリセットできます</p>
      <p className="text-center">振り子の個数:約1300個</p>
      <p className="text-center">振り子の比重 5:1</p>
      <p className="text-center">大きくばらけるまでの秒数: 23秒</p>
      <p className="text-center">全ての振り子の初期角度は1度以内に収まっている</p>
    </div>
  );
}

export default UnityApp;