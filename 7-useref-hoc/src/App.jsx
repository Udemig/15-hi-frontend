import Input from "./ref-components/input";
import Scroll from "./ref-components/scroll";
import Counter from "./ref-components/counter";
import Timer from "./ref-components/timer";
import Form from "./hoc-components/form";
import Modal from "./hoc-components/modal";
import { useState } from "react";

const App = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="p-5 d-flex flex-column gap-5">
      <h3>Örnek-6: HOC - Modal Kullanımı</h3>
      <button onClick={() => setIsConfirmOpen(true)}>Onay Modalı Aç</button>
      <button onClick={() => setIsFormOpen(true)}>Form Modalı Aç</button>

      <Modal isOpen={isConfirmOpen} close={() => setIsConfirmOpen(false)}>
        <h3>Hesabınızı silmek istediğinizden emin misiniz?</h3>
        <p>Bu işlem geri alınamaz</p>
      </Modal>

      <Modal isOpen={isFormOpen} close={() => setIsFormOpen(false)}>
        <Timer />
      </Modal>

      <Form />

      <Timer />

      <Counter />

      <Scroll />

      <Input />
    </div>
  );
};

export default App;
