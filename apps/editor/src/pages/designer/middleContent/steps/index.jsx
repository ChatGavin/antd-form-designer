import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import styles from "./index.module.css";
import { Tooltip } from "antd";
import classNames from "classnames";

const App = observer(() => {
  const { designerStore } = rootStore;
  const { stepsStore } = designerStore;

  return (
    <div className={styles.container}>
      {stepsStore.steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {index > 0 && <div className={styles.divider} />}
          <Tooltip title={step.title}>
            <div
              className={classNames(styles.step, {
                [styles.activeStep]: stepsStore.activeId === step.id,
              })}
              onClick={() => stepsStore.switchStep(step.id)}
            >
              <step.icon size={20} />
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
});

export default App;
