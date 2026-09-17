/* app.get("/", (req, res)=>{
    const saludo = { mensaje : "Bienvenidos a la Api Servicio de Pizzas Fes Aragon"};
    return res.json(saludo);
    });


app.get("/api/v1/pizzas", (req, res) => {
  const pizzas = [
    { 
      nombre: "Toluqueña", 
      descripcion: "Chorizo, queso oaxaca y piña" 
    },
    { 
      nombre: "Pepperoni", 
      descripcion: "Doble pepperoni y extra queso mozzarella" 
    },
    { 
      nombre: "Hawaiana", 
      descripcion: "Jamón, piña dulce y queso mozzarella" 
    },
    { 
      nombre: "Mexicana", 
      descripcion: "Chorizo, jalapeños, cebolla, granos de elote y queso" 
    },
    { 
      nombre: "Vegetariana", 
      descripcion: "Queso, rodajas de tomate fresco, aguacate, champiñones, Cebolla" 
    }
  ];
  return res.json(pizzas);
});

app.post("/api/v1/pizzas", (req, res) => {

  const pizza = req.body
  console.log(pizza)
  //guardarpizza(body)
  const respuestaDto = {
    mensaje : "Pizza Agregada",
    id:1,
    fecha: new Date()
  }
  return res.status(201).json(respuestaDto);
});



// Ruta para la lista de tamaños
app.get("/api/v1/tamanios", (req, res) => {
  const tamanios = [
    { 
      nombre: "Chica", 
      rebanadas: 4,
      descripcion: "Ideal para 1 persona"
    },
    { 
      nombre: "Mediana", 
      rebanadas: 8,
      descripcion: "Perfecta para compartir entre 2 personas"
    },
    { 
      nombre: "Grande", 
      rebanadas: 12,
      descripcion: "Para la familia (3 a 4 personas)"
    },
    { 
      nombre: "Jumbo", 
      rebanadas: 16,
      descripcion: "Para fiestas y reuniones"
    }
  ];

  return res.json(tamanios);
});

// Ruta para la lista de bebidas
app.get("/api/v1/bebidas", (req, res) => {
  const bebidas = [
    { 
      nombre: "Refresco de Cola", 
      tamanio: "600 ml", 
      tipo: "Gasificada" 
    },
    { 
      nombre: "Agua de Jamaica", 
      tamanio: "1 Litro", 
      tipo: "Natural" 
    },
    { 
      nombre: "Agua de Horchata", 
      tamanio: "1 Litro", 
      tipo: "Natural" 
    },
    { 
      nombre: "Naranjada Mineral", 
      tamanio: "500 ml", 
      tipo: "Gasificada" 
    }
  ];

  return res.json(bebidas);
}); */