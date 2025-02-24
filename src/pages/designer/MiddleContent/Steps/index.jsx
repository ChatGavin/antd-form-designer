import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import styles from "./index.module.css";
import { Tooltip } from "antd";
import classNames from "classnames";

const Steps = observer(() => {
  const { designerStore } = rootStore;
  const { stepsStore } = designerStore;

  return (
    <div className={styles.container}>
      {stepsStore.steps.map((step, index) => (
        <>
          {index > 0 && <div className={styles.divider} />}
          <Tooltip key={step.id} title={step.title}>
            <div
              className={classNames(styles.step, {
                [styles.activeStep]: stepsStore.activeId === step.id,
              })}
              onClick={() => stepsStore.switchStep(step.id)}
            >
              <step.icon size={20} />
            </div>
          </Tooltip>
        </>
      ))}
    </div>
  );
});

export default Steps;
