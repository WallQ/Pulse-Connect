import crypto from 'crypto';

export const encrypt = (text: string | undefined): string | undefined => {
	if (!text) return;
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(
		'aes-256-cbc',
		Buffer.from(process.env.NEXT_PUBLIC_ENCRYPTION_KEY ?? ''),
		iv,
	);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);

	return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (text: string | undefined): string | undefined => {
	if (!text) return;
	const textParts = text.split(':');
	const iv = Buffer.from(textParts[0]!, 'hex');
	const encryptedTextBuffer = Buffer.from(textParts[1]!, 'hex');
	const decipher = crypto.createDecipheriv(
		'aes-256-cbc',
		Buffer.from(process.env.NEXT_PUBLIC_ENCRYPTION_KEY ?? ''),
		iv,
	);
	let decrypted = decipher.update(encryptedTextBuffer);
	decrypted = Buffer.concat([decrypted, decipher.final()]);

	return decrypted.toString();
};
