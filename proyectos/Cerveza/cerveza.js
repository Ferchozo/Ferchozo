const cervezas = [
  {
    nombre: "TANGAN",
    tipo: "Amber Ale",
    descripcion: "Cerveza tipo amber, acaramelada, con cuerpo medio y ligeramente amarga con tonos de lúpulos cítricos.",
    datos: {
      IBU: 21.6,
      kcal: 223,
      ABV: "5%",
      SRM: 18
    },
    precios: {
      "330ml": "$4,75",
      "Pinta 450ml": "$6,00",
      "Doble Pinta 900ml": "$12,00",
      "Jarra 1.5LT": "$17,50"
    }
  },
  {
    nombre: "PACHA",
    tipo: "Black",
    descripcion: "Negra con mucho cuerpo, compleja y ligeramente dulce con notas de malta tostada que evoca al café y al cacao.",
    datos: {
      IBU: 35,
      kcal: 460,
      ABV: "10%",
      SRM: 23
    },
    precios: {
      "330ml": "$5,75",
      "Pinta 450ml": "$7,00",
      "Jarra 1.5LT": "$20,50"
    }
  },
  {
    nombre: "GEISHA",
    tipo: "Japanese Rice Lager",
    descripcion: "Delicado sabor y textura, maltas de cebada y arroz con lúpulo alemán, es una cerveza muy repetible.",
    datos: {
      IBU: 11.4,
      kcal: 200,
      ABV: "4.2%",
      SRM: 3.5
    },
    precios: {
      "330ml": "$4,75",
      "Pinta 450ml": "$6,00",
      "Doble Pinta 900ml": "$12,00",
      "Jarra 1.5LT": "$17,50"
    }
  },
  {
    nombre: "PURA VIDA",
    tipo: "Gose Ale",
    descripcion: "Típica del norte de Alemania, ligeramente salada con acidez similar al vino blanco y tropicalizada con frutilla.",
    datos: {
      IBU: 6.6,
      kcal: 260,
      ABV: "4.5%",
      SRM: 6
    },
    precios: {
      "330ml": "$5,75",
      "Pinta 450ml": "$7,00",
      "Doble Pinta 900ml": "$13,75",
      "Jarra 1.5LT": "$20,50"
    }
  }
];

const menu = document.getElementById("menu");

cervezas.forEach(cerveza => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${cerveza.nombre}</h2>
    <small>${cerveza.tipo}</small>
    <p>${cerveza.descripcion}</p>
    <div class="info">
      <span>IBU: ${cerveza.datos.IBU}</span>
      <span>Kcal/500ml: ${cerveza.datos.kcal}</span>
      <span>ABV: ${cerveza.datos.ABV}</span>
      <span>SRM: ${cerveza.datos.SRM}</span>
    </div>
    <div class="precios">
      ${Object.entries(cerveza.precios).map(([k, v]) => `<div>${k}: ${v}</div>`).join("")}
    </div>
  `;
  menu.appendChild(card);
});
