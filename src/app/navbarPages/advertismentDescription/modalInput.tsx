import * as yup from 'yup';

import { Button, Flexbox, Modal, RemixIcon, Textarea } from 'shared/base';
import React, { useState } from 'react';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import classNames from 'classnames';
import { invalidModalState } from 'data/values';
import { parseError } from 'core/parseError';
import { performPublishClaimRequest } from 'core/claim/publishClaim';

const schema = yup.object().shape({
  claim: yup
    .string()
    .nullable()
    .required('Введите текст жалобы')
    .max(1000, 'Текст жалобы не должен превышать 1000 символов'),
});

interface IModalProps {
  advertismentId: string;
  show: boolean;
  handleClose: () => void;
}

export const ModalInput: React.FC<IModalProps> = ({ advertismentId, show, handleClose }) => {
  const [inputText, setInputText] = useState({ claim: '' });
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => {
    setModalProps({ ...invalidModalState, show: false });
  };

  const publishClaim = async () => {
    try {
      setErrorMessage('');
      await schema.validate(inputText, { abortEarly: false });
      await performPublishClaimRequest(advertismentId, inputText.claim);
      handleClose();
      setModalProps({ ...modalProps, show });
      setInputText({ claim: '' });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <>
      <Modal valid text="Жалоба успешно отправлена" show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('modal', show ? 'd-block' : 'd-none')} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <Flexbox alignItems="center" justifyContent="end" p="3">
              <Button onClick={() => handleClose()}>
                <RemixIcon name="close" />
              </Button>
            </Flexbox>
            <Flexbox vertical alignItems="center" px="3">
              <Textarea
                solid
                placeholder="Введите текст жалобы"
                value={inputText.claim}
                onChange={(inputText) => setInputText({ claim: inputText })}
                onEnterPress={publishClaim}
              />
            </Flexbox>
            <Flexbox vertical justifyContent="center" p="3">
              <ErrorMessagesView messages={errorMessage} />
              <Button primary px="3" onClick={publishClaim}>
                Подтвердить
              </Button>
            </Flexbox>
          </div>
        </div>
      </div>
    </>
  );
};
