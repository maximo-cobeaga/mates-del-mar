import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductosContext } from "../context/ProductosContext";
import { redirect, useNavigate } from "react-router-dom";

export function FormularioVariacion({ variaciones, prod }) {
  const {
    addItemToCart,
    variacionData,
    cartItem,
    setCartItem,
    setVariacionData,
  } = useContext(ProductosContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      variacion: "-- Selecciona una opcion --",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setVariacionData({
      diseño: data.variacion,
    });
    addItemToCart({
      ...prod,
      diseño: data.variacion,
    });
    
    navigate("/carrito");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Selecciona una opcion</label>
        <select
          className="form-select"
          {...register("variacion", {
            required: true,
          })}
        >
          {" "}
          -- Selecciona un Opcion --
          {variaciones.map((variacion) => {
            return (
              <option key={variacion.id} value={variacion.variacion}>
                {variacion.variacion}
              </option>
            );
          })}
          {errors.variacion?.type === "required" && (
            <p>Este campo es Obligatorio</p>
          )}
        </select>
      </div>
      <input
        className="btn btn-outline-dark"
        type="submit"
        value="Agregar al Carrito"
      />
    </form>
  );
}
