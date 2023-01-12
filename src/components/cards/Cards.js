import styles from './Cards.module.css'
import React, { createRef, useEffect, useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';

let testfunc = () => {
    localStorage.removeItem("items")
    const data = require('./items.json')
    localStorage.setItem("items", JSON.stringify(data))
    console.log(data)
}

testfunc()

const ADD_ITEM = 'ADD-ITEM'
const UPDATE_ITEM = 'UPDATE-ITEM'
const DELETE_ITEM = 'DELETE-ITEM'

const ItemForm = (props) => {

    const items = JSON.parse(localStorage.getItem("items"));
    const addItemNameRef = React.createRef();
    const addItemPriceRef = React.createRef();
    const addItemImgRef = React.createRef();
    const addItemCountRef = React.createRef();

    const [disabled, setDisabled] = useState(true)

    const [data, setData] = useState({
        name: '',
        isNameValid: false,
        price: '',
        isPriceValid: false,
        img: '',
        isImgValid: false,
        count: '',
        isCountValid: false
    })
    const [getId, setId] = useState(items.length)

    let validateStringValue = (value) => {
        return typeof value === "string" && value !== "";
    }

    let validateIntValue = (value) => {
        value = parseInt(value)
        console.log(Number.isInteger(value))
        return Number.isInteger(value);
    }

    let validateUrl = (value) => {
        const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z\d@:%._+~#=]{1,256}\.[a-zA-Z\d()]{1,6}\b[-a-zA-Z\d()@:%_+.~#?&\/=]*$/;
        console.log(httpRegex.test(value))
        return httpRegex.test(value);
    }
    let checkButtonForValidate = () => {
        if (data.isNameValid && data.isPriceValid
            && data.isCountValid && data.isImgValid) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    let addItem = () => {
        setId(getId => getId + 1)
        console.log(`id is ${getId}`)
        items.push({
            "id": getId,
            "name": `${data.name}`,
            "price": data.price,
            "img": `${data.img}`,
            "count": data.count
        })
        console.log(items)
        localStorage.setItem("items", JSON.stringify(items))
        setData({
            name: '',
            isNameValid: false,
            price: '',
            isPriceValid: false,
            img: '',
            isImgValid: false,
            count: '',
            isCountValid: false
        })
    }

    let updateItem = (id) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i] = {
                    "id": id,
                    "name": `${data.name}`,
                    "price": data.price,
                    "img": `${data.img}`,
                    "count": data.count
                }
                console.log(items)
                localStorage.setItem("items", JSON.stringify(items))
                break;
            }
        }
        setData({
            name: '',
            isNameValid: false,
            price: '',
            isPriceValid: false,
            img: '',
            isImgValid: false,
            count: '',
            isCountValid: false
        })
    }


    if (!props.show) {
        return null;
    }
    else {
        switch (props.action) {
            case ADD_ITEM: {
                return (
                    <div className={styles.item_form}>
                        <div className={styles.form_wrapp}>
                            <div className={styles.form_content}>
                                <input type="text"
                                    placeholder='Название'
                                    ref={addItemNameRef}
                                    onChange={() => {
                                        const value = addItemNameRef.current.value;
                                        if (validateStringValue(value)) {
                                            data.name = value
                                            data.isNameValid = true
                                        }
                                        else {
                                            data.isNameValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Стоимость'
                                    ref={addItemPriceRef}
                                    onChange={() => {
                                        const value = addItemPriceRef.current.value;
                                        if (validateIntValue(value)) {
                                            data.price = value
                                            data.isPriceValid = true
                                        }
                                        else {
                                            data.isPriceValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Ссылка на фото'
                                    ref={addItemImgRef}
                                    onChange={() => {
                                        const value = addItemImgRef.current.value;
                                        if (validateUrl(value)) {
                                            data.img = value
                                            data.isImgValid = true
                                        }
                                        else {
                                            data.isImgValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='В наличии'
                                    ref={addItemCountRef}
                                    onChange={() => {
                                        const value = addItemCountRef.current.value;
                                        if (validateIntValue(value)) {
                                            data.count = value
                                            data.isCountValid = true
                                        }
                                        else {
                                            data.isCountValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />
                            </div>
                            <div className={styles.form_buttons}>
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        addItem()
                                        setDisabled(true)
                                        props.onClose()
                                    }}
                                >
                                    Добавить
                                </button>
                                <button onClick={props.onClose}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )
            }

            case UPDATE_ITEM: {
                return (
                    <div className={styles.item_form}>
                        <div className={styles.form_wrapp}>
                            <div className={styles.form_content}>
                                <input type="text"
                                    placeholder='Название'
                                    ref={addItemNameRef}
                                    onChange={() => {
                                        const value = addItemNameRef.current.value;
                                        if (validateStringValue(value)) {
                                            data.name = value
                                            data.isNameValid = true
                                        }
                                        else {
                                            data.isNameValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemNameRef.current.value === '') {
                                            addItemNameRef.current.value = items[props.id].name
                                            if (validateStringValue(addItemNameRef.current.value)) {
                                                data.name = addItemNameRef.current.value
                                                data.isNameValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Стоимость'
                                    ref={addItemPriceRef}
                                    onChange={() => {
                                        const value = addItemPriceRef.current.value;
                                        if (validateIntValue(value)) {
                                            data.price = value
                                            data.isPriceValid = true
                                        }
                                        else {
                                            data.isPriceValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemPriceRef.current.value === '') {
                                            addItemPriceRef.current.value = items[props.id].price
                                            if (validateIntValue(addItemPriceRef.current.value)) {
                                                data.price = addItemPriceRef.current.value
                                                data.isPriceValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Ссылка на фото'
                                    ref={addItemImgRef}
                                    onChange={() => {
                                        const value = addItemImgRef.current.value;
                                        if (validateUrl(value)) {
                                            data.img = value
                                            data.isImgValid = true
                                        }
                                        else {
                                            data.isImgValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemImgRef.current.value === '') {
                                            addItemImgRef.current.value = items[props.id].img
                                            if (validateUrl(addItemImgRef.current.value)) {
                                                data.img = addItemImgRef.current.value
                                                data.isImgValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='В наличии'
                                    ref={addItemCountRef}
                                    onChange={() => {
                                        const value = addItemCountRef.current.value;
                                        if (validateIntValue(value)) {
                                            data.count = value
                                            data.isCountValid = true
                                        }
                                        else {
                                            data.isCountValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemCountRef.current.value === '') {
                                            addItemCountRef.current.value = items[props.id].count
                                            if (validateIntValue(addItemCountRef.current.value)) {
                                                data.count = addItemCountRef.current.value
                                                data.isCountValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />
                            </div>
                            <div className={styles.form_buttons}>
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        updateItem(props.id)
                                        setDisabled(true)
                                        props.onClose()
                                    }}
                                >
                                    Подтвердить
                                </button>
                                <button onClick={props.onClose}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            case DELETE_ITEM: {

                let onClickFuncs = () => {
                    props.deleteItem()
                    props.onClose()
                }
                return (
                    <div className={styles.item_form}>
                        <div className={styles.form_wrapp}>
                            <div className={styles.form_content}>
                                Вы действительно хотите удалить товар?
                            </div>
                            <div className={styles.form_buttons}>
                                <button
                                    onClick={onClickFuncs}
                                >
                                    Да
                                </button>
                                <button onClick={props.onClose}>
                                    Нет
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            default: {
                return (
                    <div>
                        oops
                    </div>
                )
            }
        }
    }
}

const CardArea = (props) => {
    const [show, setShow] = useState(false)

    const [action, setAction] = useState()

    const HIGHLIGHTVALUE = '0px 0px 8px 8px rgba(0, 126, 251, 0.1)'
    const rectRef = createRef()

    const [highlightItem, setHighlightItem] = useState({
        id: 0,
        boxShadow: 'none',
        isActive: false
    })
    const rectStyle = { boxShadow: `${highlightItem.boxShadow}` }

    const changeHighlightOnClick = (valueId) => {

        if (highlightItem.boxShadow === 'none' && !highlightItem.isActive) {
            setHighlightItem({
                id: valueId,
                boxShadow: HIGHLIGHTVALUE,
                isActive: true
            })
        }
        if (highlightItem.boxShadow !== 'none' && highlightItem.isActive) {
            setHighlightItem({
                id: valueId,
                boxShadow: 'none',
                isActive: false
            })
        }
    }

    let deleteItem = (id) => {
        const state = JSON.parse(localStorage.getItem("items"));
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state.splice(i, 1)
                break;
            }
        }
        console.log(state)
        localStorage.setItem("items", JSON.stringify(state))
    }

    return (
        <div className={styles.content}>
            <ClickAwayListener onClickAway={() => {
                setHighlightItem({
                    id: props.id,
                    boxShadow: 'none',
                    isActive: false
                })
            }}>
                <div
                    ref={rectRef}
                    style={rectStyle}
                    className={styles.rect}
                    onClick={() => {
                        changeHighlightOnClick(props.id)
                    }}
                >
                    <div className={styles.grid_wrapp}>
                        <div className={styles.img}>
                            <img src={`${props.img}`} alt="" />
                        </div>
                        <div className={styles.text_content}>
                            <div className={styles.title}>
                                Название: {props.name}
                            </div>
                            <div className={styles.price}>
                                Стоимость: {props.price}
                            </div>
                            <div className={styles.count}>
                                В наличии: {props.count}
                            </div>
                        </div>
                        <div className={styles.item_buttons}>
                            <button className={styles.item_butt_edit}
                                onClick={() => {
                                    setShow(true)
                                    setAction(UPDATE_ITEM)
                                }}
                            >
                                Изменить
                            </button>
                            <button className={styles.item_butt_delete}
                                onClick={() => {
                                    setShow(true)
                                    setAction(DELETE_ITEM)
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
            <ItemForm
                action={action}
                show={show}
                id={props.id}
                deleteItem={() => { deleteItem(props.id) }}
                onClose={() => { setShow(false) }}
            />
        </div>
    )
}

const Cards = () => {
    const state = JSON.parse(localStorage.getItem("items"));
    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    let [itemsData, setItemsData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItemsData(JSON.parse(localStorage.getItem("items")).map((item) =>
                <CardArea
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />
            ))
        }, 1)
    }, [state])

    return (
        <div className={styles.wrapper}>
            {itemsData}
            <div className={styles.button}>
                <button
                    onClick={() => {
                        setShow(true)
                        setAction(ADD_ITEM)

                    }}
                >
                    Добавить
                </button>
            </div>
            <ItemForm
                action={action}
                show={show}
                onClose={() => { setShow(false) }}
            />
        </div>
    )
}

export default Cards