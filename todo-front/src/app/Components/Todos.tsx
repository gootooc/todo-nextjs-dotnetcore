"use client";
import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const filters = ["all", "active", "completed"];

export default function Todos() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <>
            <TodoHeader filter={filter} filters={filters} onFilter={setFilter} />
            <TodoList filter={filter} />
        </>
    );
}
