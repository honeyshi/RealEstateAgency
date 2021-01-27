import React from 'react';
import { Button, Flexbox, TextField } from 'shared/base';
import { Select } from '../select';

export const StartPageFilters: React.FC = () => {
  return (
    <Flexbox justifyContent="between" directionSize="md" pt="5" className="flex-column">
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Тип недвижимости
        </TextField>
        <Select selectOptions={['Квартира', 'Комната', 'Дом']} selectText="Квартира" onSelectValue={() => void 0} />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Район
        </TextField>
        <Select
          selectOptions={[
            'Автозаводский',
            'Ленинский',
            'Сормовский',
            'Канавинский',
            'Московский',
            'Нижегородский',
            'Приокский',
            'Советский',
            'поселок Новинки',
          ]}
          selectText="Автозаводский"
          onSelectValue={() => void 0}
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Стоимость
        </TextField>
        <Select
          selectOptions={[
            'до 20 тыс. рублей',
            'до 30 тыс. рублей',
            'до 40 тыс. рублей',
            'до 50 тыс. рублей',
            'свыше 50 тыс. рублей',
          ]}
          selectText="до 20 тыс. рублей"
          onSelectValue={() => void 0}
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Площадь
        </TextField>
        <Select
          selectOptions={['до 30 м²', 'до 40 м²', 'до 50 м²', 'до 60 м²', 'свыше 60 м²']}
          selectText="до 30 м²"
          onSelectValue={() => void 0}
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Комнатность
        </TextField>
        <Select selectOptions={['Студия', '1', '2', '3', 'свыше 3']} selectText="Студия" onSelectValue={() => void 0} />
      </Flexbox>
      <Button fontLight className="rounded-link" mt="4" h="25">
        Показать объекты
      </Button>
    </Flexbox>
  );
};
