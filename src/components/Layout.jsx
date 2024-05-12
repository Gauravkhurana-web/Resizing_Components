import "./Layout.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ChildContainer from "./ChildContainer";
function Layout() {
  return (
    <div className="container">
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal" className="hori">
            <Panel minSize={20} maxSize={75} defaultSize={20}>
              <ChildContainer name="child1" />
            </Panel>

            <PanelResizeHandle />

            <Panel minSize={20} maxSize={75} defaultSize={50}>
              <ChildContainer name="child2" />
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />

        <Panel minSize={20} maxSize={75} defaultSize={40}>
          <ChildContainer name="child3" />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Layout;
