import "@bamboorose/br-components-2.0/dist/style.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";

import { Button } from "@bamboorose/br-components-2.0";
import { DemoAccordion } from "./components/Accordion";
import sampleSectionData from "./data/sample-section-data.json";
import { Details } from "./components/details";
import { getPrimaryFields } from "./utils/get-primary-fields";

function App() {
  return (
    <MantineProvider>
      <Button>RoseUI Button</Button>
      <Details data={getPrimaryFields(sampleSectionData.sections)} />
      <DemoAccordion data={sampleSectionData.sections} />
    </MantineProvider>
  );
}

export default App;
