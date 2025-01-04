import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

// Схема валідації
const schema = yup.object().shape({
  senderCity: yup.string().required('Оберіть місто-відправник'),
  receiverCity: yup.string().required('Оберіть місто-одержувач'),
  deliveryType: yup.string().required('Оберіть вид відправлення'),
  parcels: yup.array().of(
    yup.object().shape({
      weight: yup.number().required('Вкажіть вагу').positive('Вага повинна бути більше 0'),
      length: yup.number().required('Вкажіть довжину').positive('Довжина повинна бути більше 0'),
      width: yup.number().required('Вкажіть ширину').positive('Ширина повинна бути більше 0'),
      height: yup.number().required('Вкажіть висоту').positive('Висота повинна бути більше 0'),
    })
  ),
});

const App = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      parcels: [{ weight: '', length: '', width: '', height: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'parcels',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Вартість доставки</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Маршрут */}
        <div>
          <label>Місто-відправник:</label>
          <select {...register('senderCity')}>
            <option value="">Оберіть...</option>
            <option value="Київ">Київ</option>
            <option value="Львів">Львів</option>
          </select>
          <p style={{ color: 'red' }}>{errors.senderCity?.message}</p>
        </div>

        <div>
          <label>Місто-одержувач:</label>
          <select {...register('receiverCity')}>
            <option value="">Оберіть...</option>
            <option value="Одеса">Одеса</option>
            <option value="Харків">Харків</option>
          </select>
          <p style={{ color: 'red' }}>{errors.receiverCity?.message}</p>
        </div>

        {/* Вид відправлення */}
        <div>
          <label>Вид відправлення:</label>
          <select {...register('deliveryType')}>
            <option value="">Оберіть...</option>
            <option value="Посилки">Посилки</option>
            <option value="Документи">Документи</option>
          </select>
          <p style={{ color: 'red' }}>{errors.deliveryType?.message}</p>
        </div>

        {/* Характеристика посилки */}
        <h3>Характеристика посилки</h3>
        {fields.map((item, index) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <label>Вага (кг):</label>
            <input type="number" {...register(`parcels.${index}.weight`)} />
            <p style={{ color: 'red' }}>{errors.parcels?.[index]?.weight?.message}</p>

            <label>Довжина (см):</label>
            <input type="number" {...register(`parcels.${index}.length`)} />
            <p style={{ color: 'red' }}>{errors.parcels?.[index]?.length?.message}</p>

            <label>Ширина (см):</label>
            <input type="number" {...register(`parcels.${index}.width`)} />
            <p style={{ color: 'red' }}>{errors.parcels?.[index]?.width?.message}</p>

            <label>Висота (см):</label>
            <input type="number" {...register(`parcels.${index}.height`)} />
            <p style={{ color: 'red' }}>{errors.parcels?.[index]?.height?.message}</p>

            <button type="button" onClick={() => remove(index)}>
              Видалити посилку
            </button>
          </div>
        ))}

        <button type="button" onClick={() => append({ weight: '', length: '', width: '', height: '' })}>
          Додати посилку
        </button>

        {/* Додаткові послуги */}
        <h3>Додаткові послуги</h3>
        <div>
          <label>
            <input type="checkbox" {...register('packing')} /> Послуга "Пакування"
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" {...register('floorDelivery')} /> Послуга "Підйом на поверх"
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" {...register('returnDelivery')} /> Послуга "Зворотна доставка"
          </label>
        </div>

        {/* Кнопки */}
        <button type="submit">Розрахувати вартість</button>
        <button type="reset">Очистити</button>
      </form>
    </div>
  );
};

export default App;
