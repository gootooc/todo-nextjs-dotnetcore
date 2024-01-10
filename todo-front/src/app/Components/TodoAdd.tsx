"use client";
import { v4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../Models/Todo";

type Props = {
    onAdd: (addTodo: Todo) => void;
};

export default function TodoAdd({ onAdd }: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newTodo = { id: v4(), text: text, status: "active" };
        onAdd(newTodo);

        setText("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input type="text" className="add-input" value={text} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
}
