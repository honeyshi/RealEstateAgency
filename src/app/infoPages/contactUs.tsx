import React, { useState } from 'react';
import * as yup from 'yup';

import {
  Block,
  Button,
  Column,
  Container,
  ExternalLink,
  Flexbox,
  Icon,
  Input,
  Row,
  Section,
  Textarea,
  TextField,
} from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { DefaultPage } from 'shared/layout/defaultPage';
import { checkInvalidInput } from 'core/checkInvalidInput';
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
      <Section bottom>
        <Container>
          <Row>
            <Column>
              <Block bg="light" h="100" />
            </Column>
            <Column>
              <Flexbox justifyContent="center" alignItems="center" vertical>
                <TextField tag="h2" mb="3">
                  Напишите нам
                </TextField>
                <TextField center mb="3">
                  Если у вас возникли вопросы, оставьте их в форме ниже.
                </TextField>
                <Flexbox vertical className="contact-form">
                  <Input
                    borderBottom
                    formSpaces
                    placeholder="Email"
                    invalid={checkInvalidInput('Email', errorMessage)}
                    value={form.email}
                    onChange={(email) => setForm({ email: email, message: form.message })}
                    onEnterPress={sendMessage}
                  />
                  <Textarea
                    formSpaces
                    placeholder="Сообщение"
                    invalid={checkInvalidInput('Сообщение', errorMessage)}
                    value={form.message}
                    onChange={(message) => setForm({ email: form.email, message: message })}
                    onEnterPress={sendMessage}
                  />
                  <ErrorMessagesView messages={errorMessage} />
                  <Button onClick={sendMessage} light py="3">
                    Отправить
                  </Button>
                  <TextField center my="3">
                    Или напишите нам в социальных сетях
                  </TextField>
                  <Flexbox justifyContent="around">
                    <ExternalLink to="https://www.instagram.com/" text="black-50">
                      <Icon name="instagram" prefix="fab" />
                    </ExternalLink>
                    <ExternalLink to="https://vk.com/" text="black-50">
                      <Icon name="vk" prefix="fab" />
                    </ExternalLink>
                    <ExternalLink to="https://web.telegram.org/" text="black-50">
                      <Icon name="telegram" prefix="fab" />
                    </ExternalLink>
                  </Flexbox>
                </Flexbox>
              </Flexbox>
            </Column>
          </Row>
        </Container>
      </Section>
    </DefaultPage>
  );
};
