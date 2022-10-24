import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  createBackgroundImage,
  getRandomNumber,
  updateElementPositionY,
} from "./utils";

import "./App.css";
import classNames from "classnames";

function App() {
  const [numberListKey, setNumberListKey] = useState(0);
  const [active, setActive] = useState(false);
  const numberContainerRef = useRef<HTMLDivElement>(null);

  function toggleActive(current: boolean): void {
    // 避免多次触发
    if (active === current) {
      return;
    }

    setActive(current);
    if (current) {
      setNumberListKey(numberListKey + 1);
    }
  }

  useLayoutEffect(() => {
    if (numberListKey >= 1) {
      updateElementPositionY(
        numberContainerRef.current!.children,
        getRandomNumber()
      );
    }
  }, [numberListKey]);

  const numberStyle = useMemo(
    () => ({
      backgroundImage: `url(${createBackgroundImage(45, 60)})`,
    }),
    []
  );

  return (
    <div className="app">
      <div className="container">
        <header>
          <h3>获取验证码</h3>
          <div>请您拉动或点击拉杆，验证码就会出现哦</div>
        </header>
        <main>
          <section ref={numberContainerRef} key={numberListKey}>
            <div className="single-number" style={numberStyle}></div>
            <div className="single-number" style={numberStyle}></div>
            <div className="single-number" style={numberStyle}></div>
            <div className="single-number" style={numberStyle}></div>
          </section>
          <aside
            onClick={(): void => toggleActive(true)}
            className={classNames("btn-groups", { "btn-active": active })}
          >
            <div
              className="btn-ball"
              onAnimationEnd={(): void => toggleActive(false)}
            ></div>
            <div className="btn-rod"></div>
            <div className="btn-stand"></div>
          </aside>
        </main>
        <footer>
          <button>取消</button>
          <button>提交</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
