(async () => {
    try {
      const conn = require("../config/database");
  
   
      await require("./ModelImagenProtudo");
      await require("./ModelCategoria");
      await require("./ModelUsuario");
      await require("./ModelProduto");
      await require("./ModelOptProduto");
      await require("./ModelProtutoCategoria");
  

      const resultado = await conn.sync(); 
      console.log("Database sincronizado:");
    } catch (error) {
      console.error("Erro sincronizacao  database:", error);
    }
  })();