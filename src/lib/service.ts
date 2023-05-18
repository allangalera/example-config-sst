import { Config } from 'sst/node/config';

export const makeApiCall = async () => {
	console.log(Config.MY_EXAMPLE_CONFIG);

	return 'just some data';
};
