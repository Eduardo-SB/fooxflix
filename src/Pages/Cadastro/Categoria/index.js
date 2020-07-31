import React, { useState } from 'react';

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
              label="Cor"
              type="color"
              name="color"
              value={values.color}
              onChange={handleChangeInput}
            />
          </div>
          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                name="color"
                value={values.color}
                onChange={handleChangeInput}
                />
            </label>
          </div> */}

          <Button>
            Cadastrar
          </Button>
        </form>

        <ul>
          {category.map((categoryName) => (
            <li key={`${categoryName}`}>
              {category.name}
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
