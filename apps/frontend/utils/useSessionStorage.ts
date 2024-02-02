import { useCallback, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

declare global {
    interface WindowEventMap {
        "session-storage": CustomEvent
    }
}

function serialize<T>(value: T): string {
    return JSON.stringify(value);
}

function deserialize<T>(value: string, defaultValue: T): T {
    try {
        return JSON.parse(value);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return defaultValue;
    }
}

export function useSessionStorage<T>(key: string, initialValue: T): [T | undefined, Dispatch<SetStateAction<T>>] {
    const readValue = useCallback((): T => {
        const raw = window.sessionStorage.getItem(key);
        return raw ? deserialize(raw, initialValue) : initialValue;
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>();

    const setValue: Dispatch<SetStateAction<T>> = (value => {
        const newValue = value instanceof Function ? value(readValue()) : value;
        window.sessionStorage.setItem(key, serialize(newValue));
        setStoredValue(newValue);

        window.dispatchEvent(new StorageEvent("session-storage", { key }));
    });

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return [storedValue, setValue];
}