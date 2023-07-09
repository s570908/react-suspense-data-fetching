import { useState, startTransition, Suspense } from "react";
import DelayedPage from "./DelayedPage";

const Transition = () => {
  const [page, setPage] = useState(0);

  const pages = [
    <DelayedPage key="0" delay={1000}>
      1000ms 지연된 페이지
    </DelayedPage>,
    <DelayedPage key="1" delay={3000}>
      3000ms 지연된 페이지
    </DelayedPage>,
    <DelayedPage key="2" delay={6000}>
      6000ms 지연된 페이지
    </DelayedPage>,
  ];

  return (
    <>
      <nav>
        <button onClick={() => startTransition(() => setPage(0))}>첫 번째 페이지</button>
        <button onClick={() => startTransition(() => setPage(1))}>두 번째 페이지</button>
        <button onClick={() => startTransition(() => setPage(2))}>세 번째 페이지</button>
      </nav>
      <Suspense fallback={"로딩 중..."}>{pages[page]}</Suspense>
    </>
  );
};

export default Transition;
