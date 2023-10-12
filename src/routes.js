import Exit from "./Demo/Exit";
import Hover from "./Demo/Hover";
import KeyFrame from "./Demo/Keyframe";
import Motion from "./Demo/Motion";
import ReOrder from "./Demo/ReOrder";
import Variants from "./Demo/Variants";
import Counter from "./LiveCode/Counter";
import Lyric from "./LiveCode/Lyric";
import MagicWidgetComponent from "./LiveCode/Select";
import ExpandableTag from "./LiveCode/Tags";

export const routes = [
  {
    path: "/",
    element: <div className="title">Hello world!</div>,
  },
  {
    path: "/motion",
    element: <Motion />,
  },
  {
    path: "/keyframe",
    element: <KeyFrame />,
  },
  {
    path: "/variants",
    element: <Variants />,
  },
  {
    path: "/AnimatePresence",
    element: <Exit />,
  },
  {
    path: "/guesture",
    element: <Hover />,
  },
  {
    path: "/reorder",
    element: <ReOrder />,
  },
  {
    path: "/live-demo-basic",
    element: <Counter />
  },
  {
    path: "/live-demo-layout",
    element: <ExpandableTag />
  },
  {
    path: "/live-demo-layoutId",
    element: <MagicWidgetComponent />
  },
  {
    path: "/live-demo-spotify",
    element: <Lyric />
  }
];
