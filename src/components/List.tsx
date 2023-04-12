import React, {FC} from 'react';
import {PropsWithChildren} from 'react';

interface ListProps<T> extends PropsWithChildren{
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}

