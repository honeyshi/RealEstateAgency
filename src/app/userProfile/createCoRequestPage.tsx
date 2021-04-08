import * as yup from 'yup';

import { Button, CheckBox, Input, Row, Textarea } from 'shared/base';
import InputRange, { Range } from 'react-input-range';
import React, { useState } from 'react';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { ProfileInfromationRow } from './profileInformationRow';
import { Select } from 'shared/composite/select';
import { districts } from 'data/values';
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
});

enum Sex {
  initial = -1,
  unselected = 0,
  male = 1,
  female = 2,
}

interface Form {
  age: string;
  ownSex: number;
  district: number;
  description: string;
  cotenantSex: number;
  cotenantAge: Range | number;
  phone: string;
}

const initialState: Form = {
  age: '',
  ownSex: -1,
  district: -1,
  description: '',
  cotenantSex: -1,
  cotenantAge: { min: 18, max: 70 },
  phone: '',
};

export const CreateCoRequestPage: React.FC = () => {
  const [form, setForm] = useState<Form>(initialState);
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
