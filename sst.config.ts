import type { SSTConfig } from 'sst';
import { SvelteKitSite, Config } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'example-config-sst',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const MY_EXAMPLE_CONFIG = new Config.Secret(stack, 'MY_EXAMPLE_CONFIG');
			const site = new SvelteKitSite(stack, 'site', {
				bind: [MY_EXAMPLE_CONFIG]
			});
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
