const isLocalStorageSupported = (): boolean => {
	if (typeof Storage !== 'undefined') {
		return true;
	} else {
		console.error('LocalStorage is not supported in this browser.');
		return false;
	}
};

export const writeOnLocalStorage = <T>({
	key,
	data,
}: {
	key: string;
	data: T;
}): void => {
	if (isLocalStorageSupported()) {
		localStorage.setItem(key, JSON.stringify(data));
	}
};

export const readFromLocalStorage = <T>({ key }: { key: string }): T | null => {
	if (isLocalStorageSupported()) {
		const storedData = localStorage.getItem(key);
		if (storedData) {
			return JSON.parse(storedData) as T;
		}
	}
	return null;
};

export const removeFromLocalStorage = ({ key }: { key: string }): void => {
	if (isLocalStorageSupported()) {
		localStorage.removeItem(key);
	}
};
