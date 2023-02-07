const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      carrito: [
        {
          id: 1,
          name: "producto",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
        },
        {
          id: 2,
          name: "producto II",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
        },
        {
          id: 3,
          name: "producto III",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 3,
        },
      ],
      total: 0,
      prices: [],
    },
    actions: {
      addCarrito: (item) => {
        if (getStore().carrito.some((elem) => elem.name === item.name)) {
          getActions().quitCarrito(item);
        } else {
          setStore({
            carrito: getStore().carrito.concat(item),
          });
          console.log(`${item.name} se ha añadido al carrito de compras.`);
        }
        getActions().sumCarrito();
      },
      quitCarrito: (item) => {
        setStore({
          carrito: getStore().carrito.filter((i) => i.name !== item.name),
        });
        console.log(`${item.name} se ha eliminado del carrito de compras.`);
        getActions().sumCarrito();
      },
      sumCarrito: () => {
        const totalSum = getStore().carrito.reduce(
          (accumulator, currentValue) => accumulator + currentValue.price,
          0
        );
        setStore({
          total: totalSum,
        });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};

export default getState;
