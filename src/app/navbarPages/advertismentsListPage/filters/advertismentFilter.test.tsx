import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { FiltersContainer } from './filtersContainer';
import { Provider } from 'react-redux';
import { appReducer } from 'data/reducer';
import { createStore } from '@reduxjs/toolkit';

// @ts-ignore
const ReduxProvider = ({ children, reduxStore }) => <Provider store={reduxStore}>{children}</Provider>;

test('Change property type to room in filters', async () => {
  const store = createStore(appReducer);

  render(
    <ReduxProvider reduxStore={store}>
      <FiltersContainer />
    </ReduxProvider>
  );

  fireEvent.click(screen.getByText(/Комната/i));
  expect(screen.queryByText('Количество комнат')).not.toBeInTheDocument();
  expect(screen.queryByText('1')).not.toBeInTheDocument();
  expect(screen.queryByText('2')).not.toBeInTheDocument();
  expect(screen.queryByText('3')).not.toBeInTheDocument();
  expect(screen.queryByText('4+')).not.toBeInTheDocument();
  expect(screen.queryByText('Студия')).not.toBeInTheDocument();
});

test('Change property type to house in filters', async () => {
  const store = createStore(appReducer);

  render(
    <ReduxProvider reduxStore={store}>
      <FiltersContainer />
    </ReduxProvider>
  );

  fireEvent.click(screen.getByText('Дом'));
  expect(screen.queryByText('Количество комнат')).toBeInTheDocument();
  expect(screen.queryByText('1')).toBeInTheDocument();
  expect(screen.queryByText('2')).toBeInTheDocument();
  expect(screen.queryByText('3')).toBeInTheDocument();
  expect(screen.queryByText('4+')).toBeInTheDocument();
  expect(screen.queryByText('Студия')).not.toBeInTheDocument();
});

const checkCheckbox = (containerName: string, label1: string, label2: string) => {
  fireEvent.click(screen.getByText(containerName));
  const checkbox1 = screen.getByLabelText(label1, { selector: 'input' });
  const checkbox2 = screen.getByLabelText(label2, { selector: 'input' });
  fireEvent.click(checkbox1);
  fireEvent.click(checkbox2);
  expect(checkbox1).toBeChecked();
  expect(checkbox2).toBeChecked();
};

const validateCheckboxIsNotChecked = (label: string) => {
  expect(screen.getByLabelText(label, { selector: 'input' })).not.toBeChecked();
};

test('Change some filters and reset them', async () => {
  const store = createStore(appReducer);

  render(
    <ReduxProvider reduxStore={store}>
      <FiltersContainer />
    </ReduxProvider>
  );

  checkCheckbox('Район', 'Нижегородский', 'Автозаводский');
  checkCheckbox('Удобства', 'Кондиционер', 'Посудомоечная машина');
  checkCheckbox('Условия проживания', 'Можно с детьми', 'Без залога');

  fireEvent.click(screen.getByText('Сбросить фильтры'));

  validateCheckboxIsNotChecked('Нижегородский');
  validateCheckboxIsNotChecked('Автозаводский');
  validateCheckboxIsNotChecked('Кондиционер');
  validateCheckboxIsNotChecked('Посудомоечная машина');
  validateCheckboxIsNotChecked('Можно с детьми');
  validateCheckboxIsNotChecked('Без залога');
});
