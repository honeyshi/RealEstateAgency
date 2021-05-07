import * as yup from 'yup';

import { Button, ExternalLink, Flexbox, Icon, Input, RemixIcon, TextField, Textarea } from 'shared/base';
import React, { useState } from 'react';

import { DefaultPage } from 'shared/layout/defaultPage';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { FormPage } from 'shared/layout/formPage';
import { checkInvalidInput } from 'core/checkInvalidInput';
import image from 'icons/contactus.svg';
import { parseError } from 'core/parseError';

const schema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .required('Email обязательное поле')
    .email('Email не соответствует формату электронной почты'),
  message: yup
    .string()
    .nullable()
    .required('Сообщение не должно быть пустым')
    .min(10, 'Сообщение должен иметь длину не менее 10 символов'),
});

interface Form {
  email: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const [form, setForm] = useState<Form>({ email: '', message: '' });
  const sendMessage = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <DefaultPage>
      <FormPage header="Напишите нам" helperText="Если у вас возникли вопросы, оставьте их в форме ниже." image={image}>
        <Flexbox vertical w="75">
          <Input
            solid
            placeholder="Email"
            invalid={checkInvalidInput('Email', errorMessage)}
            value={form.email}
            onChange={(email) => setForm({ email: email, message: form.message })}
            onEnterPress={sendMessage}
            my="3"
          />
          <Textarea
            solid
            placeholder="Сообщение"
            invalid={checkInvalidInput('Сообщение', errorMessage)}
            value={form.message}
            onChange={(message) => setForm({ email: form.email, message: message })}
            onEnterPress={sendMessage}
            mt="3"
            mb="4"
          />
          <ErrorMessagesView messages={errorMessage} />
          <Button primary onClick={sendMessage} py="3">
            Отправить
          </Button>
          <TextField center my="3">
            Или напишите нам в социальных сетях
          </TextField>
          <Flexbox justifyContent="around" mb="3">
            <ExternalLink to="https://www.instagram.com/" text="black-50">
              <RemixIcon name="instagram" />
            </ExternalLink>
            <ExternalLink to="https://vk.com/" text="black-50">
              <Icon name="vk" prefix="fab" />
            </ExternalLink>
            <ExternalLink to="https://web.telegram.org/" text="black-50">
              <RemixIcon name="telegram" />
            </ExternalLink>
          </Flexbox>
        </Flexbox>
      </FormPage>
    </DefaultPage>
  );
};
