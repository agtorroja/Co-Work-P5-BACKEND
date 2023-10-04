const express = require("express");
const router = express.Router();
const {
  listOffices,
  getOfficeById,
  addOffice,
  editOffice,
  editTableCapacity,
  addTable,
  deleteTable,
  getTables,
} = require("../controllers/adminController");
const { validateUser, validateAdmin } = require("../middleware/auth");
const { Tables } = require("../models");

// Ruta para listar todas las oficinas.
router.get("/offices", validateUser, listOffices);

//Ruta para ver el detalle de una oficina.
router.get("/offices/:officeId", validateUser, getOfficeById);

//Ruta para agregar una nueva oficina.
router.post("/offices", validateUser, validateAdmin, addOffice);

//Ruta para editar cualquier campo de la oficina.
router.put("/offices/:officeId", validateUser, validateAdmin, editOffice);

// Ruta para editar la capacidad de una mesa.
router.put(
  "/offices/:officeId/tables/:tableId",
  validateUser,
  validateAdmin,
  editTableCapacity
);

//Ruta para obtener las mesas de una oficina
router.get("/offices/:officeId/tables", validateUser, validateAdmin, getTables)

//Ruta para crear una mesa
router.post("/offices/:officeId/tables", validateUser, validateAdmin, addTable);

//Ruta para eliminar una mesa
router.delete(
  "/offices/:officeId/tables/:tableId",
  validateUser,
  validateAdmin,
  deleteTable
);

module.exports = router;
