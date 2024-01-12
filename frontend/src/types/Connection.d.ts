export type Connection = {
	profileImageURL: string | undefined;
	firstName: string;
	lastName: string;
	userName: ReactNode;
	id: string;
	date: string;
	status: string;
	userId1: string;
	userId2: string;
};

export type Connections = Connection[];
