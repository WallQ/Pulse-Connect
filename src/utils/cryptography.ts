import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.NEXT_PUBLIC_ENCRYPTION_KEY ?? '', {
	saltLength: 0,
	encoding: 'hex',
});

export const encrypt = (text: string): string | undefined => {
	if (!text) return;
	try {
		return cryptr.encrypt(text);
	} catch (error) {
		console.error(error);
	}
};

export const decrypt = (text: string): string | undefined => {
	if (!text) return;
	try {
		return cryptr.decrypt(text);
	} catch (error) {
		console.error(error);
	}
};
