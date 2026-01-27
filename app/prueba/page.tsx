'use client';

import './prueba.css';
import { useActionState } from 'react';

type State = {
  success: boolean;
  message: string;
};

async function GuardarLibro(
  prevState: State,
  formData: FormData
): Promise<State> {
  return {
    success: true,
    message: 'Se agregó el libro',
  };
}

export default function Page() {
  const [state, formAction, isPending] = useActionState(GuardarLibro, {
    success: false,
    message: '',
  });

  return (
    <section className="containerForm">
      <h1 className="AgregarLibro">Agregar Nuevo Libro</h1>

      <div className="texto">
        Completa la información del libro para agregarlo al catálogo
      </div>

      <form action={formAction}>
        <h2 className="subtitulo">Información del Libro</h2>
        <p className="required">
          Los campos marcados con <span className="required-star">*</span> son
          obligatorios
        </p>

        <h3>
          Imagen del Libro <span className="required-star">*</span>
        </h3>

        <div className="upload-area">
          <div>Haz clic para subir la portada del libro</div>
          <div className="upload-text">PNG, JPG o JPEG (máx. 5MB)</div>
        </div>

        <div className="groupInput">
          <label>
            Título <span className="required-star">*</span>
          </label>
          <input name="titulo" type="text" required />
        </div>

        <div className="groupInput">
          <label>
            Autores <span className="required-star">*</span>
          </label>
          <input name="autores" type="text" required />
        </div>

        <div className="grid">
          <div className="groupInput">
            <label>Páginas</label>
            <input name="paginas" type="number" />
          </div>

          <div className="groupInput">
            <label>Edición</label>
            <input name="edicion" type="text" />
          </div>

          <div className="groupInput">
            <label>Año</label>
            <input name="anio" type="number" />
          </div>
        </div>

        <div className="row">
          <div className="groupInput">
            <label>
              ISBN <span className="required-star">*</span>
            </label>
            <input name="isbn" type="text" required />
          </div>

          <div className="groupInput">
            <label>
              Precio <span className="required-star">*</span>
            </label>
            <input name="precio" type="text" required />
          </div>
        </div>

        <div className="groupInput">
          <label>Versión</label>
          <select name="version">
            <option value="impresa">Impresa</option>
            <option value="digital">Digital</option>
            <option value="ambas">Ambas</option>
          </select>
        </div>

        <div className="groupInput">
          <label>Descripción</label>
          <textarea name="descripcion" rows={4}></textarea>
        </div>

        <div className="groupInput">
          <label>Etiquetas</label>
          <input name="etiquetas" type="text" />
          <div className="upload-text">Separa las etiquetas con comas</div>
        </div>

        <button className="GuaLib" disabled={isPending}>
          {isPending ? 'Guardando...' : 'Guardar Libro'}
        </button>

        {state.message && (
          <p
            className={`mensaje ${
              state.success ? 'mensaje-exito' : 'mensaje-error'
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </section>
  );
}
