import { Modal } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";

const App = observer(() => {
  const { designerStore } = rootStore;
  const visible = designerStore.dialogStore.getState("changelog");

  return (
    <Modal
      title="版本更新"
      open={visible}
      onCancel={() => designerStore.dialogStore.hide("changelog")}
      footer={null}
    >
      <div>版本更新内容...</div>
    </Modal>
  );
});

export default App;
