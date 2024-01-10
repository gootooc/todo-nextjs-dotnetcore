"use client";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../Context/DarkModeContext";
type Props = {
    filter: string;
    filters: string[];
    onFilter: (filter: string) => void;
};

export default function TodoHeader({ filter, filters, onFilter }: Props) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className="header">
            <button className="hd-toggle" onCanPlay={toggleDarkMode}>
                {!isDarkMode && <HiMoon />}
                {isDarkMode && <HiSun />}
            </button>
            <ul className={`hd-filters`}>
                {filters.map((value, index) => (
                    <li
                        key={index}
                        className={`hd-filter${value === filter ? " selected" : ""}`}
                        onClick={() => onFilter(value)}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </header>
    );
}
