import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { OptionSelect } from "./OptionSelect";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";

export function ModalIncio({ modalIncioPais, setModalIncioPais }) {
  const { modalIncioPaisForm, setModalIncioPaisForm } =
    useContext(ProductosContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pais: "AR",
    },
  });

  const onSubmit = (data) => {
    setModalIncioPaisForm(data.pais);
    setModalIncioPais(false)
  };
  return (
    <>
      <Modal
        show={modalIncioPais}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Elegi el pais a enviar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Sleccionar Pais</label>
              <select
                className="form-select"
                {...register("pais", {
                  required: true,
                })}
              >
                <OptionSelect />
                {errors.pais?.type === "required" && (
                  <p>Es obligatorio elegir un pais</p>
                )}
              </select>
            </div>
            <input
              type="submit"
              value="Elegir pais"
              className="btn btn-primary w-100"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
