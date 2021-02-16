import React, { useState, useEffect } from 'react'
const url = "https://fakestoreapi.com/products/";
const AppContext = React.createContext();


const Context = ({children}) => {
    let [arr, setArr] = useState([]);
    const [list, setList] = useState([]);
    const [cartNum, setCartNum] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showAlready, setShowAlready] = useState(false);

    const fetchUrl = async () => {
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setList(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchUrl();
    }, []);

    const handleClick = (id) => {
        if (arr.find(item => item.id === id)){
            setShowAlready(true);
        }
        if(!arr.find(item => item.id === id)){
            setCartNum(cartNum + 1);
            const item = list.find(item => item.id === id);
            arr.push({...item, amount: 1});
            setShowAlready(false);
            setShowModal(true);
        };
        return;
    };

    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setShowModal(false)
        }, 1500)
        return () => clearTimeout(timeOut);
    }, [showModal]);

    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setShowAlready(false)
        }, 1500)
        return () => clearTimeout(timeOut);
    }, [showAlready]);

    const increase = (id) => {
        const ind = arr.find(item => item.id === id);
        const amnt = arr.indexOf(ind);
        arr[amnt] = {...ind, amount: ind.amount + 1};
        setArr([...arr]);
    };
    const decrease = (id) => {
        const ind = arr.find(item => item.id === id);
        const amnt = arr.indexOf(ind);
        if (ind.amount === 1){
            return;
        };
        arr[amnt] = {...ind, amount: ind.amount - 1};
        setArr([...arr]);
    };


    const removeItem = (id) => {
        setArr(arr.filter(item => item.id !== id));
        setCartNum(cartNum - 1);
    };

    const removeAll = () => {
        setArr([]);
        setCartNum(0)
    };

    const totalAmount = arr.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
    }, 0);

    useEffect(() => {
        setCartNum(totalAmount);
    }, [totalAmount]);

    const inTotal = arr.reduce((acc, curr) => {
        const total = curr.price * curr.amount;
        acc += total;
        return acc;
    }, 0).toFixed(2);

    return (
        <AppContext.Provider value={{
            list, 
            cartNum, 
            handleClick, 
            loading,
            arr,
            removeItem,
            removeAll,
            increase,
            decrease,
            totalAmount,
            inTotal,
            showModal,
            showAlready
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobe = () => {
    return React.useContext(AppContext);
}

export default Context
