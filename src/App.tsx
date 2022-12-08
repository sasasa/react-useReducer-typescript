import "./styles.css";
import { useCustom } from "./hooks/useCustom";

export default function App() {
  // a. カスタム フック useCustom から 再利用 可能 な 情報 を 取得
  const { state, increment, decrement, reset } = useCustom(0);

  // b. コンポーネント の 最終 的 な 出力
  return (
    <>
      <input type="button" value="カウントアップ" onClick={increment} />
      <input type="button" value="カウントダウン" onClick={decrement} />
      <input type="button" value="リセット" onClick={reset} />
      <p>{state.count}回、クリック さ れ まし た。</p>
    </>
  );
}
