import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir?</h3>

        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p role="content" className={isOpen ? "show" : "hide"}>
        Birim testi (Unit Test), yazılım projelerinde kodun en küçük parçalarının (genellikle tek bir fonksiyon veya
        metodun) beklendiği gibi çalışıp çalışmadığını izole bir şekilde doğrulayan bir yazılım test yöntemidir.
      </p>
    </div>
  );
};

export default Accordion;
