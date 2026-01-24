import './CrearLibro.css';
export default function CrearLibro() {
  return (
    <section className="form">
      <h1>Informacion del libro</h1>

      <div className="groupInput">
        <label>Titulo</label>
        <input type="text" />
      </div>

      <div className="groupInput">
        <label>Autores</label>
        <input type="text" />
      </div>

      <div className="grid">
        <div className="groupInput">
          <label>Paginas</label>
          <input type="text" />
        </div>

        <div className="groupInput">
          <label>Edicion</label>
          <input type="text" />
        </div>

        <div className="groupInput">
          <label>Annio</label>
          <input type="text" />
        </div>

        <div className="groupInput">
          <label>Paginas</label>
          <input type="text" />
        </div>

        <div className="groupInput ">
          <label>Edicion</label>
          <input type="text" />
        </div>
      </div>

      <div className="groupInput ">
        <label>Description</label>
        <textarea rows={4}></textarea>
      </div>
      <div className="groupInput">
        <label>GuaLib</label>
        <button className="GuaLib">GuardarLibro</button>
      </div>
    </section>
  );
}
