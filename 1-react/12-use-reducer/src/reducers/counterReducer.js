/* 
 ! Reducer Fonksiyonu
 * İki parametre alır
 * 1) state'in son hali
 * 2) dispatch edilen aksiyon
 
 * reducer fonksiyonundan return edilen değer state'in son değeri olur 
 * dispatch edilen aksiyonun tipine göre koşullu bir ifadeyle hangi değerin return edileceğini belirleriz
*/

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      return state + 1;

    case "AZALT":
      return state - 1;

    case "SIFIRLA":
      return 0;
  }
};

export default counterReducer;
