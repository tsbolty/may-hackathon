import "@bamboorose/br-components-2.0/dist/style.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";

import { DemoAccordion } from "./components/Accordion";
import sampleSectionData from "./data/sample-section-data.json";
import { Details } from "./components/details";
import { getPrimaryFields } from "./utils/get-primary-fields";
import classes from "./App.module.css";

function App() {
  return (
    <MantineProvider>
      <div className={classes.container}>
        <Details data={getPrimaryFields(sampleSectionData.sections)} />
        <DemoAccordion data={sampleSectionData.sections} />
      </div>
    </MantineProvider>
  );
}

export default App;
