interface Persona {
  nombreCompleto: string;
  edad: number;
  dirreccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Gabriel",
    edad: 24,
    dirreccion: {
      pais: "Mexico",
      casaNo: 630,
    },
  };
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;
