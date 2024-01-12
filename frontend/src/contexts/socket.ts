import { createContext } from 'react';
import socketio from 'socket.io-client';

import { env } from '@/env.mjs';
import { getServerAuthSession } from '@/server/auth';

const session = await getServerAuthSession();

export const socket = socketio(env.SOCKET_URL, {
	auth: {
		token: session?.user.accessToken,
	},
});
export const SocketContext = createContext(socket);
