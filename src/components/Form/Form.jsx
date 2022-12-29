import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from '../hook/usTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [index, setIndex] = useState('');
    const [house, setHouse] = useState('');
    const [entrance, setEntrance] = useState('');
    const [flat, setFlat] = useState('');
    const [comment, setComment] = useState('');
    const [floor, setFloor] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            street,
            index,
            house,
            entrance,
            flat,
            floor,
            comment,
        }
        tg.sendData(JSON.stringify(data));
    }, [country, city, street, index, house, entrance, flat, floor, comment,])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked',  onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!country, !city, !street, !index, !house) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])



    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeIndex = (e) => {
        setIndex(e.target.value)
    }
    const onChangeHouse = (e) => {
        setHouse(e.target.value)
    }
    const onChangeEntrance = (e) => {
        setEntrance(e.target.value)
    }
    const onChangeFloor = (e) => {
        setFloor(e.target.value)
    }
    const onChangeFlat = (e) => {
        setFlat(e.target.value)
    }
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }



    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
            className={'input'}
            type="text"
            placeholder={'Город'}
            value={country}
            onChange={onChangeCity}
        />
            <input
            className={'input'}
            type="text"
            placeholder={'Индекс'}
            value={street}
            onChange={onChangeIndex}
        />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Дом'}
                value={street}
                onChange={onChangeHouse}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Подъезд'}
                value={street}
                onChange={onChangeEntrance}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Этаж'}
                value={street}
                onChange={onChangeFloor}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Квартира'}
                value={street}
                onChange={onChangeFlat}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Комментарий'}
                value={street}
                onChange={onChangeComment}
            />


        </div>
    );
};

export default Form;