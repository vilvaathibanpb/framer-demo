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
  const { scrollYProgress } = useScroll();
  const [scope, animate] = useAnimate();
  let coveredIndex = 0;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      const coveredWordNumber = Math.floor(latest * wordsArray.length);
      console.log(latest, coveredIndex, coveredWordNumber);
    if (coveredWordNumber > wordsArray.length) {
      return;
    }
    for (; coveredIndex < coveredWordNumber; coveredIndex++) {
      animate(scope.current.children[coveredIndex], { opacity: 1 });
    }
  });

  return (
    <main className="main-container relative w-0.5 overflow-y-scroll">
      <motion.p
        style={{ width: "25%", marginLeft: "50%", marginTop: "50%" }}
        className="text-white tracking-wide text-5xl leading-12 sticky top-1/2 w-0.5"
        ref={scope}
      >
        {wordsArray.map((word, i) => {
          return (
            <motion.span className="opacity-0" key={i}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.p>
    </main>
  );
}

export default App;
