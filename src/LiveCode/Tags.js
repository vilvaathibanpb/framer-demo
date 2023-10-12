import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

function ExpandableTag({ unhoveredText, hoveredText }) {
  const width = useRef(0);
  const ref = useRef();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <LayoutGroup>
      <motion.div
        className="inline-block"
        style={{ minWidth: width.current }}
        onHoverStart={() => {
          if (!isHovering) {
            width.current = ref.current.offsetWidth;
          }
          setIsHovering(true);
        }}
        onHoverEnd={() => setIsHovering(false)}
      >
        <motion.div
          ref={ref}
          className="inline-block relative text-gray-300 bg-gray-900 ring-1 ring-gray-800 px-4 py-1.5 tracking-wider text-sm font-medium whitespace-nowrap"
          style={{ borderRadius: 8 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={isHovering ? "hovering" : "unhovering"}
            >
              {isHovering ? hoveredText : unhoveredText}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}

function Tag() {
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <ExpandableTag unhoveredText="INR" hoveredText="Indian Rupees" />
      <ExpandableTag unhoveredText="USD" hoveredText="US Dollars" />
      <ExpandableTag unhoveredText="EUR" hoveredText="Euro" />
    </div>
  );
}

export default Tag;
