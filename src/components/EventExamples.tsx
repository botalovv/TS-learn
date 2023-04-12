import React, {FC, useState, useRef} from 'react';

const EventExamples: FC = () => {
    const [value, setValue] = useState<string>('');
    const [counter, setCounter] = useState<number>(0);
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    function clickHandler (e: React.MouseEvent<HTMLButtonElement>) {
        setCounter(counter + 1);
        console.log(counter);
        console.log(value);
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>Кнопка</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background:"lightpink"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={overHandler}
                style={{width: 200, height: 200, background: isDrag ? "blue" : "lightpink", marginTop: 15}}></div>
        </div>
    );
};

export default EventExamples;