import reducer, {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  openCart,
  closeCart,
  toggleCart,
  selectCartItems,
  selectCartIsOpen,
  selectTotalItems,
  selectTotalPrice,
} from "./cartSlice";

const initialState = { items: [], isOpen: false };

// Tek bir ürün satırı üretir; testlerde override edilebilir.
const makeItem = (overrides = {}) => ({
  id: "1",
  name: "Vanilya Rüyası",
  price: 149.9,
  image: "vanilya.jpg",
  serving: "Külah",
  quantity: 1,
  ...overrides,
});

// addToCart payload'ı (quantity taşımaz, reducer 1'den başlatır).
const payload = (overrides = {}) => {
  const { quantity, ...rest } = makeItem(overrides);
  return rest;
};

describe("cartSlice reducer", () => {
  test("bilinmeyen action'da başlangıç state'i döner", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  describe("addToCart", () => {
    test("sepet boşken yeni ürünü quantity 1 ile ekler", () => {
      const state = reducer(initialState, addToCart(payload()));

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual(makeItem({ quantity: 1 }));
    });

    test("aynı ürün + aynı serving tekrar eklenince quantity artar, satır eklenmez", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 2 })] };
      const state = reducer(start, addToCart(payload()));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].quantity).toBe(3);
    });

    test("aynı ürün farklı serving ayrı satır olarak eklenir", () => {
      const start = { ...initialState, items: [makeItem({ serving: "Külah" })] };
      const state = reducer(start, addToCart(payload({ serving: "Kap" })));

      expect(state.items).toHaveLength(2);
      expect(state.items[1].serving).toBe("Kap");
      expect(state.items[1].quantity).toBe(1);
    });

    test("farklı id ayrı satır olarak eklenir", () => {
      const start = { ...initialState, items: [makeItem({ id: "1" })] };
      const state = reducer(start, addToCart(payload({ id: "2" })));

      expect(state.items).toHaveLength(2);
    });
  });

  describe("increaseQuantity", () => {
    test("eşleşen ürünün miktarını 1 artırır", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 2 })] };
      const state = reducer(start, increaseQuantity({ id: "1", serving: "Külah" }));

      expect(state.items[0].quantity).toBe(3);
    });

    test("eşleşme yoksa state değişmez", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 2 })] };
      const state = reducer(start, increaseQuantity({ id: "999", serving: "Külah" }));

      expect(state.items[0].quantity).toBe(2);
    });
  });

  describe("decreaseQuantity", () => {
    test("eşleşen ürünün miktarını 1 azaltır", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 3 })] };
      const state = reducer(start, decreaseQuantity({ id: "1", serving: "Külah" }));

      expect(state.items[0].quantity).toBe(2);
    });

    test("miktar 1 iken azaltmaz (1'de kalır)", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 1 })] };
      const state = reducer(start, decreaseQuantity({ id: "1", serving: "Külah" }));

      expect(state.items[0].quantity).toBe(1);
    });

    test("eşleşme yoksa state değişmez", () => {
      const start = { ...initialState, items: [makeItem({ quantity: 3 })] };
      const state = reducer(start, decreaseQuantity({ id: "999", serving: "Kap" }));

      expect(state.items[0].quantity).toBe(3);
    });
  });

  describe("removeFromCart", () => {
    test("eşleşen ürünü siler, diğerlerine dokunmaz", () => {
      const start = {
        ...initialState,
        items: [makeItem({ id: "1" }), makeItem({ id: "2" })],
      };
      const state = reducer(start, removeFromCart({ id: "1", serving: "Külah" }));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].id).toBe("2");
    });

    test("aynı id'nin yalnızca eşleşen serving satırını siler", () => {
      const start = {
        ...initialState,
        items: [
          makeItem({ id: "1", serving: "Külah" }),
          makeItem({ id: "1", serving: "Kap" }),
        ],
      };
      const state = reducer(start, removeFromCart({ id: "1", serving: "Külah" }));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].serving).toBe("Kap");
    });
  });

  describe("clearCart", () => {
    test("tüm ürünleri temizler ama isOpen'ı korur", () => {
      const start = { items: [makeItem(), makeItem({ id: "2" })], isOpen: true };
      const state = reducer(start, clearCart());

      expect(state.items).toEqual([]);
      expect(state.isOpen).toBe(true);
    });
  });

  describe("isOpen action'ları", () => {
    test("openCart isOpen'ı true yapar", () => {
      expect(reducer(initialState, openCart()).isOpen).toBe(true);
    });

    test("closeCart isOpen'ı false yapar", () => {
      const start = { ...initialState, isOpen: true };
      expect(reducer(start, closeCart()).isOpen).toBe(false);
    });

    test("toggleCart isOpen'ı tersine çevirir", () => {
      const closed = reducer(initialState, toggleCart());
      expect(closed.isOpen).toBe(true);
      expect(reducer(closed, toggleCart()).isOpen).toBe(false);
    });
  });
});

describe("cartSlice selectors", () => {
  const rootState = {
    cart: {
      items: [
        makeItem({ id: "1", price: 100, quantity: 2 }),
        makeItem({ id: "2", price: 50, quantity: 3 }),
      ],
      isOpen: true,
    },
  };

  test("selectCartItems ürün listesini döner", () => {
    expect(selectCartItems(rootState)).toBe(rootState.cart.items);
  });

  test("selectCartIsOpen isOpen değerini döner", () => {
    expect(selectCartIsOpen(rootState)).toBe(true);
  });

  test("selectTotalItems toplam miktarı döner", () => {
    expect(selectTotalItems(rootState)).toBe(5);
  });

  test("selectTotalPrice toplam fiyatı döner", () => {
    // 100*2 + 50*3 = 350
    expect(selectTotalPrice(rootState)).toBe(350);
  });

  test("boş sepette toplamlar 0 döner", () => {
    const empty = { cart: { items: [], isOpen: false } };
    expect(selectTotalItems(empty)).toBe(0);
    expect(selectTotalPrice(empty)).toBe(0);
  });
});
