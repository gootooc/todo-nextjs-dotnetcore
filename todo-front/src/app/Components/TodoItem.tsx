"use client";

import React, { MouseEvent } from "react";
import { FaTrash } from "react-icons/fa";
import { Todo } from "../Models/Todo";
import { ChangeEvent } from "react";

type Props = {
    todo: Todo;
    onUpdate: (upateTodo: Todo) => void;
    onDelete: (deleteTodo: Todo) => void;
};

export default function TodoItem({ todo, onUpdate, onDelete }: Props) {
    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        const changeStatus = e.target.checked ? "completed" : "active";
        onUpdate({ ...todo, status: changeStatus });
    };

    const handleDeleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
        onDelete({ ...todo });
    };

    return (
        <li className="td-todo">
            <input
                id={todo.id}
                type="checkbox"
                className="td-checkbox"
                defaultChecked={todo.status === "completed"}
                onChange={handleChangeTodo}
            />
            <label htmlFor={todo.id} className="td-text">
                {todo.text}
            </label>
            <span className="td-icon">
                <button className="td-button" onClick={handleDeleteTodo}>
                    <FaTrash />
                </button>
            </span>
        </li>
    );
}
