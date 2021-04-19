import * as yup from 'yup';

import { Button, Input, Modal, Row, TextField, Textarea } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { OneAdvertismentModel } from 'core/getAdvertisment/advertismentModel';
import { ProfileInfromationRow } from './profileInformationRow';
import { checkInvalidInput } from 'core/checkInvalidInput';
import { history } from 'core/history';
import { invalidModalState } from 'data/values';
import { parseError } from 'core/parseError';
import { performEditAdvertismentRequest } from 'core/profile/editAdvertisment';
import { performGetOneAdvertismentRequest } from 'core/getAdvertisment/getOneAdvertisment';
import { useParams } from 'react-router-dom';

const schema = yup.object().shape({
  phone: yup.string().nullable().required('Укажите номер телефона'),
  payment: yup.string().nullable().required('Укажите арендную плату'),
  description: yup.string().nullable().required('Укажите описание объявления'),
});

interface Form {
  phone: string;
  deposit: string;
  payment: string;
  description: string;
}

const initialState: Form = {
  phone: '',
  deposit: '',
  payment: '',
  description: '',
};

export const EditAdvertismentPage: React.FC = () => {
  const [form, setForm] = useState<Form>(initialState);
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const [currentAdvertisment, setCurrentAdvertisment] = useState<OneAdvertismentModel>();
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => {
    setModalProps({ ...invalidModalState, show: false });
    history.goBack();
  };

  const { id } = useParams<{ id: string }>();

  const saveAdvertisment = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
      if (currentAdvertisment !== undefined) {
        await performEditAdvertismentRequest(
          currentAdvertisment,
          id,
          form.phone,
          form.deposit,
          form.payment,
          form.description
        );
        setModalProps({ show: true, valid: true, text: 'Объявление успешно изменено' });
      }
    } catch (error) {
      error instanceof yup.ValidationError
        ? setErrorMessage(parseError(error))
        : setModalProps({ ...invalidModalState });
    }
  };

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      try {
        const result = await performGetOneAdvertismentRequest(id);
        if (!mounted) {
          const advertisment = result as OneAdvertismentModel;
          setForm({
            phone: advertisment.contact_phone,
            deposit: advertisment.deposit === null ? '' : String(advertisment.deposit),
            payment: String(advertisment.price),
            description: advertisment.description,
          });
          setCurrentAdvertisment(advertisment);
        }
      } catch (error) {
        error.response.status === 404 ? history.push('/not-found-advertisment') : history.push('/error');
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, [id]);

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <TextField center tag="h4" mt="5">
        Редактирование объявления
      </TextField>
      <ProfileInfromationRow label="Телефон">
        <Input
          solid
          placeholder=""
          invalid={checkInvalidInput('номер телефона', errorMessage)}
          value={form.phone}
          onChange={(phone) => setForm({ ...form, phone: phone })}
          onEnterPress={() => saveAdvertisment()}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Залог">
        <Input
          solid
          placeholder=""
          value={form.deposit}
          onChange={(deposit) => setForm({ ...form, deposit: deposit })}
          onEnterPress={() => saveAdvertisment()}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Стоимость аренды">
        <Input
          solid
          placeholder="₽/месяц"
          invalid={checkInvalidInput('арендную плату', errorMessage)}
          value={form.payment}
          onChange={(payment) => setForm({ ...form, payment: payment })}
          onEnterPress={() => saveAdvertisment()}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Описание объявления">
        <Textarea
          solid
          placeholder=""
          invalid={checkInvalidInput('описание', errorMessage)}
          value={form.description}
          onChange={(description) => setForm({ ...form, description: description })}
          onEnterPress={() => saveAdvertisment()}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="">
        <ErrorMessagesView messages={errorMessage} />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="">
        <Row alignItems="center">
          <Button primary onClick={() => saveAdvertisment()}>
            Сохранить
          </Button>
          <Button
            secondary
            ml="5"
            onClick={() => {
              setForm(initialState);
              history.goBack();
            }}>
            Отменить
          </Button>
        </Row>
      </ProfileInfromationRow>
    </>
  );
};
