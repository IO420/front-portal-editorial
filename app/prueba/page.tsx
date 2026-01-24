import './prueba.css';
export default function Page() {
  return (
    <section className="containerForm">
      <h1 className="AgregarLibro">Agregar Nuevo Libro</h1>

      <div className="texto">
        Completa la información del libro para agregarla al catálogo
        <h1>Informacion del libro</h1>
        <div>Los campos marcados con * son obligatorios</div>
        <label>Tìtulo *</label>
        <input type="text" />
        <div className="groupInput">
          <label>Autores *</label>
          <input type="text" />
        </div>
        <div className="grid">
          <div className="groupInput">
            <label>Páginas</label>
            <input type="text" />
          </div>

          <div className="groupInput">
            <label>Edición</label>
            <input type="text" />
          </div>

          <div className="groupInput">
            <label>Año</label>
            <input type="text" />
          </div>

          <div className="groupInput">
            <label>ISBN *</label>
            <input type="text" />
          </div>

          <div className="groupInput ">
            <label>Precio *</label>
            <input type="text" />
          </div>

          <div className="groupInput ">
            <label>Versión</label>
            <input type="text" />
          </div>
          <div className="groupInput">
            <label>Descripción</label>
            <textarea rows={4}></textarea>
          </div>

          <label>Etiquetas *</label>
          <input type="text" />
        </div>
        <div className="groupInput">
          <button className="GuaLib">Guardar Libro</button>
        </div>
      </div>
    </section>
  );
}
