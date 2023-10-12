import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";

const sentence = `He said, "One day, you'll leave this world behind
  So live a life you will remember"
  My father told me when I was just a child
  "These are the nights that never die"
  My father told me`;

const wordsArray = sentence.split(" ");

function pageScroll() {
  window.scrollBy(0, 1);
  const scrolldelay = setTimeout(pageScroll, 20);
}

pageScroll();

function App() {


  return (
    <main className="main-container relative w-0.5 overflow-y-scroll">
      <p
        style={{ width: "25%", marginLeft: "50%", marginTop: "50%" }}
        className="text-white tracking-wide text-5xl leading-12 sticky top-1/2 w-0.5"
      >
        {wordsArray.map((word, i) => {
          return (
            <span className="opacity-100" key={i}>
              {word}{" "}
            </span>
          );
        })}
      </p>
    </main>
  );
}

export default App;
