import * as yup from 'yup';

import { Button, CheckBox, Column, Flexbox, Input, Row, Textarea } from 'shared/base';
import React, { useState } from 'react';
import { Sex, districts } from 'data/values';

import { CotenantEdit } from 'core/cotenant/cotenantModel';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { FilesUploader } from './filesUploader';
import InputRange from 'react-input-range';
import { ProfileInfromationRow } from './profileInformationRow';
import { Select } from 'shared/composite/select';
import { parseError } from 'core/parseError';

const schema = yup.object().shape({
  age: yup
    .string()
    .nullable()
    .required('Вы не указали свой возраст')
    .max(2, 'Возраст должен иметь длину не более 2 символов'),
  ownSex: yup.number().notOneOf([-1], 'Вы не указали свой пол'),
  district: yup.number().notOneOf([-1], 'Вы не указали район'),
  description: yup
    .string()
    .nullable()
    .required('Вы не заполнили описание заявки')
    .max(255, 'Описание заявки не должно превышать 255 символов'),
  cotenantSex: yup.number().notOneOf([-1], 'Вы не указали пол соарендатора'),
  phone: yup
    .string()
    .nullable()
    .required('Вы не указали номер телефона')
    .min(11, 'Телефон должен состоять минимум из 11 символов')
    .max(12, 'Телефон должен состоять максимум из 12 символов'),
  image: yup.string().nullable().required('Вы не загрузили свое фото'),
});

const initialState: CotenantEdit = {
  age: '',
  ownSex: -1,
  district: -1,
  description: '',
  cotenantSex: -1,
  cotenantAge: { min: 18, max: 70 },
  phone: '',
  image: '',
};

export const CreateCoRequestPage: React.FC = () => {
  const [form, setForm] = useState<CotenantEdit>(initialState);
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const saveChanges = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <>
      <Flexbox>
        <Column size={8} pl="0">
          <ProfileInfromationRow label="Ваш возраст">
            <Input
              solid
              placeholder=""
              value={form.age}
              onChange={(age) => setForm({ ...form, age: age })}
              onEnterPress={saveChanges}
            />
          </ProfileInfromationRow>
          <ProfileInfromationRow row label="Ваш пол">
            <CheckBox
              name="own-sex-male"
              value={form.ownSex === Sex.male}
              onChange={(value) =>
                value ? setForm({ ...form, ownSex: Sex.male }) : setForm({ ...form, ownSex: Sex.initial })
              }
              className="mr-5"
              key="own-sex-male">
              Мужской
            </CheckBox>
            <CheckBox
              name="own-sex-female"
              value={form.ownSex === Sex.female}
              onChange={(value) =>
                value ? setForm({ ...form, ownSex: Sex.female }) : setForm({ ...form, ownSex: Sex.initial })
              }
              key="own-sex-female">
              Женский
            </CheckBox>
          </ProfileInfromationRow>
        </Column>
        <Column rounded="50" size={3} py="3" className="shadow avatar-uploader-container">
          <FilesUploader fileUrl={form.image} />
        </Column>
      </Flexbox>
      <ProfileInfromationRow label="Район">
        <Select
          solid
          selectOptions={districts}
          selectText="Район"
          className="w-100"
          onSelectValue={(district) => setForm({ ...form, district: districts.indexOf(district) })}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Опишите свою заявку">
        <Textarea
          solid
          placeholder=""
          value={form.description}
          onChange={(description) => setForm({ ...form, description: description })}
          onEnterPress={saveChanges}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow row label="Желаемый пол соарендатора">
        <CheckBox
          name="cotenant-sex-male"
          value={form.cotenantSex === Sex.male}
          onChange={(value) =>
            value ? setForm({ ...form, cotenantSex: Sex.male }) : setForm({ ...form, cotenantSex: Sex.initial })
          }
          className="mr-5"
          key="cotenant-sex-male">
          Мужской
        </CheckBox>
        <CheckBox
          name="cotenant-sex-female"
          value={form.cotenantSex === Sex.female}
          onChange={(value) =>
            value ? setForm({ ...form, cotenantSex: Sex.female }) : setForm({ ...form, cotenantSex: Sex.initial })
          }
          className="mr-5"
          key="cotenant-sex-female">
          Женский
        </CheckBox>
        <CheckBox
          name="cotenant-sex-unselected"
          value={form.cotenantSex === Sex.unselected}
          onChange={(value) =>
            value ? setForm({ ...form, cotenantSex: Sex.unselected }) : setForm({ ...form, cotenantSex: Sex.initial })
          }
          key="cotenant-sex-unselected">
          Не важен
        </CheckBox>
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Желаемый возраст соарендатора">
        <InputRange
          formatLabel={(value) => `${value} лет`}
          maxValue={70}
          minValue={18}
          value={form.cotenantAge}
          step={1}
          onChange={(value) => setForm({ ...form, cotenantAge: value })}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Телефон">
        <Input
          solid
          placeholder="+7 (000) 000 - 00 - 00"
          value={form.phone}
          onChange={(phone) => setForm({ ...form, phone: phone })}
          onEnterPress={saveChanges}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="">
        <ErrorMessagesView messages={errorMessage} />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="">
        <Row alignItems="center">
          <Button primary onClick={saveChanges}>
            Сохранить
          </Button>
          <Button
            secondary
            ml="5"
            onClick={() => {
              setErrorMessage('');
              setForm(initialState);
            }}>
            Отменить
          </Button>
        </Row>
      </ProfileInfromationRow>
    </>
  );
};
