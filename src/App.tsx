import "@bamboorose/br-components-2.0/dist/style.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Button } from "@bamboorose/br-components-2.0";
import { DemoAccordion } from "./Accordion";
import sampleSectionData from "./data/sample-section-data.json";

function App() {
  return (
    <MantineProvider>
      <div>
        <Button>RoseUI Button</Button>
        <DemoAccordion data={sampleSectionData.sections} />
      </div>
    </MantineProvider>
  );
}

export default App;
