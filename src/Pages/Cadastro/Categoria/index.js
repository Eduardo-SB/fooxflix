import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function Video() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function handleSubmit(event) {
    event.preventDefault();

    setCategory([
      ...category,
      values,
    ]);

    setValues(initialValues);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeInput(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP = 'https://fooxflix.herokuapp.com/categorias';

    fetch(URL_TOP).then(async (res) => {
      const response = await res.json();
      setCategory([
        ...response,
      ]);
    });
    // setTimeout(() => {
    //   setCategory([
    //     ...category,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       color: '#6BD1FF',
    //       link_extra: {
    //         text: 'Formação de Front End na Alura',
    //         url: 'https://www.alura.com.br/cursos-online-front-end',
    //       },
    //     },
    //     {
    //       id: 2,
    //       name: 'Back End',
    //       color: '#00C86F',
    //       link_extra: {
    //         text: 'Cursos de Back End na Alura',
    //         url: 'https://www.alura.com.br/cursos-online-programacao',
    //       },
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.name}
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <FormField
              label="Nome da Categoria"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChangeInput}
            />
          </div>
          {/* <div>
            <label>
              Nome da categoria:
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChangeInput}
                />
            </label>
          </div> */}

          <div>
            <FormField
              label="Descrição"
              type="textarea"
              name="description"
              value={values.description}
              onChange={handleChangeInput}
            />
          </div>
          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.description}
                name="description"
                onChange={handleChangeInput}
              />
            </label>
          </div> */}

          <div>
            <FormField
              label="color"
              type="color"
              name="color"
              value={values.color}
              onChange={handleChangeInput}
            />
          </div>
          {/* <div>
            <label>
              color:
              <input
                type="color"
                name="color"
                value={values.color}
                onChange={handleChangeInput}
                />
            </label>
          </div> */}

          <Button to="\">
            Cadastrar
          </Button>
        </form>

        {category.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {category.map((categoryName) => (
            <li key={`${categoryName.name}`}>
              {categoryName.name}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    </>
  );
}
