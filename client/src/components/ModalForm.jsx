import React, { useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { OptionSelect } from "./OptionSelect";
import { ProductosContext } from "../context/ProductosContext";

export function ModalForm({ mostrar, setMostrar }) {
  const handleClose = () => {
    setMostrar(false);
  };

  const {
    setModalIncioPaisForm,
    setFormularioDatos,
    setCompra,
    compra,
    formularioDatos,
    cartItem,
    setModalFormData,
    variacionData,
  } = useContext(ProductosContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      pais: "AR",
    },
  });

  useEffect(() => {
    const newcart = cartItem.map((prod) => {
      return {
        titulo: prod.titulo,
        cantidad: prod.amount,
        diseño: prod.diseño,
      };
    });
    setCompra(newcart);
  }, [cartItem]);
  8;

  const onSubmit = (data) => {
    setModalFormData(true);
    setMostrar(false);
    setModalIncioPaisForm(data.pais);
    setFormularioDatos(data);
    const newData = [ data ]
    setCompra(compra.concat(newData));
  };

  return (
    <>
      <Modal
        show={mostrar}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Rellene el formulario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                {...register("nombre", {
                  required: true,
                  maxLength: 40,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p style={{ color: "red" }}>El campo nombre es requerido</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  required: true,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p style={{ color: "red" }}>El campo email es incorrecto</p>
              )}
              {errors.email?.type === "required" && (
                <p style={{ color: "red" }}>El campo email es requerido</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                className="form-control"
                type="tel"
                {...register("telefono", {
                  required: true,
                })}
              />
              {errors.telefono?.type === "required" && (
                <p style={{ color: "red" }}>El campo telefono es requerido</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Pais</label>
              <select
                className="form-select"
                {...register("pais", {
                  required: true,
                })}
              >
                <OptionSelect />
              </select>
              {errors.pais?.type === "required" && (
                <p style={{ color: "red" }}>El campo pais es requerido</p>
              )}
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label">Provincia</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("provincia", {
                    required: true,
                  })}
                />
                {errors.provincia?.type === "required" && (
                  <p style={{ color: "red" }}>
                    El campo provincia es requerido
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("ciudad", {
                    required: true,
                  })}
                />
                {errors.ciudad?.type === "required" && (
                  <p style={{ color: "red" }}>El campo ciudad es requerido</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Direccion</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("direccion", {
                    required: true,
                  })}
                />
                {errors.direccion?.type === "required" && (
                  <p style={{ color: "red" }}>
                    El campo direccion es requerido
                  </p>
                )}
              </div>
            </div>
            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Enviar"
            />
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button
            className="text-center"
            variant="primary"
            onClick={handleClose}
          >
            Guardar Cambios
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
